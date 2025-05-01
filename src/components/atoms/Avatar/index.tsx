import React from 'react';
import {
  Avatar as ShadAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { AvatarProps } from './types';

/**
 * Avatar component to display user profile images.
 *
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {string} className - Additional class names for styling.
 * @param {string} fallback - Fallback text if the image fails to load.
 * @returns {JSX.Element} The Avatar component.
 */
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
