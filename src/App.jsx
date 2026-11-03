import Marquee from './Marquee.jsx'

export default function App() {
  return (
    <main className="app">
      <Marquee text="Hola mundo" speed={18} />
      <Marquee text="Hola mundo" speed={24} reverse variant="outline" />
    </main>
  )
}
