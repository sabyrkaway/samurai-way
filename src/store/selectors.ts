import { useStore } from '@/store/useStore'

export const useTracks = () =>
  useStore((state) => state.tracks)

export const useSetTracks = () =>
  useStore((state) => state.setTracks)

export const useSelectedTrackId = () =>
  useStore((state) => state.selectedTrackId)

export const useSetSelectedTrackId = () =>
  useStore((state) => state.setSelectedTrackId)

export const useSelectedTrack = () =>
  useStore((state) => state.selectedTrack)

export const useSetSelectedTrack = () =>
  useStore((state) => state.setSelectedTrack)
