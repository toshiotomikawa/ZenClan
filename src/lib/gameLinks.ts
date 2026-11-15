/** Official sites for the games featured on the home page. */
const GAME_LINKS: Record<string, string> = {
  Fortnite: 'https://www.fortnite.com/',
  Minecraft: 'https://www.minecraft.net/',
  Valorant: 'https://playvalorant.com/',
  'Counter-Strike': 'https://www.counter-strike.net/',
}

export function getGameUrl(name: string): string | undefined {
  return GAME_LINKS[name]
}
