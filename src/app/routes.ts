const routes = {
  home: '/',
  aboutUs: '/about',
  prices: '/prices',
  education: '/education',
  vehicles: '/vehicles',
  apply: '/apply',
  contact: '/contact',
} as const;

export function getRoute(route: keyof typeof routes, locale?: string) {
  return locale ? `/${locale}${addLeadingSlashIfMissing(routes[route])}` : routes[route];
}

function addLeadingSlashIfMissing(route: string): string {
  if (!route.startsWith('/')) {
    return `/${route}`;
  }

  return route;
}
