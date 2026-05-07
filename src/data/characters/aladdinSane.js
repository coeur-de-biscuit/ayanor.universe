import throneArt from "../../assets/art-throne.svg";
import alladinSaneImage from "../../assets/alladin_sane.png";
import { chroniclePlaceholder } from "../chroniclePlaceholder";

export const aladdinSane = {
  id: "alladin-sane",
  name: "Aladdin Sane",
  epithet: "O Canalha Erudito",
  role: "Figura errante",
  faction: "Amari",
  region: "Ayanor",
  threat: "Alta",
  portrait: alladinSaneImage,
  splash: alladinSaneImage,
  quote: "He talks like a jerk but he could eat you with a fork and spoon.",
  info: "Aladdin Sane é um doutor em arqueologia pela Universidade de Arles e um bardo pelo Conservatorio Eurídice e por algúm motivo consegue ser odiado em ambas as profissões. Ladrão, trambiqueiro e erudito Aladdin Sane parece não saber a que mundo pertence.",
  secret: "Aladdin Sane é um dos escolhidos de Ioun.",
  traits: ["Caos elegante", "Identidade partida", "Pressagio vivo"],
  chronicle: chroniclePlaceholder,
  stories: [
    {
      id: "alladin-1",
      chapter: "Conto I",
      title: "Conto ainda nao criado",
      body: "Este conto de Aladdin Sane ainda nao foi escrito. Placeholder temporario para manter a pagina organizada.",
      content: [
        {
          type: "text",
          value:
            "Este conto ainda nao foi criado. Quando a historia oficial estiver pronta, substitua este placeholder por um arquivo .txt importado ou por blocos de content.",
        },
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus vitae augue cursus luctus. Praesent vel justo et arcu facilisis tempus.",
        },
      ],
    },
  ],
  gallery: [
    { id: "alladin-a", title: "Aladdin Sane", image: alladinSaneImage },
    { id: "alladin-b", title: "Trono de Vidro Frio", image: throneArt },
  ],
};
