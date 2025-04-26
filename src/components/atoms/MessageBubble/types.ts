import { HTMLAttributes } from 'react';

export type MessageBubbleProps = {
  text: string;
  sender: 'User' | 'other';
  isLoading?: boolean;
  isError?: boolean;
  isFirstMessage?: boolean;
  isLastMessage?: boolean;
} & HTMLAttributes<HTMLDivElement>;
