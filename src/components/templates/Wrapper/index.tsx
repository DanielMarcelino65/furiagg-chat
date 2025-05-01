import { cn } from '@/lib/utils';
import { WrapperProps } from './types';

/**
 * Wrapper component for layout and styling.
 *
 * @param {React.ReactNode} children - The content of the wrapper.
 * @param {string} className - Additional class names for styling.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Other wrapper attributes.
 * @returns {JSX.Element} The Wrapper component.
 */
const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 overflow-clip place-items-center w-[90%] h-fit lg:w-[80%] max-w-screen-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Wrapper;
