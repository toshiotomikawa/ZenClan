export type FortniteMode = 'build' | 'zero-build'
export type ActivityLevel = 'green' | 'yellow' | 'gray'

export type Member = {
  name: string
  initials: string
  role?: string
  fortniteModes: FortniteMode[]
  activity: ActivityLevel
  isBot?: boolean
}

function initials(name: string): string {
  const w = name.replace(/^ZEN\s+/i, '').trim()
  const cleaned = w.replace(/[^\p{L}\p{N}]/gu, '')
  return (cleaned.slice(0, 2) || w.slice(0, 1)).toUpperCase()
}

const FOUNDER_RAW: [string, string, FortniteMode[], ActivityLevel][] = [
  ['ZEN Petri', 'Co-fundador', ['build', 'zero-build'], 'green'],
  ['ZEN Syrena', 'Co-fundadora', ['zero-build'], 'gray'],
  ['ZEN Shadow', 'Co-fundador', ['zero-build'], 'gray'],
  ['ZEN Zack', 'Co-fundador', ['zero-build'], 'gray'],
]

const CLAN_RAW = (
  [
    ['ZEN AK4SH1N', ['zero-build'], 'yellow'],
    ['ZEN Botélia', [], 'green', true],
    ['ZEN Ceni', [], 'gray'],
    ['ZEN Daphne.', ['zero-build'], 'yellow'],
    ['ZEN Dave', ['zero-build'], 'gray'],
    ['ZEN emy', ['build'], 'green'],
    ['ZEN Freiitas', ['zero-build'], 'yellow'],
    ['ZEN Jred9', ['zero-build'], 'yellow'],
    ['ZEN Loirinha', ['zero-build'], 'green'],
    ['ZEN LuminhaGmr', ['zero-build'], 'yellow'],
    ['ZEN Sun', ['build'], 'gray'],
    ['ZEN zezin', ['build'], 'yellow'],
  ] as [string, FortniteMode[], ActivityLevel, boolean?][]
).sort((a, b) => a[0].localeCompare(b[0], 'pt-BR', { sensitivity: 'base' }))

export const founders: Member[] = FOUNDER_RAW.map(([name, role, fortniteModes, activity]) => ({
  name,
  role,
  fortniteModes,
  activity,
  initials: initials(name),
}))

export const clanMembers: Member[] = CLAN_RAW.map(([name, fortniteModes, activity, isBot]) => ({
  name,
  fortniteModes,
  activity,
  isBot,
  initials: initials(name),
}))

export const clanCount = clanMembers.length
export const clanTotal = clanMembers.length + founders.length
export const communitySize = 55
