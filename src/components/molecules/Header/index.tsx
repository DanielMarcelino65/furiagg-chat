import Button from '@/components/atoms/Button';
import Link from '@/components/atoms/Link';
import Image from 'next/image';
import React from 'react';
import FuriaLogo from '@/../public/images/furiagg-logo.png';

export default function Header() {
  return (
    <header className="flex absolute z-50 top-0 items-center justify-between w-full p-4 bg-black">
      <Image width={70} height={70} src={FuriaLogo} alt="Logo da Furia" />
      <nav className="flex items-center space-x-4">
        <Link>Home</Link>
        <Link>Iniciar conversa!</Link>
        <Button>Fazer Login</Button>
      </nav>
    </header>
  );
}
