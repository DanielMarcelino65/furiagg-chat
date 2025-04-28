'use client';
import { getOpenAIResponse } from '@/app/actions/openAiService';
import Button from '@/components/atoms/Button';
import MessageBubble from '@/components/atoms/MessageBubble';
import { MessageBubbleProps } from '@/components/atoms/MessageBubble/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useEffect, useRef, useState } from 'react';

const initialMessages: MessageBubbleProps[] = [
  {
    text: `🐾 Fala, guerreiro(a)! Bem-vindo(a) ao universo FÚRIA! 🖤🔥
              
              Aqui você vai bater um papo direto sobre o nosso time de CS, conhecer curiosidades, conquistas e histórias da Pantera! 
              
              ⚡ Importante: esta é uma simulação interativa criada para fãs. Algumas informações podem não refletir os dados oficiais em tempo real.
              
              Para saber tudo de forma oficial, confira também nossos canais e estatísticas atualizadas! 🎯
              
              Agora bora conversar e viver essa paixão pelo CS da FÚRIA! 🚀
`,
    sender: 'other',
  },
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
    <div className="flex flex-col md:items-center pt-24 justify-center w-full min-h-screen relative bg-black">
      <ScrollArea className="text-black h-[85vh] w-[100vw] bg-[#E7E7E7] rounded-lg shadow-lg">
        <div className="flex flex-col w-[90vw] md:w-[100vw] items-center h-full pt-4 px-2 lg:px-16">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              text={message.text}
              sender={message.sender}
            />
          ))}
          {isTyping ? (
            <MessageBubble text="" sender="other" isLoading={isTyping} />
          ) : (
            questions.length > 0 &&
            questions.map((question, index) => (
              <Button
                onClick={() => handleSendMessage(question)}
                key={index}
                variant="question"
                className="mb-1 self-end"
              >
                {question}
              </Button>
            ))
          )}

          {/* Reference to scroll to the bottom */}
          <div ref={endOfMessagesRef} />
        </div>
      </ScrollArea>
      <div className="flex flex-col items-center justify-center w-full p-4"></div>
    </div>
  );
}
