import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-20 py-4 shadow-lg"
      style={{
        background:
          'linear-gradient(to bottom, var(--color-brand-950), var(--color-brand-900))',
        borderBottom: '1px solid var(--color-brand-500)',
        boxShadow: '0 0 20px rgba(255, 149, 0, 0.3)', // --color-brand-500 with alpha
      }}
      role="banner"
      aria-label="Site header"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center">
          {/* Logo centered with neon drop shadow */}
          <Link to="/" aria-label="Go to Home">
            <picture>
              <source srcSet="/images/logo.gif" type="image/gif" />
              <source srcSet="/images/logo.png" type="image/png" />
              <img
                src="/images/logo-placeholder.svg"
                alt="Freak Fringe logo"
                className="mx-auto h-16 w-auto shadow-neon"
                style={{ filter: 'drop-shadow(0 0 10px rgba(255,149,0,0.8))' }}
              />
            </picture>
          </Link>

          {/* Navigation */}
          <nav
            className="mt-3"
            aria-label="Primary navigation"
            role="navigation"
          >
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  to="/"
                  className="btn-nav inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="btn-nav inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
                  aria-label="Gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="btn-nav inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
                  aria-label="About"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
