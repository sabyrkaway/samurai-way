import React from 'react'
import { useStore } from '@/store/useStore'
import type { TrackListItemResource } from '@/types/playlist.types'

interface Props {
  track: TrackListItemResource
}

export const TrackItem = ({ track }: Props) => {
  const { selectedTrackId, setSelectedTrackId } = useStore()

  return (
    <li
      onClick={() => setSelectedTrackId(track.id)}
      style={{ border: `1px solid ${track.id === selectedTrackId ? '#646cff' : 'transparent'}` }}
    >
      <div>{track.attributes.title}</div>
      <audio controls src={track.attributes.attachments[0].url} />
    </li>
  )
}
