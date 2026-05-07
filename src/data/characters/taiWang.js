import taiWangImage from "../../assets/TaiWang.png";
import { chroniclePlaceholder } from "../chroniclePlaceholder";

export const taiWang = {
  id: "tai-wang",
  name: "Tai Wang",
  epithet: "Titulo ainda nao definido",
  role: "Funcao ainda nao definida",
  faction: "Faccao ainda nao definida",
  region: "Regiao ainda nao definida",
  threat: "Indefinida",
  portrait: taiWangImage,
  splash: taiWangImage,
  quote: "Frase de personagem ainda nao criada.",
  info:
    "Ficha de Tai Wang ainda nao foi escrita. Use este espaco para descrever historia, personalidade, conexoes e papel no setting.",
  secret:
    "Segredo ainda nao definido. Este campo pode guardar revelacoes para mestre, Cronistas ou jogadores.",
  traits: ["Placeholder", "A definir", "Novo personagem"],
  chronicle: chroniclePlaceholder,
  stories: [
    {
      id: "tai-wang-1",
      chapter: "Conto I",
      title: "Conto ainda nao criado",
      body: "Este conto de Tai Wang ainda nao foi escrito. Placeholder temporario para manter a pagina organizada.",
      content: [
        {
          type: "text",
          value:
            "Este conto ainda nao foi criado. Quando a historia oficial estiver pronta, substitua este placeholder por um arquivo .txt importado ou por blocos de content.",
        },
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id libero sed arcu fermentum hendrerit.",
        },
      ],
    },
  ],
  gallery: [{ id: "tai-wang-a", title: "Tai Wang", image: taiWangImage }],
};
