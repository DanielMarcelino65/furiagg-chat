import {
  DropdownMenu as ShadDropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuProps } from './types';

/**
 * DropdownMenu component for displaying a dropdown menu.
 *
 * @param {React.ReactNode} trigger - The element that triggers the dropdown.
 * @param {React.ReactNode} children - The content of the dropdown menu.
 * @param {string} className - Additional class names for styling.
 * @param {React.HTMLAttributes<HTMLDivElement>} rest - Other attributes for the dropdown menu.
 * @returns {JSX.Element} The DropdownMenu component.
 */
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
