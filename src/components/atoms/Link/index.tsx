import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import React, { HtmlHTMLAttributes } from 'react';

type LinkProps = {
  children: React.ReactNode;
  asChild?: boolean;
} & HtmlHTMLAttributes<HTMLButtonElement>;

const Link = ({
  children,
  className,
  asChild = false,
  ...props
}: LinkProps) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={cn(
        'flex h-fit w-fit items-center justify-center rounded-[8px] px-2.5 font-rubik text-[16px]/[22px] font-light text-[#E7E7E7] outline-none transition-all duration-150 focus-within:ring-[#E7E7E7] hover:text-[#E7E7E7B3] focus-visible:ring-1 focus-visible:ring-[#E7E7E7] active:text-[#E7E7E780]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Link;
