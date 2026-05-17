export function AboutPage() {
  return (
    <div className="p-4 space-y-4">

      <div>
        <h1 className="text-white text-xl font-bold">
          Droidex Android Offline
        </h1>

        <p className="text-zinc-500 text-sm mt-2">
          Collection tracker and companion for Fortnite Star Wars Droid collection progress.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
        <div className="text-cyan-400 text-[10px] font-bold tracking-widest">
          FEATURES
        </div>

        <ul className="mt-3 text-sm text-zinc-300 space-y-2">
          <li>✓ Track collection progress</li>
          <li>✓ Manage rebirth planning</li>
          <li>✓ Install as offline PWA</li>
          <li>✓ Community tips and discoveries</li>
        </ul>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
        <div className="text-cyan-400 text-[10px] font-bold tracking-widest">
          BUILT WITH
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
          SPECIAL TOOLS
        </div>

        <p className="mt-3 text-sm text-zinc-300">
          Screenshot crop extraction pipeline for Droid thumbnails.
        </p>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">

        <div className="text-cyan-400 text-[10px] font-bold tracking-widest">
          FORK
        </div>

        <a
          href="https://github.com/TidoWillems/droidex"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 text-sm"
        >
          View source on GitHub →
        </a>

      </div>

    </div>
  );
}
