import nanetteImage from "../../assets/nanette.png";
import { chroniclePlaceholder } from "../chroniclePlaceholder";

export const nanette = {
  id: "nanette",
  name: "Nanette",
  epithet: "Titulo ainda nao definido",
  role: "Funcao ainda nao definida",
  faction: "Faccao ainda nao definida",
  region: "Regiao ainda nao definida",
  threat: "Indefinida",
  portrait: nanetteImage,
  splash: nanetteImage,
  quote: "Frase de personagem ainda nao criada.",
  info:
    "Ficha de Nanette ainda nao foi escrita. Use este espaco para descrever historia, personalidade, conexoes e papel no setting.",
  secret:
    "Segredo ainda nao definido. Este campo pode guardar revelacoes para mestre, Cronistas ou jogadores.",
  traits: ["Placeholder", "A definir", "Novo personagem"],
  chronicle: chroniclePlaceholder,
  stories: [
    {
      id: "nanette-1",
      chapter: "Conto I",
      title: "Conto ainda nao criado",
      body: "Este conto de Nanette ainda nao foi escrito. Placeholder temporario para manter a pagina organizada.",
      content: [
        {
          type: "text",
          value:
            "Este conto ainda nao foi criado. Quando a historia oficial estiver pronta, substitua este placeholder por um arquivo .txt importado ou por blocos de content.",
        },
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet velit non justo posuere tempor.",
        },
      ],
    },
  ],
  gallery: [{ id: "nanette-a", title: "Nanette", image: nanetteImage }],
};
