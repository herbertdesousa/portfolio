import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between flex-col flex-1">
      <h2 className="font-bold text-2xl mt-10">HSV</h2>

      <div>
        <h1 className="font-bold text-4xl mb-4 lg:text-5xl">
          Fullstack
          <br />
          Developer
        </h1>
        <p
          className="font-medium text-lg text-gray mb-10"
          style={{ lineHeight: '22px', maxWidth: '312px' }}
        >
          Javascript, NodeJs, ReactJS and React Native Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
