import { pathToRegexp } from 'path-to-regexp';
import { describe, it, expect } from 'vitest';

const matcher = [pathToRegexp('/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)')];

const ALLOWED_PATHS = ['/', '/en', '/en/about', '/rs/about', '/about'];
const BLOCKED_PATHS = ['/_next/image', '_next/static'];

describe('matcher', () => {
  it('should match allowed paths', () => {
    ALLOWED_PATHS.forEach((path) => {
      expect(path).toMatch(matcher[0]);
    });
  });

  it('should not match blocked paths', () => {
    BLOCKED_PATHS.forEach((path) => {
      expect(path).not.toMatch(matcher[0]);
    });
  });
});
