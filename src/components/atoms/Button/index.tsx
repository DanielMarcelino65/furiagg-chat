'use client';

import React from 'react';
import { ButtonProps } from './types';
import { cn } from '@/lib/utils';

/**
 * Button component for user interactions.
 *
 * @param {React.ReactNode} children - The content of the button.
 * @param {string} className - Additional class names for styling.
 * @param {string} variant - The variant of the button (primary or question).
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Other button attributes.
 * @returns {JSX.Element} The Button component.
 */
export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        `cursor-pointer  transition-all duration-150 font-rubik font-semibold py-2 px-4 rounded-[8px]`,
        variant === 'primary' &&
          'bg-[#E7E7E7] hover:bg-[#E7E7E7B3] active:bg-[#E7E7E780] text-black',
        variant === 'question' &&
          'bg-transparent border-2 border-blue-500 text-blue-500',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
