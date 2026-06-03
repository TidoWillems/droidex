export const LANGUAGE = navigator.language.startsWith('de')
  ? 'de'
  : navigator.language.startsWith('fi')
    ? 'fi'
    : 'en';
