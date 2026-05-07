import { ChevronLeft, Sparkles } from 'lucide-react';

export function ReadingPage({ character, story, onBack }) {
  const blocks =
    textToBlocks(story.text, story.media) ??
    story.content ??
    splitStory(story.body).map((paragraph) => ({ type: 'text', value: paragraph }));
  const heroImage = story.heroImage ?? character.splash;

  return (
    <main className="reader-shell">
      <header className="reader-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <nav className="reader-nav">
          <button onClick={onBack} type="button">
            <ChevronLeft size={18} />
            Voltar ao dossie
          </button>
          <span>{character.name}</span>
        </nav>
        <div className="reader-title">
          <p>{story.chapter}</p>
          <h1>{story.title}</h1>
          <span>{character.epithet}</span>
        </div>
      </header>

      <article className="reading-paper">
        <div className="chapter-mark">
          <Sparkles size={22} />
        </div>
        {blocks.map((block, index) => {
          if (block.type === 'image') {
            return (
              <figure className="story-image" key={`${story.id}-${index}`}>
                <img alt={block.caption ?? story.title} src={block.image} />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          }

          if (block.type === 'divider') {
            return (
              <div className="chapter-divider" key={`${story.id}-${index}`}>
                <span>{block.label}</span>
              </div>
            );
          }

          return (
            <p className={index === 0 ? 'lead-paragraph' : undefined} key={`${story.id}-${index}`}>
              {block.value}
            </p>
          );
        })}
        <blockquote>{character.quote}</blockquote>
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

function textToBlocks(text, media = {}) {
  if (!text) return null;

  return text
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => {
      const divider = paragraph.match(/^\[\[divider:(.+)\]\]$/i);
      if (divider) {
        return { type: 'divider', label: divider[1].trim() };
      }

      const image = paragraph.match(/^\[\[image:(.+)\]\]$/i);
      if (image) {
        const mediaItem = media[image[1].trim()];
        if (mediaItem) return { type: 'image', ...mediaItem };
      }

      return { type: 'text', value: paragraph };
    });
}

function splitStory(body) {
  const sentences = body.match(/[^.!?]+[.!?]+/g) ?? [body];
  if (sentences.length <= 2) return [body];

  const midpoint = Math.ceil(sentences.length / 2);
  return [sentences.slice(0, midpoint).join(' ').trim(), sentences.slice(midpoint).join(' ').trim()].filter(Boolean);
}
