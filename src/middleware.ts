import acceptLanguage from 'accept-language';
import { NextRequest, NextResponse } from 'next/server';

import { FALLBACK_LOCALE, SUPPORTED_LANGUAGES } from '@/translations/settings';

const COOKIE_NAME = 'i18next';
const HEADER_NAME = 'Accept-Language';

acceptLanguage.languages(SUPPORTED_LANGUAGES);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  const translationNext = translationMiddleware(req);

  if (translationNext) {
    return translationNext;
  }

  return NextResponse.next();
}

function translationMiddleware(req: NextRequest): NextResponse | undefined {
  const locale =
    acceptLanguage.get(req.cookies.get(COOKIE_NAME)?.value) ??
    acceptLanguage.get(req.headers.get(HEADER_NAME)) ??
    FALLBACK_LOCALE;

  // Redirect if locale in path is not supported
  if (!SUPPORTED_LANGUAGES.some((language) => req.nextUrl.pathname.startsWith(`/${language}`))) {
    return NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}`, req.url));
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') as string);
    const languageInReferer = SUPPORTED_LANGUAGES.find((language) => refererUrl.pathname.startsWith(`/${language}`));
    const response = NextResponse.next();

    if (languageInReferer) {
      response.cookies.set(COOKIE_NAME, languageInReferer);
    }

    return response;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)', { source: '/' }],
};
