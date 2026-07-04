// src/lib/systemStatus.ts

import { APP_VERSION } from '../data/version';
import { getBackupInfo } from './backup';
import { DROIDS } from '../data/droids';

export interface SystemStatusItem {
  id: string;

  category: 'application' | 'storage' | 'companion' | 'database' | 'rules';

  label: string;

  ok: boolean;

  status: string;

  detail: string;

  recommendation?: string;

  technical?: string;
}

export function getSystemStatus(): SystemStatusItem[] {
  const backup = getBackupInfo();

  const hasServiceWorker = 'serviceWorker' in navigator;

  const hasCacheStorage = 'caches' in window;

  const hasLocalStorage = (() => {
    try {
      localStorage.setItem('__test__', '1');
      localStorage.removeItem('__test__');
      return true;
    } catch {
      return false;
    }
  })();

  const companionLoaded = DROIDS.length > 0;

  const totalDroids = DROIDS.length;

  const tierCount = new Set(DROIDS.flatMap((droid) => droid.tiers)).size;

  return [
    {
      id: 'offline',
      category: 'application',

      label: 'Offline Ready',

      ok: hasServiceWorker && hasCacheStorage,

      status: hasServiceWorker && hasCacheStorage ? 'Ready' : 'Warning',

      detail: hasServiceWorker
        ? 'Offline features available'
        : 'Service Worker unavailable',

      recommendation: hasServiceWorker
        ? 'Nothing to do.'
        : 'Install the PWA in a supported browser.',

      technical: `Service Worker: ${hasServiceWorker}
Cache Storage: ${hasCacheStorage}`,
    },

    {
      id: 'storage',
      category: 'storage',

      label: 'Local Storage',

      ok: hasLocalStorage,

      status: hasLocalStorage ? 'Ready' : 'Error',

      detail: backup.hasData ? 'Data available' : 'No user data',

      recommendation: backup.hasData
        ? 'Storage contains user progress.'
        : 'Import a backup or begin collecting.',

      technical: `localStorage: ${hasLocalStorage}
Data: ${backup.hasData}`,
    },

    {
      id: 'backup',
      category: 'storage',

      label: 'Backup Engine',

      ok: backup.hasData,

      status: backup.hasData ? 'Ready' : 'Inactive',

      detail: backup.hasData ? 'Backup system operational' : 'No backup data',

      recommendation: backup.hasData
        ? 'Automatic recovery available.'
        : 'Backup activates after first save.',

      technical: 'localStorage → droidex_v2_update_backup',
    },
    {
      id: 'recovery',
      category: 'storage',
      label: 'Update Recovery',
      ok: true,
      status: backup.recoveryState,
      detail: 'Automatic update recovery',
    },
    {
      id: 'companion',
      category: 'companion',

      label: 'Companion Engine',

      ok: companionLoaded,

      status: companionLoaded ? 'Running' : 'Error',

      detail: companionLoaded ? 'Analysis engine loaded' : 'No Droid database',

      recommendation: companionLoaded
        ? 'Companion ready.'
        : 'Check Droid data.',

      technical: `${totalDroids} droids\n` + `${tierCount} tiers`,
    },
    {
      id: 'version',
      category: 'application',
      label: 'Version',
      ok: true,
      status: APP_VERSION,
      detail: `v${APP_VERSION}`,
    },
  ];
}
