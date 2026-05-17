import { Link } from 'react-router-dom';
import { useInstallPrompt } from '../hooks/useInstallPrompt';

export function Footer() {

  const {
    canInstall,
    install
  } = useInstallPrompt();

  return (

    <footer className="px-4 py-3 border-t border-zinc-800 bg-black text-center text-xs text-zinc-500">

      <div className="font-semibold">
        Droidex Android Offline Fork
      </div>

      <div className="mt-1">
        Original:
        <a
          href="https://github.com/erikpeik/droidex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 ml-1"
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
          className="text-cyan-400 ml-1"
        >
          TidoWillems/droidex
        </a>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-3 text-zinc-400">

      <Link to="/tips">
        Tips
      </Link>

       <span>
         Share
      </span>

      {canInstall && (
        <button
          onClick={install}
          className="text-cyan-400"
      >
          Install App
        </button>
      )}

      <a
        href="https://tinyurl.com/droidex-app"
        target="_blank"
        rel="noreferrer"
        className="text-cyan-400"
      >
        droidex-app
      </a>

      </div>

      <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] leading-relaxed text-zinc-600">

        <div className="font-bold tracking-wider mb-2">
          FAN PROJECT NOTICE
        </div>

        <p>Droidex Android Offline is a fan-made project.</p>

        <p className="mt-2">
          This project is not affiliated with, endorsed,
          sponsored, or approved by Epic Games,
          Disney, or Lucasfilm Ltd.
        </p>

        <p className="mt-2">
          Fortnite is a trademark of Epic Games.
          Star Wars and related names are trademarks
          of Lucasfilm Ltd. / Disney.
        </p>

        <p className="mt-2">
          All game-related assets, names, and imagery
          belong to their respective owners.
        </p>

      </div>

    </footer>
  );
}
