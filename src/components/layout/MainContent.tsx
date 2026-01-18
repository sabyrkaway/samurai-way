import React from 'react'
import { Playlist } from '@/components/playlist/Playlist'
import { TrackDetails } from '@/components/track/TrackDetails'

export const MainContent = () => {
  return (
    <div style={{ display: 'flex', columnGap: '1rem' }}>
      <Playlist />
      <TrackDetails />
    </div>
  )
}
