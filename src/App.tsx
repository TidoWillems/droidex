import { useState } from 'react';                                 
import { Routes, Route } from 'react-router-dom';
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
type RarityOrAll = Rarity | 'ALL';
type DroidTypeOrAll = DroidType | 'ALL';                          
type CollectionStatus = 'ALL' | 'OWNED' | 'MISSING';
export default function App() {                                     
const { collected, toggle, rebirthLevel, setRebirthLevel } =
  useTracker(null)
const [tier, setTier] = useState<TierOrAll>('DEFAULT');           
const [rarity, setRarity] = useState<RarityOrAll>('ALL');         
const [droidClass, setDroidClass] = useState<DroidTypeOrAll>('ALL');
const [collectionStatus, setCollectionStatus] = useState<CollectionStatus>('ALL');
const [search, setSearch] = useState('');
const [highlightedIds, setHighlightedIds] = useState<Set<string>>(new Set());                                                       
const [filtersOpen, setFiltersOpen] = useState(false);

return (
<div className="min-h-screen bg-black flex flex-col font-mono">

<Header
  collected={collected}
  rebirthLevel={rebirthLevel}
/>

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
                <span className="text-[10px] font-bold tracking-widest text-zinc-400">FILTERS</span>  
                <span className="text-zinc-600 text-xs">{filtersOpen ? '▲' : '▼'}</span>  
              </button>  

              {/* Filter content: hidden on mobile until toggled, always visible on desktop */}  
              <div className={`${filtersOpen ? 'flex' : 'hidden'} lg:flex flex-col flex-1 lg:overflow-y-auto`}>  

                {/* Search */}  
                <div className="px-4 py-3 border-b border-zinc-800">  
                  <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">SEARCH</p>  
                  <SearchInput value={search} onChange={setSearch} />  
                </div>  

                {/* Rarity */}  
                <div className="px-4 py-3 border-b border-zinc-800">  
                  <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">RARITY</p>  
                  <RarityFilter active={rarity} onChange={setRarity} />  
                </div>  

                {/* Class */}  
                <div className="px-4 py-3 border-b border-zinc-800">  
                  <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">CLASS</p>  
                  <ClassFilter active={droidClass} onChange={setDroidClass} />  
                </div>  

                {/* Collection */}  
                <div className="px-4 py-3">  
                  <p className="text-[9px] font-bold tracking-widest text-zinc-500 mb-2">COLLECTION</p>  
                  <CollectionFilter active={collectionStatus} onChange={setCollectionStatus} />  
                </div>  
              </div>  
            </aside>  

            {/* Droid grid — scrollable, fills remaining space */}  
            <div className="order-last lg:order-first flex-1 overflow-y-auto">  
              <DroidGrid  
                tier={tier}  
                rarity={rarity}  
                droidClass={droidClass}  
                collectionStatus={collectionStatus}  
                search={search}  
                collected={collected}  
                onToggle={toggle}  
                highlightedIds={highlightedIds}  
              />  
            </div>  
          </div>  

          <RebirthPanel  
            rebirthLevel={rebirthLevel}  
            collected={collected}  
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
          rebirthLevel={rebirthLevel}  
          collected={collected}  
          onSetRebirth={setRebirthLevel}  
        />  
      }  
    />  
  </Routes>  

<footer className="px-4 py-2 border-t border-zinc-800 bg-black text-center text-xs text-zinc-500">

  <div>Droidex Android Offline Fork</div>

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

<div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] leading-relaxed text-zinc-600">

  <div className="font-bold tracking-wider mb-1">
    FAN PROJECT NOTICE
  </div>

  <div>
    Droidex Android Offline is a fan-made project.
  </div>

  <div className="mt-2">
    This project is not affiliated with,
    endorsed, sponsored, or approved by
    Epic Games, Disney, or Lucasfilm Ltd.
  </div>

  <div className="mt-2">
    Fortnite is a trademark of Epic Games.
    Star Wars and related names are
    trademarks of Lucasfilm Ltd. / Disney.
  </div>

  <div className="mt-2">
    All game-related assets, names, and
    imagery belong to their respective owners.
  </div>

</div>

</footer>

</div>

);
}
