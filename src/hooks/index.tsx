import React from 'react';

import { SideMenuProvider } from './SideMenu';
import { ContactMenuProvider } from './ContactMenu';

const Hooks: React.FC = ({ children }) => {
  return (
    <ContactMenuProvider>
      <SideMenuProvider>{children}</SideMenuProvider>
    </ContactMenuProvider>
  );
};

export default Hooks;
