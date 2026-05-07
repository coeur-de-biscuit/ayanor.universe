export function CharacterRoster({ characters, selectedId, onSelectCharacter }) {
  return (
    <section className="roster-band" aria-label="Lista de personagens">
      <div className="roster-grid">
        {characters.map((character) => (
          <button
            className={character.id === selectedId ? 'champion-card active' : 'champion-card'}
            key={character.id}
            onClick={() => onSelectCharacter(character.id)}
            type="button"
          >
            <img alt={character.name} src={character.splash} />
            <div>
              <span>{character.epithet}</span>
              <strong>{character.name}</strong>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
