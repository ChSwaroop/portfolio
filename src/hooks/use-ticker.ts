import { useEffect, useState } from 'react'

/**
 * Counts up every `ms` while `enabled`. Used to drive looping, data-style motion
 * (word roller, stack packet, trace replay) without per-frame re-renders.
 */
export function useTicker(ms: number, enabled = true): number {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (!enabled) return
    const id = window.setInterval(() => setTick((t) => t + 1), ms)
    return () => window.clearInterval(id)
  }, [ms, enabled])

  return tick
}

/** Current time, refreshed every second. */
export function useNow(): Date {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return now
}
