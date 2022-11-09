import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 } from 'uuid';

interface IProjects {
  'pt-br': {
    id: string;
    title: string;
    techs: string[];
    description: string;
    img?: string;
  }[];
  en: {
    id: string;
    title: string;
    techs: string[];
    description: string;
    img?: string;
  }[];
}

const projects: IProjects = {
  'pt-br': [
    {
      id: v4(),
      title: 'Vilela Document',
      techs: ['React', 'Design', 'PDF'],
      description:
        'Gerador de documentos em PDF para empresa de ar condicionado, usuário informa dados em formulário e ao lado é mostrado um preview do PDF final',
      img: '/projects/vilela-document.png',
    },
    {
      id: v4(),
      title: 'Bingo',
      techs: ['React', 'Design'],
      description:
        'Freelance de um projeto de Bingo disponibilizado na TV para idosos',
    },
    {
      id: v4(),
      title: 'Mais Cargas',
      techs: ['JS', 'API', 'Design', 'RN'],
      description:
        'Projeto feito para motoristas de caminhões onde precisam achar fretes na região para fazer um frete. Usando um sistema de check in de origem e destino, é traçado a rota do caminhoneiro para encontrar fretes mais próximos na região.',
    },
    {
      id: v4(),
      title: 'Buyest',
      techs: ['JS', 'UI/UX', 'RN'],
      description: 'Template para RN Expo de um ecommerce minimalista',
      img: '/projects/buyest.png',
    },
    {
      id: v4(),
      title: 'Guia Cotações',
      techs: ['JS', 'API', 'Design', 'RN'],
      description:
        'App mobile para enviar cotações à um sistema de distribuições de cotações para clientes. Um formulário grande onde mostra todas as informações necessárias para executar um transporte de uma carga.',
    },
    {
      id: v4(),
      title: 'Vilela Finance',
      techs: ['JS', 'UI/UX', 'RN', 'NodeJs'],
      description:
        'App para anotar financias de uma empresa. As funções são adicionar, remover, atualizar e listar um cliente, relacionado à um cliente o lucro na listagem de financia.',
      img: '/projects/vilela-finance.png',
    },
    {
      id: v4(),
      title: 'Premium List',
      techs: ['NextJS', 'UI/UX', 'React', 'NodeJs', 'Prisma'],
      description:
        'Marketplace de artigos de luxo. Venda de Carros, Motos, Iates, Mansões e outros',
      img: '/projects/premiumlist.jpg',
    },
  ],
  en: [
    {
      id: v4(),
      title: 'Vilela Document',
      techs: ['React', 'Design', 'PDF'],
      description:
        'PDF generator for air conditioning company, the user type all data in the forms and a display on the side shows the result of the PDF',
      img: '/projects/vilela-document.png',
    },
    {
      id: v4(),
      title: 'Bingo',
      techs: ['React', 'Design'],
      description:
        'Bingo Freelance project made available on TV for the elderly in the asylum',
    },
    {
      id: v4(),
      title: 'Mais Cargas',
      techs: ['JS', 'API', 'Design', 'RN'],
      description:
        'Project made for truck drivers where they need to find in the region to make a freight. Using a source and destination system, the route of the predicted path is checked to find the next ones in the region.',
    },
    {
      id: v4(),
      title: 'Buyest',
      techs: ['JS', 'UI/UX', 'RN'],
      description: 'Template for RN Expo of a minimalist ecommerce.',
      img: '/projects/buyest.png',
    },
    {
      id: v4(),
      title: 'Guia Cotações',
      techs: ['JS', 'API', 'Design', 'RN'],
      description:
        'Mobile app to send quotes to a quote distribution system for customers. A large form that shows all the information needed to carry out a shipment of a load.',
    },
    {
      id: v4(),
      title: 'Vilela Finance',
      techs: ['JS', 'UI/UX', 'RN', 'NodeJs'],
      description:
        "App to note company's finances. The functions of adding, removing, updating and listing a customer, related to a customer the profit in the listing of finances.",
      img: '/projects/vilela-finance.png',
    },
    {
      id: v4(),
      title: 'Premium List',
      techs: ['NextJS', 'UI/UX', 'React', 'NodeJs', 'Prisma'],
      description:
        'Luxury Items Marketplace. Sale of Cars, Motorcycles, Yachts, Mansions and others',
      img: '/projects/premiumlist.jpg',
    },
  ],
};

// eslint-disable-next-line consistent-return
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.lang) return res.status(422).json({ lang: 'required' });

  if (!Object.keys(projects).find(item => item === req.query.lang))
    return res.status(401).json({ lang: 'not exists' });

  if (req.query.id) {
    const data = projects[String(req.query.lang)];

    const finded = data.find(i => i.id === req.query.id);

    if (!finded) return res.status(422).json({ id: 'not exists' });

    return res.status(200).json(finded);
  }

  res.status(200).json(projects[String(req.query.lang)]);
};
