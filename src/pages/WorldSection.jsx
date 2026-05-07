import { Landmark, Map, MapPin, UsersRound } from "lucide-react";

export function WorldSection({ regions, characters, onSelectCharacter }) {
  return (
    <section className="world-section" id="mundo">
      <div className="section-kicker">
        <span />
        <p>Atlas de Ayanor</p>
        <span />
      </div>

      <div className="section-title">
        <Map size={22} />
        <h2>Mundo</h2>
      </div>

      <div className="world-grid">
        {regions.map((region) => {
          const residents = characters.filter((character) => character.region === region.name);

          return (
            <article className="world-card" key={region.id}>
              <div className="world-card-header">
                <div>
                  <p className="eyebrow">{region.type}</p>
                  <h3>{region.name}</h3>
                  <span>{region.mood}</span>
                </div>
                <Landmark size={30} />
              </div>

              <p>{region.summary}</p>
              <p>{region.history}</p>

              <div className="location-list">
                {region.locations.map((location) => (
                  <div className="location-item" key={location.name}>
                    <MapPin size={18} />
                    <div>
                      <strong>{location.name}</strong>
                      <span>{location.kind}</span>
                      <p>{location.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="resident-block">
                <div className="resident-title">
                  <UsersRound size={18} />
                  <strong>Personagens daqui</strong>
                </div>
                <div className="resident-list">
                  {residents.length > 0 ? (
                    residents.map((character) => (
                      <button key={character.id} onClick={() => onSelectCharacter(character.id)} type="button">
                        <img alt="" src={character.portrait} />
                        <span>{character.name}</span>
                      </button>
                    ))
                  ) : (
                    <p>Nenhum personagem cadastrado aqui ainda.</p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
