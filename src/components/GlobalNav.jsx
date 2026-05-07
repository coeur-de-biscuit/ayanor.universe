import { Crown, Search } from 'lucide-react';

export function GlobalNav({ query, onQueryChange }) {
  return (
    <header className="global-nav">
      <div className="brand">
        <Crown size={28} />
        <span>AMBAR</span>
        <strong>Universo</strong>
      </div>
      <nav aria-label="Principal">
        <a href="#personagens">Personagens</a>
        <a href="#historia">Historia</a>
        <a href="#cronicas">Cronicas</a>
        <a href="#galeria">Splash Arts</a>
        <a href="#info">Info</a>
      </nav>
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
