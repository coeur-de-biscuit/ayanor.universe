import { ChevronLeft, Landmark, Map, MapPin, UsersRound } from "lucide-react";
import { useMemo, useState } from "react";

export function WorldSection({ regions, characters, onSelectCharacter }) {
  const [selectedRegionId, setSelectedRegionId] = useState(regions[0]?.id);
  const [selectedLocationId, setSelectedLocationId] = useState(null);

  const selectedRegion = regions.find((region) => region.id === selectedRegionId) ?? regions[0];
  const selectedLocation = selectedRegion?.locations.find((location) => location.id === selectedLocationId);

  const regionResidents = useMemo(
    () => characters.filter((character) => character.region === selectedRegion?.name),
    [characters, selectedRegion],
  );

  const locationResidents = useMemo(() => {
    if (!selectedLocation) return [];
    return characters.filter((character) => selectedLocation.characterIds?.includes(character.id));
  }, [characters, selectedLocation]);

  const openRegion = (regionId) => {
    setSelectedRegionId(regionId);
    setSelectedLocationId(null);
  };

  if (selectedLocation) {
    return (
      <section className="world-page">
        <button className="world-back" onClick={() => setSelectedLocationId(null)} type="button">
          <ChevronLeft size={18} />
          Voltar para {selectedRegion.name}
        </button>

        <article className="location-detail">
          <div className="section-kicker">
            <span />
            <p>{selectedRegion.name}</p>
            <span />
          </div>

          <div className="location-detail-header">
            <div>
              <p className="eyebrow">{selectedLocation.kind}</p>
              <h1>{selectedLocation.name}</h1>
              <span>{selectedLocation.description}</span>
            </div>
            <MapPin size={34} />
          </div>

          <div className="location-detail-grid">
            <section>
              <h2>Historia</h2>
              <p>{selectedLocation.history}</p>
              <p>{selectedRegion.history}</p>
            </section>

            <aside>
              <div className="resident-title">
                <UsersRound size={18} />
                <strong>Personagens</strong>
              </div>
              <ResidentDots characters={locationResidents} onSelectCharacter={onSelectCharacter} />
            </aside>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="world-page" id="mundo">
      <div className="section-kicker">
        <span />
        <p>Atlas de Ayanor</p>
        <span />
      </div>

      <div className="world-page-header">
        <div className="section-title">
          <Map size={22} />
          <h2>Mundo</h2>
        </div>
        <div className="region-tabs" aria-label="Regioes do mundo">
          {regions.map((region) => (
            <button
              className={region.id === selectedRegion.id ? "active" : undefined}
              key={region.id}
              onClick={() => openRegion(region.id)}
              type="button"
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>

      <article className="world-card featured">
        <div className="world-card-header">
          <div>
            <p className="eyebrow">{selectedRegion.type}</p>
            <h3>{selectedRegion.name}</h3>
            <span>{selectedRegion.mood}</span>
          </div>
          <Landmark size={30} />
        </div>

        <p>{selectedRegion.summary}</p>
        <p>{selectedRegion.history}</p>

        <div className="resident-block compact">
          <div className="resident-title">
            <UsersRound size={18} />
            <strong>Personagens daqui</strong>
          </div>
          <ResidentDots characters={regionResidents} onSelectCharacter={onSelectCharacter} />
        </div>
      </article>

      <div className="location-list navigable">
        {selectedRegion.locations.map((location) => (
          <button className="location-item" key={location.id} onClick={() => setSelectedLocationId(location.id)} type="button">
            <MapPin size={18} />
            <div>
              <strong>{location.name}</strong>
              <span>{location.kind}</span>
              <p>{location.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ResidentDots({ characters, onSelectCharacter }) {
  if (characters.length === 0) {
    return <p className="empty-residents">Nenhum personagem cadastrado aqui ainda.</p>;
  }

  return (
    <div className="resident-dots">
      {characters.map((character) => (
        <button
          aria-label={character.name}
          key={character.id}
          onClick={() => onSelectCharacter(character.id)}
          title={character.name}
          type="button"
        >
          <img alt="" src={character.portrait} />
        </button>
      ))}
    </div>
  );
}
