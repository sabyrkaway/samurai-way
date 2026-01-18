import React from 'react'
import type { TrackListItemResource } from '@/features/playlist/playlist.types'
import { useSelectedTrackId, useSetSelectedTrackId } from '@/store/selectors'

interface Props {
  track: TrackListItemResource
}

export const TrackItem = ({ track }: Props) => {
  const selectedTrackId = useSelectedTrackId()
  const setSelectedTrackId = useSetSelectedTrackId()

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
