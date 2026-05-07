import diovaneImage from "../../assets/Diovane.png";
import { chroniclePlaceholder } from "../chroniclePlaceholder";

export const diovane = {
  id: "diovane",
  name: "Diovane",
  epithet: "Titulo ainda nao definido",
  role: "Funcao ainda nao definida",
  faction: "Faccao ainda nao definida",
  region: "Regiao ainda nao definida",
  threat: "Indefinida",
  portrait: diovaneImage,
  splash: diovaneImage,
  quote: "Frase de personagem ainda nao criada.",
  info:
    "Ficha de Diovane ainda nao foi escrita. Use este espaco para descrever historia, personalidade, conexoes e papel no setting.",
  secret:
    "Segredo ainda nao definido. Este campo pode guardar revelacoes para mestre, Cronistas ou jogadores.",
  traits: ["Placeholder", "A definir", "Novo personagem"],
  chronicle: chroniclePlaceholder,
  stories: [
    {
      id: "diovane-1",
      chapter: "Conto I",
      title: "Conto ainda nao criado",
      body: "Este conto de Diovane ainda nao foi escrito. Placeholder temporario para manter a pagina organizada.",
      content: [
        {
          type: "text",
          value:
            "Este conto ainda nao foi criado. Quando a historia oficial estiver pronta, substitua este placeholder por um arquivo .txt importado ou por blocos de content.",
        },
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget sem vitae odio pretium commodo.",
        },
      ],
    },
  ],
  gallery: [{ id: "diovane-a", title: "Diovane", image: diovaneImage }],
};
