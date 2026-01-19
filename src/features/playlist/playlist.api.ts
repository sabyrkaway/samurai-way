import { HEADERS } from '@/constants'

export const getPlaylist = async () => {
  const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', { headers: HEADERS })

  if (!res.ok) {
    throw new Error(`Failed to fetch playlist: ${res.status} ${res.statusText}`)
  }

  return res.json()
}
