import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import type { TierOrAll, DroidType, Rarity } from './data/droids';
import { useTracker } from './hooks/useTracker';
import { Header } from './components/Header';
import { TierTabs } from './components/TierTabs';
import { RarityFilter } from './components/RarityFilter';
import { ClassFilter } from './components/ClassFilter';
import { CollectionFilter } from './components/CollectionFilter';
import { SearchInput } from './components/SearchInput';
import { DroidGrid } from './components/DroidGrid';
import { RebirthPanel } from './components/RebirthPanel';
import { RebirthsPage } from './components/RebirthsPage';
import { Footer } from './components/Footer';
import { TipsPage } from './components/TipsPage';
import { AboutPage } from './components/AboutPage';

type RarityOrAll = Rarity | 'ALL';
type DroidTypeOrAll = DroidType | 'ALL';
type CollectionStatus = 'ALL' | 'OWNED' | 'MISSING';

export default function App() {
  const {
    collected,
    present,

    toggleCollected,
    togglePresent,

    rebirthLevel,
    setRebirthLevel,
    rebirthPath,
    setRebirthPath,
  } = useTracker(null);

  const [tier, setTier] = useState<TierOrAll>('DEFAULT');
  const [rarity, setRarity] = useState<RarityOrAll>('ALL');
  const [droidClass, setDroidClass] = useState<DroidTypeOrAll>('ALL');
  const [collectionStatus, setCollectionStatus] =
    useState<CollectionStatus>('ALL');

  const [search, setSearch] = useState('');
  const [highlightedIds, setHighlightedIds] = useState<Set<string>>(new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setCollectionStatus('ALL');
    }
  }, [location.pathname]);

  const isMissingActive =
    location.pathname === '/' && collectionStatus === 'MISSING';

  return (
    <div className="min-h-screen bg-black flex flex-col font-mono">
      <Header
        collected={collected}
        rebirthLevel={rebirthLevel}
        isMissingActive={isMissingActive}
        onShowMissing={() => {
          setTier('ALL');
          setCollectionStatus('MISSING');
          setFiltersOpen(false);
        }}
      />

      <div className="flex justify-center gap-2 py-2">
        {[1, 2, 3, 4].map((path) => (
          <button
            key={path}
            onClick={() => setRebirthPath(path)}
            className={`px-3 py-1 rounded border ${
              rebirthPath === path
                ? 'border-orange-500 text-orange-400'
                : 'border-zinc-700 text-zinc-400'
            }`}
          >
            RB{path}
          </button>
        ))}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col">
              <TierTabs active={tier} onChange={setTier} />

              {/* Main panel: grid left + filter sidebar right on desktop */}
              <div className="bg-zinc-950 border border-zinc-800 border-t-0 mx-3 rounded-b-lg flex flex-col lg:flex-row overflow-hidden max-h-[800px]">
                {/* Filter sidebar — top on mobile (order-first), right on desktop (lg:order-last) */}
                <aside className="order-first lg:order-last shrink-0 lg:w-64 lg:border-l border-b lg:border-b-0 border-zinc-800 flex flex-col bg-zinc-950">
                  {/* Mobile toggle header */}
                  <button
                    type="button"
                    onClick={() => setFiltersOpen((o) => !o)}
                    className="lg:hidden flex items-center justify-between w-full px-4 py-2.5 text-left"
                  >
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400">
                      FILTERS
                    </span>
                    <span className="text-zinc-600 text-xs">
                      {filtersOpen ? '▲' : '▼'}
                    </span>
                  </button>

                  {/* Filter content: hidden on mobile until toggled, always visible on desktop */}
                  <div
                    className={`${filtersOpen ? 'flex' : 'hidden'} lg:flex flex-col flex-1 lg:overflow-y-auto`}
                  >
                    {/* Search */}
                    <div className="px-4 py-3 border-b border-zinc-800">
                      <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">
                        SEARCH
                      </p>
                      <SearchInput value={search} onChange={setSearch} />
                    </div>

                    {/* Rarity */}
                    <div className="px-4 py-3 border-b border-zinc-800">
                      <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">
                        RARITY
                      </p>
                      <RarityFilter active={rarity} onChange={setRarity} />
                    </div>

                    {/* Class */}
                    <div className="px-4 py-3 border-b border-zinc-800">
                      <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">
                        CLASS
                      </p>
                      <ClassFilter
                        active={droidClass}
                        onChange={setDroidClass}
                      />
                    </div>

                    {/* Collection */}
                    <div className="px-4 py-3">
                      <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">
                        COLLECTION
                      </p>
                      <CollectionFilter
                        active={collectionStatus}
                        onChange={setCollectionStatus}
                      />
                      {/* REBIRTH FILTER (temporarily hidden)                   
   <div className="px-4 py-3 border-t border-zinc-800">
                        <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">
                          REBIRTH
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setRebirthFilter('ALL')}
                            className={
                              rebirthFilter === 'ALL'
                                ? 'filter-chip-active'
                                : 'filter-chip'
                            }
                          >
                            ALLE
                          </button>

                          <button
                            onClick={() => setRebirthFilter('NEEDED')}
                            className={
                              rebirthFilter === 'NEEDED'
                                ? 'filter-chip-active'
                                : 'filter-chip'
                            }
                          >
                            BENÖTIGT
                          </button>

                          <button
                            onClick={() => setRebirthFilter('HISTORICAL')}
                            className={
                              rebirthFilter === 'HISTORICAL'
                                ? 'filter-chip-active'
                                : 'filter-chip'
                            }
                          >
                            VERKAUFT
                          </button>
                        </div>
                      </div>
*/}
                    </div>
                  </div>
                </aside>

                {/* Droid grid — scrollable, fills remaining space */}
                <div className="order-last lg:order-first flex-1 overflow-y-auto">
                  <DroidGrid
                    rebirthPath={rebirthPath}
                    rebirthLevel={rebirthLevel}
                    tier={tier}
                    rarity={rarity}
                    droidClass={droidClass}
                    collectionStatus={collectionStatus}
                    rebirthFilter="ALL"
                    search={search}
                    collected={collected}
                    present={present}
                    onToggle={toggleCollected}
                    onTogglePresent={togglePresent}
                    highlightedIds={highlightedIds}
                  />
                </div>
              </div>

              <RebirthPanel
                rebirthPath={rebirthPath}
                rebirthLevel={rebirthLevel}
                collected={collected}
                present={present}
                onSetRebirth={setRebirthLevel}
                onHighlight={setHighlightedIds}
              />
            </div>
          }
        />
        <Route
          path="/rebirths"
          element={
            <RebirthsPage
              rebirthPath={rebirthPath}
              rebirthLevel={rebirthLevel}
              collected={collected}
              present={present}
              onSetRebirth={setRebirthLevel}
            />
          }
        />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
