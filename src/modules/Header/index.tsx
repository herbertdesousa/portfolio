import React from 'react';

import { useLanguage } from '@/hooks/useLanguage';

const Header: React.FC = () => {
  const text = useLanguage();

  return (
    <header className="flex justify-between flex-col flex-1">
      <h2 className="font-bold text-2xl mt-10">HSV</h2>

      <div>
        <h1 className="font-bold text-4xl mb-4 lg:text-5xl">
          {text.header.title}
        </h1>
        <p
          className="font-medium text-lg text-gray mb-10"
          style={{ lineHeight: '22px', maxWidth: '312px' }}
        >
          {text.header.subTitle}
        </p>
      </div>
    </header>
  );
};

export default Header;
