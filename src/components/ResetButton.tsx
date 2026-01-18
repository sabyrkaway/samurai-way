import React from 'react'
import { useStore } from '@/store/useStore'

export const ResetButton = () => {
  const { setSelectedTrackId, setSelectedTrack } = useStore()

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
