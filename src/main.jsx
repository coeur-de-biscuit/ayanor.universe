import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CharacterRoster } from './components/CharacterRoster';
import { CharacterShowcase } from './components/CharacterShowcase';
import { GlobalNav } from './components/GlobalNav';
import { characters } from './data/characters';
import { worldRegions } from './data/worldRegions';
import { CharacterDossier } from './pages/CharacterDossier';
import { ChroniclePage } from './pages/ChroniclePage';
import { ReadingPage } from './pages/ReadingPage';
import { WorldSection } from './pages/WorldSection';
import './styles.css';

function App() {
  const [selectedId, setSelectedId] = useState(characters[0].id);
  const [readingStory, setReadingStory] = useState(null);
  const [readingChronicle, setReadingChronicle] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [query, setQuery] = useState('');

  const selected = characters.find((character) => character.id === selectedId) ?? characters[0];
  const filteredCharacters = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return characters;
    return characters.filter((character) =>
      [character.name, character.epithet, character.faction, character.region]
        .join(' ')
        .toLowerCase()
        .includes(needle),
    );
  }, [query]);

  const openCharacter = (id) => {
    setSelectedId(id);
    setReadingStory(null);
    setReadingChronicle(false);
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (page) => {
    setActivePage(page);
    setReadingStory(null);
    setReadingChronicle(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openStory = (story) => {
    setReadingStory(story);
    setReadingChronicle(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openChronicle = () => {
    setReadingChronicle(true);
    setReadingStory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const moveCharacter = (direction) => {
    const selectedIndex = characters.findIndex((character) => character.id === selected.id);
    const nextIndex = (selectedIndex + direction + characters.length) % characters.length;
    openCharacter(characters[nextIndex].id);
  };

  if (readingStory) {
    return <ReadingPage character={selected} story={readingStory} onBack={() => setReadingStory(null)} />;
  }

  if (readingChronicle) {
    return <ChroniclePage character={selected} onBack={() => setReadingChronicle(false)} />;
  }

  return (
    <main className="site-shell">
      <GlobalNav activePage={activePage} onNavigate={navigate} query={query} onQueryChange={setQuery} />
      {activePage === 'world' ? (
        <WorldSection characters={characters} onSelectCharacter={openCharacter} regions={worldRegions} />
      ) : (
        <>
          <CharacterShowcase character={selected} onMove={moveCharacter} />
          <CharacterRoster characters={filteredCharacters} selectedId={selected.id} onSelectCharacter={openCharacter} />
          <CharacterDossier character={selected} onOpenChronicle={openChronicle} onOpenStory={openStory} />
        </>
      )}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
