import { PageTitle } from '@/components/PageTitle'
import { useState } from 'react'
import type { TrackDetailsResource, TrackListItemResource } from '@/types'
import { ResetButton } from '@/components/ResetButton'
import { Playlist } from '@/components/Playlist'

export const MainPage = () => {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

  return (
    <main>
      <PageTitle />
      <ResetButton
        setSelectedTrackId={setSelectedTrackId}
        setSelectedTrack={setSelectedTrack}
      />
      <Playlist
        tracks={tracks}
        selectedTrackId={selectedTrackId}
        setTracks={setTracks}
        setSelectedTrackId={setSelectedTrackId}
      />
    </main>
  )
}
