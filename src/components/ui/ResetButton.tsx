import React from 'react'
import { useSetSelectedTrack, useSetSelectedTrackId } from '@/store/selectors'

export const ResetButton = () => {
  const setSelectedTrackId = useSetSelectedTrackId()
  const setSelectedTrack = useSetSelectedTrack()

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
