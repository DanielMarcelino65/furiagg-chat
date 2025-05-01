import { DropdownMenu } from '@/components/ui/dropdown-menu';

export type DropdownMenuProps = {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof DropdownMenu>;
