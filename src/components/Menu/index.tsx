import React from 'react';

import { useSideMenu } from '@/hooks/SideMenu';

import { MdMenu } from 'react-icons/md';

const Menu: React.FC = () => {
  const { sideMenuModalizeRef } = useSideMenu();

  return (
    <nav className="py-2 px-4 bg-light-primary">
      <button
        type="button"
        onClick={() => sideMenuModalizeRef.current.open()}
        className="flex items-center text-black font-semibold"
      >
        <MdMenu className="mr-2" />
        MENU
      </button>
    </nav>
  );
};

export default Menu;
