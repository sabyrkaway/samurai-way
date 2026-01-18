import { API_KEY } from '@/constants'

export const getTrackDetails = async (selectedTrackId: string) => {
  const res = await fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
    headers: {
      'api-key': API_KEY,
    },
  }).then(res => res.json())
  return await res.json()
}