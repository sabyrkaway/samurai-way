import type { TrackListItemResource } from '@/types'
import React from 'react'

interface Props {
  track: TrackListItemResource
  selectedTrackId: string | null
  setSelectedTrackId: React.Dispatch<React.SetStateAction<string | null>>
}

export const TrackItem = ({ track, selectedTrackId, setSelectedTrackId }: Props) => {
  return (
    <li
      key={track.id}
      onClick={() => setSelectedTrackId(track.id)}
      style={{ border: `1px solid ${track.id === selectedTrackId ? '#646cff' : 'transparent'}` }}
    >
      <div>{track.attributes.title}</div>
      <audio controls src={track.attributes.attachments[0].url} />
    </li>
  )
}
