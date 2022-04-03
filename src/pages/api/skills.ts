import type { NextApiRequest, NextApiResponse } from 'next';

const data = {
  'pt-br': {
    skills: ['NODEJS', 'JS', 'REACTJS', 'TYPESCRIPT'],
    languages: ['Português (NATIVO)', 'Inglês (Intermediário)'],
    hobbies: [
      'música',
      'DESIGN - UI/UX',
      'Desenvolvimento de Games',
      'Machine learning - IA',
    ],
  },
  en: {
    skills: ['NODEJS', 'JS', 'REACTJS', 'TYPESCRIPT'],
    languages: ['portuguese (native)', 'english (intermediate)'],
    hobbies: [
      'MUSIC',
      'DESIGN - UI/UX',
      'game development',
      'Machine learning - IA',
    ],
  },
};

// eslint-disable-next-line consistent-return
export default (req: NextApiRequest, res: NextApiResponse): any => {
  if (!req.query.lang) return res.status(422).json({ lang: 'required' });

  if (!Object.keys(data).find(item => item === req.query.lang))
    return res.status(401).json({ lang: 'not exists' });

  res.status(200).json(data[String(req.query.lang)]);
};
