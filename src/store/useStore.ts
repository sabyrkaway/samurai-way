import { create } from 'zustand'
import type { TrackListItemResource } from '@/types/Playlist'
import type { TrackDetailsResource } from '@/types/TrackDetails'

interface Store {
  tracks: TrackListItemResource[] | null
  selectedTrackId: string | null
  selectedTrack: TrackDetailsResource | null
  setTracks: (tracks: TrackListItemResource[] | null) => void
  setSelectedTrackId: (id: string | null) => void
  setSelectedTrack: (track: TrackDetailsResource | null) => void
}

export const useStore = create<Store>((set) => ({
  tracks: null,
  selectedTrackId: null,
  selectedTrack: null,
  setTracks: (tracks) => set({ tracks }),
  setSelectedTrackId: (id) => set({ selectedTrackId: id }),
  setSelectedTrack: (track) => set({ selectedTrack: track }),
}))
