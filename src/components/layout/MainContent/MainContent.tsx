import React from 'react'
import { Playlist } from '@/features/playlist/Playlist'
import { TrackDetails } from '@/features/track/TrackDetails'
import styles from './MainContent.module.css'

export const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <Playlist />
      <TrackDetails />
    </div>
  )
}
