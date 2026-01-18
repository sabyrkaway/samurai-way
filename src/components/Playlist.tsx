import React, { useEffect } from 'react'
import { TrackItem } from '@/components/TrackItem'
import { useStore } from '@/store/useStore'
import { getPlaylist } from '@/api/getPlaylist'

export const Playlist = () => {
  const { tracks, setTracks } = useStore()

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
