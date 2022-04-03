import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
  {
    id: 'id-001',
    title: 'HARDWARE',
    date: '2016-2017',
    url: '...',
  },
  {
    id: 'id-002',
    title: 'Bootcamp rocketseat',
    date: '2020-2021',
    url: '...',
  },
  {
    id: 'id-003',
    title: 'Just Javascript',
    date: '2021-2022',
    url: '...',
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};
