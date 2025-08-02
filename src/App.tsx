import { Routes, Route } from 'react-router-dom'
import './root.css'
import Gallery from './Gallery'
import Viewer from './Viewer'
import Header from './Header'

function App() {
  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: 'var(--color-dark-bg)'}}>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Gallery />
          </>
        } />
        <Route path="/page/:id" element={
          <>
            <Header />
            <Viewer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
