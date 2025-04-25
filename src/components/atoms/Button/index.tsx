import React from 'react';
import { ButtonProps } from './types';
import { cn } from '@/lib/utils';

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        `bg-[#E7E7E7] hover:bg-[#E7E7E7B3] active:bg-[#E7E7E780] transition-all duration-150 text-black font-rubik font-semibold py-2 px-4 rounded-[8px]`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
