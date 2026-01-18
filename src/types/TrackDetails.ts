export interface TrackDetailsAttributes {
  title: string
  lyrics: string | null
}

export interface TrackDetailsResource {
  id: string
  attributes: TrackDetailsAttributes
}