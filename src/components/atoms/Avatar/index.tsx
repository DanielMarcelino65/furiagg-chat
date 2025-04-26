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
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback delayMs={600}>{fallback}</AvatarFallback>
    </ShadAvatar>
  );
}
