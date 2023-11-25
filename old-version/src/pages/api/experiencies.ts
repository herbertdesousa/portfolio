import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
  {
    id: 'id-001',
    title: 'Guia do Transporte',
    img: '/experiencies/guia-do-transporte.jpg',
    link: 'https://www.guiadotransporte.com.br',
    date: '2019-2022',
  },
  {
    id: 'id-002',
    title: 'Pulsar Multimedia',
    img: '/experiencies/pulsar-multimidea.png',
    link: 'http://www.pulsarmultimedia.com.br',
    date: '2022',
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};
