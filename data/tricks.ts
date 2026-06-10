export type Difficulty = 'easy' | 'medium' | 'advanced'
export type Locale = 'en' | 'de'

export interface Trick {
    id: string
    name: string
    difficulty: Difficulty
    description: { en: string; de: string }
    steps: { en: string[]; de: string[] }
    image?: string
}

export interface TrickCategory {
    id: string
    icon: string
    name: { en: string; de: string }
    tricks: Trick[]
}

const CATEGORY_META: Record<string, { icon: string; name: { en: string; de: string } }> = {
    dancing: {icon: 'ph:person-simple-walk', name: {en: 'Dancing', de: 'Dancing'}},
    freestyle: {icon: 'ph:lightning', name: {en: 'Freestyle', de: 'Freestyle'}},
    linesCombos: {icon: 'ph:arrows-clockwise', name: {en: 'Lines & Combos', de: 'Lines & Kombos'}},
    handtricks: {icon: 'ph:hand-waving', name: {en: 'Hand Tricks', de: 'Handtricks'}},
}

// Parse the text under a ## EN / ## DE block into description + steps list
function parseSection(text: string) {
    const i = text.search(/^### /m)
    const description = (i >= 0 ? text.slice(0, i) : text).trim()
    const steps = i >= 0
        ? text.slice(i).replace(/^### [^\n]+\n/, '').split('\n')
            .map(l => l.replace(/^[-*]\s*/, '').trim()).filter(Boolean)
        : []
    return {description, steps}
}

function parseTrick(raw: string): Trick | null {
    const fmEnd = raw.indexOf('\n---\n', 4)
    if (fmEnd < 0) return null
    const meta: Record<string, string> = {}
    for (const line of raw.slice(4, fmEnd).split('\n')) {
        const i = line.indexOf(':')
        if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim()
    }
    if (!meta.id || !meta.name) return null
    
    const [, enText = '', deText = ''] = raw.slice(fmEnd + 5).split(/^## (?:EN|DE)\s*$/m)
    const en = parseSection(enText)
    const de = parseSection(deText)

    return {
        id: meta.id,
        name: meta.name,
        difficulty: (meta.difficulty as Difficulty) ?? 'easy',
        image: meta.image || undefined,
        description: {en: en.description, de: de.description},
        steps: {en: en.steps, de: de.steps},
    }
}

const rawFiles = import.meta.glob<string>('./tricks/**/*.md', {eager: true, query: '?raw', import: 'default'})

const byCategory: Record<string, Trick[]> = {}
for (const [path, raw] of Object.entries(rawFiles)) {
    const categoryId = path.split('/')[2]
    const trick = parseTrick(raw)
    if (trick) (byCategory[categoryId] ??= []).push(trick)
}

export const trickCategories: TrickCategory[] = Object.keys(CATEGORY_META)
    .filter(id => byCategory[id]?.length)
    .map(id => ({id, ...CATEGORY_META[id], tricks: byCategory[id]}))
