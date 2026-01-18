import React from 'react'
import type { TrackListItemResource } from '@/features/playlist/playlist.types'
import { useSelectedTrackId, useSetSelectedTrackId } from '@/store/selectors'
import styles from './TrackItem.module.css'
import clsx from 'clsx'

interface Props {
  track: TrackListItemResource
}

export const TrackItem = ({ track }: Props) => {
  const selectedTrackId = useSelectedTrackId()
  const setSelectedTrackId = useSetSelectedTrackId()

  return (
    <li
      onClick={() => setSelectedTrackId(track.id)}
      className={clsx({
        [styles.track]: true,
        [styles.active]: track.id === selectedTrackId,
      })}
    >
      <div>{track.attributes.title}</div>
      <audio controls src={track.attributes.attachments[0].url} />
    </li>
  )
}
