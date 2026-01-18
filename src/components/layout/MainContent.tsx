import React from 'react'
import { Playlist } from '@/features/playlist/Playlist'
import { TrackDetails } from '@/features/track/TrackDetails'

export const MainContent = () => {
  return (
    <div style={{ display: 'flex', columnGap: '1rem' }}>
      <Playlist />
      <TrackDetails />
    </div>
  )
}
