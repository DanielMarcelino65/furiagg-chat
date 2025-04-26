import React from 'react';
import {
  Avatar as ShadAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { AvatarProps } from './types';

export default function Avatar({ src, alt, className, fallback }: AvatarProps) {
  return (
    <ShadAvatar className={cn('', className)}>
      <AvatarImage src={src} alt={alt}></AvatarImage>
      <AvatarFallback delayMs={200}>
        {fallback
          ? `${fallback.charAt(0)}${fallback.split(' ')[1].charAt(0)}`
          : 'U'}
      </AvatarFallback>
    </ShadAvatar>
  );
}
