import React, { createContext, useContext, useRef } from 'react';

import SideMenu, { ISideMenuRef } from './SideMenuView';

const SideMenuContext = createContext<ISideMenuContextData>(
  {} as ISideMenuContextData,
);

interface ISideMenuContextData {
  sideMenuModalizeRef: React.RefObject<ISideMenuRef>;
}

const SideMenuProvider: React.FC = ({ children }) => {
  const sideMenuModalizeRef = useRef<ISideMenuRef>(null);

  return (
    <SideMenuContext.Provider value={{ sideMenuModalizeRef }}>
      {children}

      <SideMenu ref={sideMenuModalizeRef} />
    </SideMenuContext.Provider>
  );
};

function useSideMenu(): ISideMenuContextData {
  const context = useContext(SideMenuContext);

  if (!context) {
    throw new Error('useSideMenu must be used within an SideMenuContext');
  }

  return context;
}

export { SideMenuProvider, useSideMenu };
