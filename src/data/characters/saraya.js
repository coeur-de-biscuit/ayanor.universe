import sarayaImage from "../../assets/saraya.png";
import sarayaConto1Image from "../../assets/saraya-conto1.png";
import sarayaConto1Text from "./saraya/as-irmas-da-trama.txt?raw";
import { chroniclePlaceholder } from "../chroniclePlaceholder";

export const saraya = {
  id: "saraya",
  name: "Saraya",
  epithet: "A Pequena Sombra da Trama",
  role: "Funcao ainda nao definida",
  faction: "Faccao ainda nao definida",
  region: "Regiao ainda nao definida",
  threat: "Indefinida",
  portrait: sarayaImage,
  splash: sarayaImage,
  quote: "Eu sou Shar e você é Selûne. Assim a magia fica bonita.",
  info:
    "Ficha de Saraya ainda nao foi escrita. Use este espaco para descrever historia, personalidade, conexoes e papel no setting.",
  secret:
    "Segredo ainda nao definido. Este campo pode guardar revelacoes para mestre, Cronistas ou jogadores.",
  traits: ["Placeholder", "A definir", "Novo personagem"],
  chronicle: chroniclePlaceholder,
  stories: [
    {
      id: "saraya-1",
      chapter: "Conto I",
      title: "As Irmãs da Trama",
      heroImage: sarayaConto1Image,
      body:
        "Saraya tenta praticar letras, nomes e magia enquanto Charlotte transforma uma tarde comum em uma história sobre luz, sombra e a origem da Trama.",
      text: sarayaConto1Text,
      media: {
        estudo: {
          image: sarayaConto1Image,
          caption:
            "Saraya descobrindo que letras, nomes e magia talvez sejam a mesma coisa vista de jeitos diferentes.",
        },
      },
    },
  ],
  gallery: [
    { id: "saraya-a", title: "Saraya", image: sarayaImage },
    { id: "saraya-b", title: "As Irmãs da Trama", image: sarayaConto1Image },
  ],
};
