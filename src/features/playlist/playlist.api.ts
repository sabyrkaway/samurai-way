import { HEADERS } from '@/constants'

export const getPlaylist = async () => {
  const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', { headers: HEADERS })
  return await res.json()
}