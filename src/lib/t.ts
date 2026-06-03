import { LANGUAGE } from '../data/language';

type Localized =
  | string
  | {
      de: string;
      en: string;
      fi?: string;
    };

export function t(value: Localized) {
  if (typeof value === 'string') {
    return value;
  }

  return value[LANGUAGE] ?? value.en;
}
