import { ref, watch } from 'vue'

const STORAGE_KEY = 'longboard-diary-progress'

function loadProgress(): Set<string> {
  if (typeof localStorage === 'undefined') return new Set()
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? new Set(JSON.parse(saved) as string[]) : new Set()
  } catch {
    return new Set()
  }
}

const checkedTricks = ref<Set<string>>(loadProgress())

watch(
  checkedTricks,
  (val) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...val]))
    }
  },
  { deep: true },
)

export function useTrickProgress() {
  function toggle(trickId: string) {
    const next = new Set(checkedTricks.value)
    if (next.has(trickId)) {
      next.delete(trickId)
    } else {
      next.add(trickId)
    }
    checkedTricks.value = next
  }

  function isChecked(trickId: string): boolean {
    return checkedTricks.value.has(trickId)
  }

  return { checkedTricks, toggle, isChecked }
}
