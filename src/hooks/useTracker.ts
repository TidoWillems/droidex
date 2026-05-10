import { useState, useCallback } from 'react'

const STORAGE_KEY = 'droidex_v1'

interface StoredState {
  collected: string[]
  rebirthLevel: number
}

function load(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as StoredState
  } catch {
    // ignore
  }
  return { collected: [], rebirthLevel: 0 }
}

function save(state: StoredState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function useTracker() {
  const [collected, setCollected] = useState<Set<string>>(() => new Set(load().collected))
  const [rebirthLevel, setRebirthLevelState] = useState<number>(() => load().rebirthLevel)

  const toggle = useCallback((id: string) => {
    setCollected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      save({ collected: Array.from(next), rebirthLevel })
      return next
    })
  }, [rebirthLevel])

  const setRebirthLevel = useCallback((level: number) => {
    setRebirthLevelState(level)
    setCollected((prev) => {
      save({ collected: Array.from(prev), rebirthLevel: level })
      return prev
    })
  }, [])

  return { collected, toggle, rebirthLevel, setRebirthLevel }
}
