'use client';
import { getOpenAIResponse } from '@/app/actions/openAiService';
import Button from '@/components/atoms/Button';
import MessageBubble from '@/components/atoms/MessageBubble';
import { MessageBubbleProps } from '@/components/atoms/MessageBubble/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useEffect, useRef, useState } from 'react';
import { scrollTo } from '@/utils/scrollTo';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
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
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  const [messages, setMessages] =
    useState<MessageBubbleProps[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollTo(endOfMessagesRef);
  }, [messages]);

  const handleSendMessage = async (selectedQuestion: string) => {
    if (isTyping) return;
    // if (true) {
    //   setMessages((prev) => [
    //     ...prev,
    //     { text: selectedQuestion, sender: 'User' },
    //   ]);
    //   setIsTyping(true);
    //   setTimeout(() => {
    //     setMessages((prev) => [
    //       ...prev,
    //       { text: `Resposta teste para ${selectedQuestion}`, sender: 'other' },
    //     ]);
    //     setIsTyping(false);
    //   }, 2000);
    //   return;
    // }

    setMessages((prev) => [
      ...prev,
      { text: selectedQuestion, sender: 'User' },
    ]);
    setIsTyping(true);

    const response = await getOpenAIResponse(selectedQuestion);

    setMessages((prev) => [
      ...prev,
      { text: response.answer, sender: 'other' },
    ]);

    if (questions.includes(selectedQuestion)) {
      // Se clicou numa pergunta atual ➔ atualiza para novas perguntas sugeridas
      setPreviousQuestions(
        questions.filter((question) => question !== selectedQuestion)
      );
      setQuestions(response.questions); // novas perguntas!
    } else {
      // Se clicou numa pergunta do histórico ➔ apenas remove a escolhida
      setPreviousQuestions((prev) =>
        prev.filter((question) => question !== selectedQuestion)
      );
      // NÃO altera questions!
    }

    setShowHistory(false);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col md:items-center pt-24 justify-center w-full min-h-screen relative bg-black">
      <ScrollArea className="text-black h-[85vh] w-[100vw] bg-transparent rounded-lg shadow-lg">
        <div className="flex flex-col w-[90vw] md:w-[100vw] items-center h-full pt-4 px-2 lg:px-20">
          {messages.map((message, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
              }}
              className={cn(
                'flex items-center justify-end w-full h-fit gap-1.5 my-2',
                message.sender === 'User' ? 'justify-end' : 'justify-start'
              )}
              key={index}
            >
              <MessageBubble text={message.text} sender={message.sender} />
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className={cn(
                'flex items-center justify-end w-full h-fit gap-1.5 my-2',
                'justify-start'
              )}
            >
              <MessageBubble text="" sender="other" isLoading={isTyping} />
            </motion.div>
          )}
          {!isTyping &&
            questions.length > 0 &&
            questions
              .sort((a, b) => b.length - a.length)
              .map((question, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="flex items-center justify-end w-full h-fit gap-1.5 py-2"
                  key={index}
                >
                  <Button
                    onClick={() => handleSendMessage(question)}
                    variant="question"
                  >
                    {question}
                  </Button>
                </motion.div>
              ))}
          {!isTyping && previousQuestions.length > 0 && (
            <>
              {showHistory &&
                previousQuestions.map((question, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + index * 0.1,
                    }}
                    key={index}
                    className="flex items-center justify-end w-full h-fit gap-1.5 py-2"
                  >
                    <Button
                      onClick={() => handleSendMessage(question)}
                      variant="question"
                      className="mb-1 self-end"
                    >
                      {question}
                    </Button>
                  </motion.div>
                ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center justify-end w-full h-fit gap-1.5 my-2"
              >
                <Button
                  onClick={() => setShowHistory(!showHistory)}
                  variant="question"
                  className="mb-1 self-end"
                >
                  {showHistory
                    ? 'Esconder perguntas'
                    : 'Ver perguntas anteriores'}
                </Button>
              </motion.div>
            </>
          )}

          {/* Reference to scroll to the bottom */}
          <div ref={endOfMessagesRef} />
        </div>
      </ScrollArea>
      <div className="flex flex-col items-center justify-center w-full p-4"></div>
    </div>
  );
}
