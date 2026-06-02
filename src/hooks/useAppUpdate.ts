// src/hooks/useAppUpdate.ts

import { useEffect, useState } from 'react';
import { APP_VERSION } from '../data/version';

export function useAppUpdate() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [latestVersion, setLatestVersion] = useState(APP_VERSION);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}version.json?t=${Date.now()}`)
      .then((r) => r.json())
      .then((data) => {
        setLatestVersion(data.version);

        if (data.version !== APP_VERSION) {
          setUpdateAvailable(true);
        }
      })
      .catch(() => {});
  }, []);

  return {
    updateAvailable,
    latestVersion,
  };
}
