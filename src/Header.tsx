function Header() {
  return (
    <header className="sticky top-0 z-20 py-4 shadow-lg" style={{
      background: 'linear-gradient(to bottom, var(--color-brand-950), var(--color-brand-900))',
      borderBottom: '1px solid var(--color-brand-500)',
      boxShadow: '0 0 20px rgba(255, 149, 0, 0.3)' // --color-brand-500 with alpha
    }}>
      <h1 className="text-center text-4xl font-display tracking-wide" style={{
        color: 'var(--color-brand-500)',
        textShadow: '0 0 8px var(--color-brand-500), 0 0 15px var(--color-brand-500)'
      }}>Freak Fringe</h1>
    </header>
  )
}

export default Header
