'use client';
import Button from '@/components/atoms/Button';
import Link from '@/components/atoms/Link';
import Image from 'next/image';
import React from 'react';
import FuriaLogo from '@/../public/images/furiagg-logo.png';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useUser } from '@/context/user';
import Avatar from '@/components/atoms/Avatar';

export default function Header() {
  const { User } = useUser();
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      console.error('Popup auth error:', error);
    });
  };
  return (
    <header className="flex absolute z-50 top-0 items-center justify-between w-full pt-4 px-8 md:px-20 bg-black">
      <Image width={70} height={70} src={FuriaLogo} alt="Logo da Furia" />
      <nav className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/chat">Bora conversar!</Link>
        {User ? (
          <Avatar
            fallback={User.displayName as string}
            alt="Foto do Usuário"
            src={User.photoURL as string}
          />
        ) : (
          <Button onClick={signInWithGoogle}>Fazer Login</Button>
        )}
      </nav>
    </header>
  );
}
