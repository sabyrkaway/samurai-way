import { HEADERS } from '@/constants'

export const getTrackDetails = async (selectedTrackId: string) => {
  const res = await fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, { headers: HEADERS })
  return await res.json()
}