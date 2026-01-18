import { PageTitle } from '@/components/PageTitle'
import { useState } from 'react'
import { ResetButton } from '@/components/ResetButton'
import { MainContent } from '@/components/MainContent'
import type { TrackListItemResource } from '@/types/Playlist'
import type { TrackDetailsResource } from '@/types/TrackDetails'

export const MainPage = () => {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

  return (
    <main>
      <PageTitle />
      <ResetButton
        setSelectedTrackId={setSelectedTrackId}
        setSelectedTrack={setSelectedTrack}
      />
      <MainContent
        tracks={tracks}
        selectedTrackId={selectedTrackId}
        setTracks={setTracks}
        setSelectedTrackId={setSelectedTrackId}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </main>
  )
}
