import './App.css'
import { useState } from 'react'

interface Track {
  id: number
  title: string
  url: string
}

export const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tracks, setTracks] = useState<Track[] | null>([
    {
      id: 1,
      title: 'MusicFun Soundtrack',
      url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
    },
    {
      id: 2,
      title: 'MusicFun Soundtrack — Instrumental',
      url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
    },
  ])

  return (
    <>
      <h1>MusicFun</h1>

      {tracks === null && <div>Loading...</div>}
      {tracks?.length === 0 && <div>No tracks available</div>}
      <ul>
        {tracks?.map(({ id, title, url }) => (
          <li key={id}>
            <div>{title}</div>
            <audio controls src={url} />
          </li>
        ))}
      </ul>
    </>
  )
}
