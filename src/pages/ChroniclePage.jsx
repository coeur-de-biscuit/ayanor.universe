import { ChevronLeft, Eye } from 'lucide-react';

export function ChroniclePage({ character, onBack }) {
  return (
    <main className="chronicle-reader">
      <header className="chronicle-hero">
        <div className="chronicle-bg" style={{ backgroundImage: `url(${character.splash})` }} />
        <nav className="reader-nav">
          <button onClick={onBack} type="button">
            <ChevronLeft size={18} />
            Voltar ao dossie
          </button>
          <span>Arquivo dos Cronistas</span>
        </nav>
        <div className="reader-title">
          <p>{character.chronicle.risk}</p>
          <h1>Relatorio: {character.name}</h1>
          <span>Assinado por {character.chronicle.author}</span>
        </div>
      </header>

      <article className="chronicle-document">
        <div className="chapter-mark">
          <Eye size={22} />
        </div>
        <p className="lead-paragraph">{character.chronicle.verdict}</p>
        <p>{character.chronicle.fullReport}</p>

        <section className="classified-notes">
          <h2>Notas de campo</h2>
          <ul>
            {character.chronicle.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <div className="reader-footer">
          <button onClick={onBack} type="button">
            <ChevronLeft size={18} />
            Voltar para {character.name}
          </button>
        </div>
      </article>
    </main>
  );
}
