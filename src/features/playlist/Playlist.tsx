import React, { useEffect } from 'react'
import { TrackItem } from '@/features/playlist/TrackItem'
import { getPlaylist } from '@/features/playlist/playlist.api.ts.ts'
import { useSetTracks, useTracks } from '@/store/selectors'

export const Playlist = () => {
  const tracks = useTracks()
  const setTracks = useSetTracks()

  useEffect(() => {
    getPlaylist().then((json) => setTracks(json.data))
  }, [setTracks])

  return (
    <div>
      {tracks === null && <div>Loading...</div>}
      {tracks?.length === 0 && <div>No tracks available</div>}
      {tracks && <ul>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </ul>}
    </div>
  )
}
