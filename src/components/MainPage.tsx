import { PageTitle } from '@/components/PageTitle'
import { useState } from 'react'
import type { TrackDetailsResource } from '@/types'
import { ResetButton } from '@/components/ResetButton'

export const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    </main>
  )
}
