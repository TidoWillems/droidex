import { hasEffectiveCard, getDroidProgress } from './droidHierarchy';

export interface DroidFactsInput {
  cardId: string;
  name: string;

  collected: Set<string>;
  present: Set<string>;
  flawless: Set<string>;

  rebirthPath: number;
  rebirthLevel: number;

  futureUseCountMap: Record<string, number>;

  eventLocked?: boolean;
  canBeFlawless?: boolean;
}

export interface DroidFacts {
  owned: boolean;
  present: boolean;
  flawless: boolean;
  dna: number;

  futureUses: number;
  remainingUses: number;
  lastUse: boolean;

  eventLocked: boolean;
  canBeFlawless: boolean;
}

export function getDroidFacts(input: DroidFactsInput): DroidFacts {
  const futureUses = input.futureUseCountMap[input.cardId] ?? 0;

  const remainingUses = futureUses;

  const lastUse = futureUses === 1;

  return {
    owned: input.collected.has(input.cardId),

    present: hasEffectiveCard(input.present, input.cardId),

    flawless: input.flawless.has(input.name),

    futureUses,
    remainingUses,
    lastUse,

    dna: getDroidProgress(input.present, input.name),

    eventLocked: input.eventLocked ?? false,
    canBeFlawless: input.canBeFlawless ?? true,
  };
}
