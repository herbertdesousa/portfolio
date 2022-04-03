import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
  {
    id: 'id-001',
    title: 'Guia do Transporte',
    img: '...',
    date: '2019-2022',
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};
