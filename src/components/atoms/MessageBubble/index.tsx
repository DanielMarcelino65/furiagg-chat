'use client';
import React from 'react';
import Avatar from '../Avatar';
import { cn } from '@/lib/utils';
import { MessageBubbleProps } from './types';
import { useUser } from '@/context/user';
import FuriaLogo from '@/../public/images/furiagg-logo.png';
import TypingIndicator from '../TypingIndicator';

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
          className="shadow-md"
          fallback="Furia GG"
          asChild
          alt="Foto da IA"
        />
      )}
      <div
        className={cn(
          'px-2.5 py-3 rounded-lg shadow-md w-fit h-fit max-w-[80%] md:max-w-[50%] break-words',
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black',
          isError && 'bg-red-500 text-white'
        )}
      >
        {isLoading && <TypingIndicator />}
        {text}
      </div>
      {isUser && (
        <Avatar
          className="shadow-md"
          alt="Foto do Usuário"
          fallback={User?.displayName as string}
          src={User?.photoURL as string}
        />
      )}
    </div>
  );
}
