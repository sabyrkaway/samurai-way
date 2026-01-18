import './App.css'

const tracks = [
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
]

export const App = () => {
  return (
    <>
      <h1>MusicFun</h1>
      <ul>
        {tracks.map(({ id, title, url }) => (
          <li key={id}>
            <div>{title}</div>
            <audio controls src={url} />
          </li>
        ))}
      </ul>
    </>
  )
}
