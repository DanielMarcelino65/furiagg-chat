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
import NextLink from 'next/link';
import { DropdownMenu } from '@/components/atoms/DropdownMenu';
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

/**
 * Header component for the application.
 *
 * @returns {JSX.Element} The Header component.
 */
export default function Header() {
  const { User } = useUser();
  const router = useRouter();
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      console.error('Popup auth error:', error);
    });
  };

  const handleLogout = () => {
    auth.signOut().catch((error) => {
      console.error('Sign out error:', error);
    });
    localStorage.removeItem('furia_questions');
    localStorage.removeItem('furia_previousQuestions');
    localStorage.removeItem('furia_messages');
    router.push('/');
  };
  return (
    <header className="flex fixed z-50 top-0 items-center justify-between w-full py-4 px-8 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <NextLink href="/">
          <Image
            className="hover:scale-[1.1] transition-all duration-150"
            width={70}
            height={70}
            src={FuriaLogo}
            alt="Logo da Furia"
          />
        </NextLink>
      </motion.div>
      <nav className="flex items-center space-x-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/">Home</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/chat">Bora conversar!</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {User ? (
            <DropdownMenu
              trigger={
                <Avatar
                  fallback={User.displayName as string}
                  alt="Foto do Usuário"
                  src={User.photoURL as string}
                />
              }
            >
              <DropdownMenuLabel className="text-white">
                Conta
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#27272a]" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="py-2 text-white hover:bg-transparent"
              >
                Sair
              </DropdownMenuItem>
            </DropdownMenu>
          ) : (
            <Button onClick={signInWithGoogle}>Fazer Login</Button>
          )}
        </motion.div>
      </nav>
    </header>
  );
}
