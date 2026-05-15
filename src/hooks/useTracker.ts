import { useState, useEffect, useCallback, useRef } from 'react'

const STORAGE_KEY = 'droidex_v1'

interface StoredState {
  collected: string[]
  rebirthLevel: number
}

function readLocalStorage(): StoredState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)

    if (raw) {
      return JSON.parse(raw) as StoredState
    }
  } catch {
    // ignore broken data
  }

  return null
}

function writeLocalStorage(state: StoredState) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  )
}

export function useTracker(_uid: string | null) {
  const [collected, setCollected] =
    useState<Set<string>>(new Set())

  const [rebirthLevel, setRebirthLevelState] =
    useState<number>(0)

  const rebirthLevelRef = useRef(rebirthLevel)

  useEffect(() => {
    rebirthLevelRef.current = rebirthLevel
  }, [rebirthLevel])

  useEffect(() => {
    const local = readLocalStorage()

    setCollected(
      new Set(local?.collected ?? [])
    )

    setRebirthLevelState(
      local?.rebirthLevel ?? 0
    )
  }, [])

  const toggle = useCallback((id: string) => {
    setCollected((prev) => {
      const next = new Set(prev)

      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }

      writeLocalStorage({
        collected: Array.from(next),
        rebirthLevel: rebirthLevelRef.current
      })

      return next
    })
  }, [])

  const setRebirthLevel = useCallback(
    (level: number) => {
      setRebirthLevelState(level)

      setCollected((prev) => {
        writeLocalStorage({
          collected: Array.from(prev),
          rebirthLevel: level
        })

        return prev
      })
    },
    []
  )

  return {
    collected,
    toggle,
    rebirthLevel,
    setRebirthLevel
  }
}
