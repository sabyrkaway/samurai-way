export interface TrackAttachment {
  url: string
}

export interface TrackListItemAttributes {
  title: string
  attachments: TrackAttachment[]
}

export interface TrackListItemResource {
  id: string
  attributes: TrackListItemAttributes
}

export interface TrackDetailsAttributes {
  title: string
  lyrics: string | null
}

export interface TrackDetailsResource {
  id: string
  attributes: TrackDetailsAttributes
}