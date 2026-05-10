import { useState } from 'react'
import type { Tier, Rarity } from './data/droids'
import { useTracker } from './hooks/useTracker'
import { Header } from './components/Header'
import { TierTabs } from './components/TierTabs'
import { RarityFilter } from './components/RarityFilter'
import { DroidGrid } from './components/DroidGrid'
import { RebirthPanel } from './components/RebirthPanel'

type RarityOrAll = Rarity | 'ALL'

export default function App() {
  const { collected, toggle, rebirthLevel, setRebirthLevel } = useTracker()
  const [tier, setTier] = useState<Tier>('DEFAULT')
  const [rarity, setRarity] = useState<RarityOrAll>('ALL')
  const [highlightedIds, setHighlightedIds] = useState<Set<string>>(new Set())

  return (
    <div className="min-h-screen bg-black flex flex-col font-mono">
      <Header collected={collected} rebirthLevel={rebirthLevel} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TierTabs active={tier} onChange={setTier} />

        <div className="bg-zinc-950 border border-zinc-800 border-t-0 mx-3 rounded-b-lg flex flex-col flex-1 overflow-hidden">
          <RarityFilter active={rarity} onChange={setRarity} />
          <div className="overflow-y-auto flex-1">
            <DroidGrid
              tier={tier}
              rarity={rarity}
              collected={collected}
              onToggle={toggle}
              highlightedIds={highlightedIds}
            />
          </div>
        </div>
      </div>

      <RebirthPanel
        rebirthLevel={rebirthLevel}
        collected={collected}
        onSetRebirth={setRebirthLevel}
        onHighlight={setHighlightedIds}
      />
    </div>
  )
}
