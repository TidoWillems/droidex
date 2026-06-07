// src/hooks/useAppUpdate.ts

import { useEffect, useState } from 'react';
import { APP_VERSION } from '../data/version';

export function useAppUpdate() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [latestVersion, setLatestVersion] = useState(APP_VERSION);

useEffect(() => {
  const checkForUpdate = () => {
    fetch(`${import.meta.env.BASE_URL}version.json?t=${Date.now()}`)
      .then((r) => r.json())
      .then((data) => {
        setLatestVersion(data.version);

        if (data.version !== APP_VERSION) {
          setUpdateAvailable(true);
        }
      })
      .catch(() => {});
  };

  // Sofort beim Start
  checkForUpdate();

  // Wenn App wieder sichtbar wird
  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      checkForUpdate();
    }
  };

  document.addEventListener(
    'visibilitychange',
    onVisibilityChange
  );

  return () => {
    document.removeEventListener(
      'visibilitychange',
      onVisibilityChange
    );
  };
}, []);

  return {
    updateAvailable,
    latestVersion,
  };
}
