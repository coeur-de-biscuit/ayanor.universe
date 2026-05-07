import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export function CharacterShowcase({ character, onMove }) {
  return (
    <section className="showcase" id="personagens">
      <div className="showcase-backdrop" style={{ backgroundImage: `url(${character.splash})` }} />
      <button className="arrow left" onClick={() => onMove(-1)} type="button" aria-label="Personagem anterior">
        <ChevronLeft size={30} />
      </button>
      <div className="splash-frame">
        <img alt={character.name} src={character.splash} />
      </div>
      <button className="arrow right" onClick={() => onMove(1)} type="button" aria-label="Proximo personagem">
        <ChevronRight size={30} />
      </button>

      <div className="name-plaque">
        <Sparkles size={26} />
        <p>{character.epithet}</p>
        <h1>{character.name}</h1>
        <span>{character.quote}</span>
      </div>
    </section>
  );
}
