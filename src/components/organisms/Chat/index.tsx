import MessageBubble from '@/components/atoms/MessageBubble';
import { MessageBubbleProps } from '@/components/atoms/MessageBubble/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

export default function Chat() {
  const messages: MessageBubbleProps[] = [
    {
      text: 'Oi, tudo bem?aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      sender: 'User',
    },
    { text: 'Tudo sim! E você?', sender: 'other' },
    { text: 'Também! Preparado pro projeto?', sender: 'User' },
    { text: 'Claro, bora pra cima!', sender: 'other' },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen relative bg-black">
      <ScrollArea className="text-black h-[500px] bg-[#E7E7E7] rounded-lg shadow-lg">
        <div className="flex flex-col w-[50vw] items-center h-full p-4">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              text={message.text}
              sender={message.sender}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
