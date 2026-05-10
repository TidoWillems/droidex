import { useMemo } from 'react'
import { ALL_CARDS } from '../data/droids'
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
  const cards = useMemo(() =>
    ALL_CARDS.filter(
      (c) => c.tier === tier && (rarity === 'ALL' || c.droid.rarity === rarity)
    ),
  [tier, rarity])

  if (cards.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-zinc-600 text-sm">
        No droids match this filter.
      </div>
    )
  }

  return (
    <div className="grid gap-3 p-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
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
