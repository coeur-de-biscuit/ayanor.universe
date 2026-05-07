import { BookOpen, Compass, Crown, Eye, ScrollText, Shield } from 'lucide-react';
import { StatCard } from '../components/StatCard';

export function CharacterDossier({ character, onOpenChronicle, onOpenStory }) {
  return (
    <section className="character-page" id="info">
      <div className="section-kicker">
        <span />
        <p>Dossie do personagem</p>
        <span />
      </div>

      <div className="info-grid">
        <article className="bio-panel">
          <p className="eyebrow">Info</p>
          <h2>{character.name}</h2>
          <p>{character.info}</p>
          <p>{character.secret}</p>
          <div className="trait-row">
            {character.traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        </article>

        <div className="stat-column">
          <StatCard icon={Shield} label="Faccao" value={character.faction} />
          <StatCard icon={Compass} label="Regiao" value={character.region} />
          <StatCard icon={Crown} label="Funcao" value={character.role} />
        </div>
      </div>

      <section className="story-section" id="historia">
        <div className="section-title">
          <ScrollText size={22} />
          <h2>Contos de {character.name}</h2>
        </div>
        <div className="story-grid">
          {character.stories.map((story) => (
            <button className="story-card" key={story.id} onClick={() => onOpenStory(story)} type="button">
              <span>{story.chapter}</span>
              <h3>{story.title}</h3>
              <p>{story.body}</p>
              <strong>Ler conto</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="chronicle-section" id="cronicas">
        <div className="section-title">
          <Eye size={22} />
          <h2>Cronicas dos Cronistas</h2>
        </div>
        <button className="chronicle-panel" onClick={onOpenChronicle} type="button">
          <div className="chronicle-seal">
            <Eye size={28} />
          </div>
          <div className="chronicle-copy">
            <p className="eyebrow">Sociedade dos Cronistas</p>
            <h3>{character.chronicle.risk}</h3>
            <p>{character.chronicle.verdict}</p>
            <span>Assinado: {character.chronicle.author}</span>
          </div>
          <ul className="chronicle-notes">
            {character.chronicle.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <strong className="chronicle-link">Abrir relatorio completo</strong>
        </button>
      </section>

      <section className="gallery-section" id="galeria">
        <div className="section-title">
          <BookOpen size={22} />
          <h2>Splash arts</h2>
        </div>
        <div className="gallery-grid">
          {character.gallery.map((art) => (
            <article className="gallery-card" key={art.id}>
              <img alt={art.title} src={art.image} />
              <strong>{art.title}</strong>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
