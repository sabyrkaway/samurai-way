import React from 'react'
import { Playlist } from '@/components/Playlist'
import { TrackDetails } from '@/components/TrackDetails'

export const MainContent = () => {
  return (
    <div style={{ display: 'flex', columnGap: '1rem' }}>
      <Playlist />
      <TrackDetails />
    </div>
  )
}
