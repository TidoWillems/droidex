import { Link } from 'react-router-dom';
import { useInstallPrompt } from '../hooks/useInstallPrompt';

export function Footer() {
  const { canInstall, install } = useInstallPrompt();

  async function shareApp() {
    const url = 'https://tinyurl.com/droidex-app';

    if (navigator.share) {
      await navigator.share({
        title: 'Droidex Android Offline',
        text: 'Track Fortnite Star Wars Droid collection progress.',
        url,
      });

      return;
    }

    try {
      await navigator.clipboard.writeText(url);

      alert('Link copied');
    } catch {
      window.prompt('Copy link:', url);
    }
  }

  return (
    <footer className="px-4 py-3 border-t border-zinc-800 bg-black text-center text-xs text-zinc-500">
      <div className="font-semibold">Droidex Android Offline Fork</div>

      <div className="mt-1">
        Original:
        <a
          href="https://github.com/erikpeik/droidex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 ml-1 hover:text-cyan-100 transition-colors"
        >
          erikpeik/droidex
        </a>
      </div>

      <div className="mt-1">
        Fork:
        <a
          href="https://github.com/TidoWillems/droidex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 ml-1 hover:text-cyan-100 transition-colors"
        >
          TidoWillems/droidex
        </a>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-2 justify-center">
        <Link
          to="/tips"
          className="
            px-3 py-1 rounded border text-[10px]
            border-zinc-700 text-zinc-500
            hover:border-cyan-400
            hover:text-cyan-300
            transition-all
          "
        >
          TIPS
        </Link>

        <Link
          to="/about"
          className="
            px-3 py-1 rounded border text-[10px]
            border-zinc-700 text-zinc-500
            hover:border-cyan-400
            hover:text-cyan-300
            transition-all
          "
        >
          ABOUT
        </Link>

        <button
          onClick={shareApp}
          className="
            px-3 py-1 rounded border text-[10px]
            border-zinc-700 text-zinc-500
            hover:border-cyan-400
            hover:text-cyan-300
            transition-all
          "
        >
          SHARE
        </button>

        {canInstall && (
          <button
            onClick={install}
            className="
              px-3 py-1 rounded border text-[10px]
              border-emerald-600
              text-emerald-400
              shadow-[0_0_12px_rgba(16,185,129,.2)]
            "
          >
            INSTALL
          </button>
        )}

        <a
          href="https://tinyurl.com/droidex-app"
          target="_blank"
          rel="noreferrer"
          className="
            px-3 py-1 rounded border text-[10px]
            border-cyan-500 text-cyan-300
            shadow-[0_0_12px_rgba(34,211,238,.25)]
          "
        >
          APP
        </a>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] leading-relaxed text-zinc-600">
        <div className="font-bold tracking-wider mb-2">FAN PROJECT NOTICE</div>

        <p>Droidex Android Offline is a fan-made project.</p>

        <p className="mt-2">
          This project is not affiliated with, endorsed, sponsored, or approved
          by Epic Games, Disney, or Lucasfilm Ltd.
        </p>

        <p className="mt-2">
          Fortnite is a trademark of Epic Games. Star Wars and related names are
          trademarks of Lucasfilm Ltd. / Disney.
        </p>

        <p className="mt-2">
          All game-related assets, names, and imagery belong to their respective
          owners.
        </p>
      </div>
    </footer>
  );
}
