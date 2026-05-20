import { Link } from 'react-router-dom';
import { useInstallPrompt } from '../hooks/useInstallPrompt';
import { UI } from '../data/ui';
import { t } from '../lib/t';

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

      alert(t(UI.copied));
    } catch {
      window.prompt(t(UI.copied), url);
    }
  }

  return (
    <footer className="px-4 py-3 border-t border-zinc-800 bg-black text-center text-xs text-zinc-500">
      <div className="font-semibold">Droidex Android Offline Fork</div>

      <div className="mt-1">
        {t(UI.footerOriginal)}:
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
        {t(UI.footerFork)}:
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
          {t(UI.footerTips)}
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
          {t(UI.footerAbout)}
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
          {t(UI.footerShare)}
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
            {t(UI.footerInstall)}
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
          {t(UI.footerApp)}
        </a>
      </div>
      <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] leading-relaxed text-zinc-600">
        <div className="font-bold tracking-wider mb-2">{t(UI.fanProject)}</div>
        <p>{t(UI.fanText1)}</p>

        <p className="mt-2">{t(UI.fanText2)}</p>

        <p className="mt-2">{t(UI.fanText3)}</p>

        <p className="mt-2">{t(UI.fanText4)}</p>
      </div>
    </footer>
  );
}
