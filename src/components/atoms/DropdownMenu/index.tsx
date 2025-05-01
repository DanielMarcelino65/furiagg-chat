import {
  DropdownMenu as ShadDropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuProps } from './types';

export function DropdownMenu({
  trigger,
  children,
  ...rest
}: DropdownMenuProps) {
  return (
    <ShadDropdownMenu {...rest}>
      <DropdownMenuTrigger className="outline-0">{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 flex flex-col border-[#27272a] bg-black">
        {children}
      </DropdownMenuContent>
    </ShadDropdownMenu>
  );
}
