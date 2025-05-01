import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

type LinkProps = {
  children: React.ReactNode;
  asChild?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Link component for navigation and interaction.
 *
 * @param {React.ReactNode} children - The content of the link.
 * @param {string} className - Additional class names for styling.
 * @param {boolean} asChild - If true, renders as a child component.
 * @param {React.AnchorHTMLAttributes<HTMLAnchorElement>} props - Other link attributes.
 * @returns {JSX.Element} The Link component.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'a';

    return (
      <Component
        ref={ref}
        className={cn(
          'flex flex-col cursor-pointer h-fit w-fit  hover:after:w-[100%] items-center justify-center px-2.5 font-rubik text-[16px]/[22px] font-light text-[#E7E7E7] outline-none transition-all duration-150 focus-within:ring-[#E7E7E7] hover:text-[#E7E7E7B3] focus-visible:ring-1 focus-visible:ring-[#E7E7E7] active:text-[#E7E7E780]',
          Component === 'a' &&
            'after:bg-[#E7E7E7b3] after:transition-all after:duration-150 after:block after:content-[""] after:w-0 after:h-0.5',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Link.displayName = 'Link';

export default Link;
