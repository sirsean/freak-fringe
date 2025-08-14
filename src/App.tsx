import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './root.css'
import Header from './Header'
import RetroHome from './pages/RetroHome'

const Gallery = lazy(() => import('./Gallery'))
const Viewer = lazy(() => import('./Viewer'))

const App: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: isHome ? 'transparent' : 'var(--color-dark-bg)' }}>
      <Routes>
        <Route path="/" element={<RetroHome />} />
        <Route path="/gallery" element={
          <Suspense fallback={<div />} > 
            <>
              <Header />
              <Gallery />
            </>
          </Suspense>
        } />
        <Route path="/page/:id" element={
          <Suspense fallback={<div />} > 
            <>
              <Header />
              <Viewer />
            </>
          </Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App
