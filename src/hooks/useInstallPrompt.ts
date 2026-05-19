import { useEffect, useState } from 'react';

export function useInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  async function install() {
    if (!promptEvent) return;

    promptEvent.prompt();

    await promptEvent.userChoice;

    setPromptEvent(null);
  }

  return {
    canInstall: !!promptEvent,
    install,
  };
}
