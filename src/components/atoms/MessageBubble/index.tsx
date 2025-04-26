'use client';
import React from 'react';
import Avatar from '../Avatar';
import { cn } from '@/lib/utils';
import { MessageBubbleProps } from './types';
import { useUser } from '@/context/user';
import FuriaLogo from '@/../public/images/furiagg-logo.png';

export default function MessageBubble({
  text,
  sender,
  isLoading = false,
  isError = false,
}: MessageBubbleProps) {
  const { User } = useUser();
  const isUser = sender === 'User';

  return (
    <div
      className={cn(
        'flex items-center justify-end w-full h-fit gap-1.5 my-2',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      {!isUser && (
        <Avatar
          src={FuriaLogo.src}
          fallback="Furia GG"
          asChild
          alt="Foto da IA"
        />
      )}
      <div
        className={cn(
          'p-2 rounded-lg w-fit h-fit max-w-[50%] break-words',
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black',
          isLoading && 'animate-pulse bg-gray-300',
          isError && 'bg-red-500 text-white'
        )}
      >
        {text}
      </div>
      {isUser && (
        <Avatar
          alt="Foto do Usuário"
          fallback={User?.displayName as string}
          src={User?.photoURL as string}
        />
      )}
    </div>
  );
}
