import React from 'react'
import type { TrackDetailsResource } from '@/types'

interface Props {
  setSelectedTrackId: React.Dispatch<React.SetStateAction<string | null>>
  setSelectedTrack: React.Dispatch<React.SetStateAction<TrackDetailsResource | null>>
}

export const ResetButton = ({ setSelectedTrackId, setSelectedTrack }: Props) => {
  return (
    <button
      onClick={() => {
        setSelectedTrackId(null)
        setSelectedTrack(null)
      }}
    >
      Reset selection
    </button>
  )
}
