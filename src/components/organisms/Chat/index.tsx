'use client';
import { getOpenAIResponse } from '@/app/actions/openAiService';
import Button from '@/components/atoms/Button';
import MessageBubble from '@/components/atoms/MessageBubble';
import { MessageBubbleProps } from '@/components/atoms/MessageBubble/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useEffect, useRef, useState } from 'react';

const initialMessages: MessageBubbleProps[] = [
  {
    text: 'Oi, tudo bem?aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    sender: 'User',
  },
  { text: 'Tudo sim! E você?', sender: 'other' },
  { text: 'Também! Preparado pro projeto?', sender: 'User' },
  { text: 'Claro, bora pra cima!', sender: 'other' },
];
const recommendedQuestions = [
  'Qual é a escalação atual da FURIA CS?',
  'Quais são os próximos campeonatos importantes da FURIA CS?',
  'Como está o desempenho do FalleN na temporada atual?',
];
export default function Chat() {
  const [questions, setQuestions] = useState<string[]>(recommendedQuestions);
  const [messages, setMessages] =
    useState<MessageBubbleProps[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (question: string) => {
    setMessages((prev) => [...prev, { text: question, sender: 'User' }]);
    setIsTyping(true);

    const response = await getOpenAIResponse(question);

    setMessages((prev) => [
      ...prev,
      { text: response.answer, sender: 'other' },
    ]);
    setQuestions(response.questions);
    setIsTyping(false);
  };

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
          {isTyping && (
            <MessageBubble text="" sender="other" isLoading={isTyping} />
          )}
          {/* Reference to scroll to the bottom */}
          <div ref={endOfMessagesRef} />
        </div>
      </ScrollArea>
      <div className="flex flex-col items-center justify-center w-full p-4">
        {questions.map((question, index) => (
          <Button
            onClick={() => handleSendMessage(question)}
            key={index}
            className="mb-1"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}
