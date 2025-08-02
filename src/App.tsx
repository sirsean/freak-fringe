import { Routes, Route } from 'react-router-dom'
import './root.css'
import Gallery from './Gallery'
import Viewer from './Viewer'

function App() {
  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: 'var(--color-dark-bg)'}}>
      <Routes>
        <Route path="/" element={
          <>
            <header className="sticky top-0 z-20 py-4 shadow-lg" style={{
              background: 'linear-gradient(to bottom, var(--color-brand-950), var(--color-brand-900))',
              borderBottom: '1px solid var(--color-brand-500)',
              boxShadow: '0 0 20px rgba(255, 149, 0, 0.3)' // --color-brand-500 with alpha
            }}>
              <h1 className="text-center text-3xl font-display tracking-wide" style={{
                color: 'var(--color-brand-500)',
                textShadow: '0 0 10px var(--color-brand-500), 0 0 20px var(--color-brand-500), 0 0 30px var(--color-brand-500)'
              }}>Freak Fringe</h1>
            </header>
            <Gallery />
          </>
        } />
        <Route path="/page/:id" element={
          <>
            <header className="sticky top-0 z-20 py-4 shadow-lg" style={{
              background: 'linear-gradient(to bottom, var(--color-brand-950), var(--color-brand-900))',
              borderBottom: '1px solid var(--color-brand-500)',
              boxShadow: '0 0 20px rgba(255, 149, 0, 0.3)' // --color-brand-500 with alpha
            }}>
              <h1 className="text-center text-3xl font-display tracking-wide" style={{
                color: 'var(--color-brand-500)',
                textShadow: '0 0 10px var(--color-brand-500), 0 0 20px var(--color-brand-500), 0 0 30px var(--color-brand-500)'
              }}>Freak Fringe</h1>
            </header>
            <Viewer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
