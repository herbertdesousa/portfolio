import React, { createContext, useContext, useRef } from 'react';

import ContactMenu, { IContactMenuRef } from './ContactMenuView';

const ContactMenuContext = createContext<IContactMenuContextData>(
  {} as IContactMenuContextData,
);

interface IContactMenuContextData {
  contactMenuModalizeRef: React.RefObject<IContactMenuRef>;
}

const ContactMenuProvider: React.FC = ({ children }) => {
  const contactMenuModalizeRef = useRef<IContactMenuRef>(null);

  return (
    <ContactMenuContext.Provider value={{ contactMenuModalizeRef }}>
      {children}

      <ContactMenu ref={contactMenuModalizeRef} />
    </ContactMenuContext.Provider>
  );
};

function useContactMenu(): IContactMenuContextData {
  const context = useContext(ContactMenuContext);

  if (!context) {
    throw new Error('useContactMenu must be used within an ContactMenuContext');
  }

  return context;
}

export { ContactMenuProvider, useContactMenu };
