import { Crown, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

export function GlobalNav({ activePage, onNavigate, query, onQueryChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="global-nav">
      <div className="brand">
        <Crown size={28} />
        <span>AMBAR</span>
        <strong>Universo</strong>
      </div>

      <button
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen((current) => !current)}
        type="button"
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav aria-label="Principal" className={isMenuOpen ? 'open' : undefined}>
        <button className={activePage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('home')} type="button">
          Personagens
        </button>
        <button className={activePage === 'world' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('world')} type="button">
          Mundo
        </button>
        <a href="#historia" onClick={() => setIsMenuOpen(false)}>
          Historia
        </a>
        <a href="#cronicas" onClick={() => setIsMenuOpen(false)}>
          Cronicas
        </a>
        <a href="#galeria" onClick={() => setIsMenuOpen(false)}>
          Splash Arts
        </a>
        <a href="#info" onClick={() => setIsMenuOpen(false)}>
          Info
        </a>
        <div className="mobile-search">
          <Search size={17} />
          <input
            aria-label="Buscar personagem"
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Buscar personagem..."
            value={query}
          />
        </div>
      </nav>

      {isMenuOpen && <button aria-label="Fechar menu" className="menu-scrim" onClick={() => setIsMenuOpen(false)} type="button" />}

      <div className="search-box">
        <Search size={17} />
        <input
          aria-label="Buscar personagem"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Buscar personagem..."
          value={query}
        />
      </div>
    </header>
  );
}
