import { UI } from './ui';
export const GUIDE = [
  {
    id: 'offline',
    category: 'APP',
    title: {
      de: 'Offline nutzbar',
      en: 'Works Offline',
      fi: 'Toimii offline-tilassa',
    },
    text: {
      de: 'Droidex kann als installierbare App genutzt werden.',
      en: 'Droidex can be installed and used offline.',
      fi: 'Droidex voidaan asentaa sovellukseksi ja sitä voi käyttää myös ilman verkkoyhteyttä.',
    },
  },

  {
    id: 'share',
    category: 'APP',
    title: {
      de: 'Teilen',
      en: 'Share',
      fi: 'Jaa',
    },
    text: {
      de: 'Versende Droidex direkt über den Share-Button.',
      en: 'Send Droidex directly through the share button.',
      fi: 'Jaa Droidex suoraan jakopainikkeen kautta.',
    },
  },

  {
    id: 'rebirth-badge',
    title: UI.rebirthBadgeTitle,
    text: UI.rebirthBadgeText,
  },

  {
    id: 'offline-timer',
    title: UI.offlineTimerTitle,
    text: UI.offlineTimerText,
  },
];
