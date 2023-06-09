/**
 * A common interface that can be used for any server component.
 *
 * Because all our pages are under the [locale] dynamic route, they can
 * all use this interface.
 *
 * Note: If you have more props, you can just merge the declarations via `extends`
 * or `&`.
 *
 * Note 2: The `locale` is optional because we also support navigating the app
 * without a locale in the URL.
 */
interface LocaleProps {
  params: {
    locale?: string;
  };
}
