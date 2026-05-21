import { APP_VERSION } from '../data/version';
import { GUIDE } from '../data/guide';
import { UI } from '../data/ui';
import { t } from '../lib/t';

export function AboutPage() {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-white text-xl font-bold">{t(UI.aboutTitle)}</h1>

        <p className="text-zinc-500 text-sm mt-2">{t(UI.aboutText)}</p>

        <p className="text-zinc-600 text-xs mt-1">v{APP_VERSION}</p>
      </div>

      <div className="text-cyan-400 text-[10px] font-bold tracking-widest">
        {t(UI.appGuide)}
      </div>
      <ul className="mt-3 text-sm text-zinc-300 space-y-2">
        <li>{t(UI.feature1)}</li>
        <li>{t(UI.feature2)}</li>
        <li>{t(UI.feature3)}</li>
        <li>{t(UI.feature4)}</li>
      </ul>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
        <div className="text-cyan-400 text-[10px] font-bold tracking-widest">
          APP GUIDE
        </div>

        <div className="mt-3 space-y-3">
          {GUIDE.map((item) => (
            <div key={item.id}>
              <div className="text-cyan-300 text-sm font-medium">
                {t(item.title)}
              </div>

              <div className="text-sm text-zinc-300">{t(item.text)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
        <div className="text-cyan-400 text-[10px] font-bold tracking-widest">
          {t(UI.builtWith)}
        </div>

        <div className="mt-3 text-sm text-zinc-300 space-y-1">
          <div>React</div>
          <div>Vite</div>
          <div>Tailwind</div>
          <div>GitHub Pages</div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
        <div className="text-cyan-400 text-[10px] font-bold tracking-widest">
          {t(UI.specialTools)}
        </div>
        <p className="mt-3 text-sm text-zinc-300">{t(UI.thumbnailTool)}</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
        <div className="text-cyan-400 text-[10px] font-bold tracking-widest">
          {t(UI.fork)}
        </div>

        <a
          href="https://github.com/TidoWillems/droidex"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 text-sm"
        >
          {t(UI.github)}
        </a>
      </div>
    </div>
  );
}
