import React from 'react';
import Image from 'next/image';

import { MdOpenInNew } from 'react-icons/md';

import { useLanguage } from '@/hooks/useLanguage';
import { useContactMenu } from '@/hooks/ContactMenu';

interface IAvatarProps {
  onClickContact?(): void;
}

const Avatar: React.FC<IAvatarProps> = ({ onClickContact }) => {
  const text = useLanguage();
  const { contactMenuModalizeRef } = useContactMenu();

  return (
    <button
      type="button"
      className="flex py-4 bg-white w-full"
      onClick={() => {
        if (onClickContact) onClickContact();
        contactMenuModalizeRef.current?.open();
      }}
    >
      <Image
        src="/avatar.jpg"
        width="56"
        height="56"
        className="rounded-full"
      />
      <div className="ml-4">
        <strong className="text-left">Herbert Vilela</strong>
        <br />
        <span className="flex items-center text-gray">
          {text.avatar.contact}
          <MdOpenInNew className="ml-2" />
        </span>
      </div>
    </button>
  );
};

export default Avatar;
