import throneArt from "../../assets/art-throne.svg";
import tiberiusImage from "../../assets/tiberius.jpeg";
import tibasPraia from "../../assets/tibas-conto1.png";
import ultimoVeraoText from "./tiberius/o-ultimo-verao.txt?raw";
import { chroniclePlaceholder } from "../chroniclePlaceholder";

export const tierius = {
  id: "tiberius-erasthenes",
  name: "Tiberius Erasthenes",
  epithet: "O Velho Mago",
  role: "Mago, professor e fanfarrão",
  faction: "Nehuma",
  region: "Ayanor",
  threat: "Altissima",
  portrait: tiberiusImage,
  splash: tiberiusImage,
  quote: "Magia é para tolos.",
  info: "Tierius Erasthenes é conhecido como o Velho Mago porque ninguem vivo lembra de um tempo antes dele. Pai de sete filhas e um arcanista poderoso.",
  secret:
    "Dizem que a torre arco-iris é o maior compendium de magia de Ayanor.",
  traits: ["Magia antiga", "Memoria impossivel", "Mentor perigoso"],
  chronicle: chroniclePlaceholder,
  stories: [
    {
      id: "tierius-1",
      chapter: "Conto I",
      title: "O Último Verão de Porto Celeste",
      heroImage: tibasPraia,
      body: "Tiberius promete a Cécile e Cristine levá-las à praia, onde poderão relaxar e observar os rapazes. Porém, a Torre Arco-Íris tem outros planos.",
      text: ultimoVeraoText,
      media: {
        tiberius: {
          image: tiberiusImage,
          caption:
            "Tiberius Erasthenes, durante uma aula que oficialmente nunca aconteceu.",
        },
      },
      content: [
        {
          type: "text",
          value: "ssss",
        },
        {
          type: "image",
          image: tiberiusImage,
          caption:
            "Tierius Erasthenes, durante uma aula que oficialmente nunca aconteceu.",
        },
        {
          type: "text",
          value:
            "No dia seguinte, a torre estava inteira. Os alunos lembravam da fuga. O quadro lembrava da licao. Tierius lembrava de quem havia prestado atencao.",
        },
      ],
    },
    {
      id: "tierius-2",
      chapter: "Conto II",
      title: "Conto ainda nao criado",
      body: "Este conto ainda nao foi escrito. Use este espaco como placeholder ate a historia oficial entrar no arquivo.",
      content: [
        {
          type: "text",
          value:
            "Este conto ainda nao foi criado. Quando a historia estiver pronta, substitua este placeholder por um arquivo .txt importado ou por blocos de content.",
        },
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel urna sed turpis gravida luctus. Donec vitae nibh a neque dignissim volutpat.",
        },
      ],
    },
  ],
  gallery: [
    { id: "tierius-a", title: "O Velho Mago", image: tiberiusImage },
    { id: "tierius-b", title: "Arquivo Proibido", image: throneArt },
  ],
};
