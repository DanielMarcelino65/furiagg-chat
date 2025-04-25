import { cn } from '@/lib/utils';
import { WrapperProps } from './types';

const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 overflow-clip place-items-center w-[90%] h-fit lg:w-[80%] max-w-screen-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Wrapper;
