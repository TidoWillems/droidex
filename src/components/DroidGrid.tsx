import { useMemo } from 'react'
import { ALL_CARDS, RARITY_ORDER } from '../data/droids'
import type { Tier, Rarity } from '../data/droids'
import { DroidCard } from './DroidCard'

interface Props {
  tier: Tier
  rarity: Rarity | 'ALL'
  collected: Set<string>
  onToggle: (id: string) => void
  highlightedIds?: Set<string>
}

export function DroidGrid({ tier, rarity, collected, onToggle, highlightedIds }: Props) {
  const cards = useMemo(() => {
    const filtered = ALL_CARDS.filter(
      (c) => c.tier === tier && (rarity === 'ALL' || c.droid.rarity === rarity)
    )
    // Sort by rarity then name
    filtered.sort((a, b) => {
      const ri = RARITY_ORDER.indexOf(a.droid.rarity) - RARITY_ORDER.indexOf(b.droid.rarity)
      if (ri !== 0) return ri
      return a.droid.name.localeCompare(b.droid.name)
    })
    return filtered
  }, [tier, rarity])

  if (cards.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-zinc-600 text-sm">
        No droids match this filter.
      </div>
    )
  }

  return (
    <div className="grid gap-2 p-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}>
      {cards.map((card) => (
        <DroidCard
          key={card.id}
          card={card}
          collected={collected.has(card.id)}
          onToggle={onToggle}
          highlighted={highlightedIds?.has(card.id)}
        />
      ))}
    </div>
  )
}
