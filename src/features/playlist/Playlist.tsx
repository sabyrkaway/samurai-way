import React, { useEffect } from 'react'
import { TrackItem } from '@/features/playlist/TrackItem/TrackItem'
import { getPlaylist } from '@/features/playlist/playlist.api'
import { useSetTracks, useTracks } from '@/store/selectors'

export const Playlist = () => {
  const tracks = useTracks()
  const setTracks = useSetTracks()

  useEffect(() => {
    getPlaylist().then((json) => setTracks(json.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
