import { useState, useEffect, useCallback, useRef } from 'react'
// import { doc, onSnapshot, setDoc, type Unsubscribe } from 'firebase/firestore'
// import { db } from '../firebase'

const STORAGE_KEY = 'droidex_v1'

interface StoredState {
  collected: string[]
  rebirthLevel: number
}

function readLocalStorage(): StoredState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as StoredState
  } catch {
    // ignore
  }
  return null
}

function writeLocalStorage(state: StoredState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function useTracker(uid: string | null) {
  const [collected, setCollected] = useState<Set<string>>(new Set())
  const [rebirthLevel, setRebirthLevelState] = useState<number>(0)

  const rebirthLevelRef = useRef(rebirthLevel)
  useEffect(() => {
    rebirthLevelRef.current = rebirthLevel
  }, [rebirthLevel])

    useEffect(() => {
      // Guest mode: load from localStorage
      const local = readLocalStorage()

      setCollected(new Set(local?.collected ?? []))
      setRebirthLevelState(local?.rebirthLevel ?? 0)

      return
    }, [uid])

  const toggle = useCallback((id: string) => {
    setCollected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      {
        writeLocalStorage({ collected: Array.from(next), rebirthLevel: rebirthLevelRef.current })
      }
      return next
    })
  }, [uid])

  const setRebirthLevel = useCallback((level: number) => {
    setRebirthLevelState(level)
    setCollected((prev) => {
      {
        writeLocalStorage({ collected: Array.from(prev), rebirthLevel: level })
      }
      return prev
    })
  }, [uid])

  return { collected, toggle, rebirthLevel, setRebirthLevel }
}
