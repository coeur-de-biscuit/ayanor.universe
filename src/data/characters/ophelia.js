import opheliaImage from "../../assets/ophelia.png";
import { chroniclePlaceholder } from "../chroniclePlaceholder";

export const ophelia = {
  id: "ophelia",
  name: "Ophelia de Prismeer",
  epithet: "A Princesa do Inferno",
  role: "Modelo, Sabedora de Nomes",
  faction: "Nehuma",
  region: "Arles",
  threat: "Alta",
  portrait: opheliaImage,
  splash: opheliaImage,
  quote:
    "Devil's favorite princess and the most interesting girl in the world.",
  info: "Ophelia é uma jovem tiefling, filha de Asmodeus e a Conhecedora de Nomes. Tão perigosa quanto estranha, Ophelia é uma força do caos que não pode ser controlada.",
  secret: "Dizem que Ophelia é a aposta de Asmodeus como sua campeã.",
  traits: ["Caos", "Princesa do Inferno", "Conhecedora de Nomes"],
  chronicle: chroniclePlaceholder,
  stories: [
    {
      id: "ophelia-1",
      chapter: "Conto I",
      title: "Conto ainda nao criado",
      body: "Este conto de Ophelia ainda nao foi escrito. Placeholder temporario para manter a pagina organizada.",
      content: [
        {
          type: "text",
          value:
            "Este conto ainda nao foi criado. Quando a historia oficial estiver pronta, substitua este placeholder por um arquivo .txt importado ou por blocos de content.",
        },
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, mauris at placerat sagittis, lacus justo viverra neque, non feugiat mi sem at augue.",
        },
      ],
    },
  ],
  gallery: [{ id: "alladin-a", title: "Aladdin Sane", image: opheliaImage }],
};
