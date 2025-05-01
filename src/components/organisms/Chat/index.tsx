'use client';
import { getOpenAIResponse } from '@/app/actions/openAiService';
import Button from '@/components/atoms/Button';
import MessageBubble from '@/components/atoms/MessageBubble';
import { MessageBubbleProps } from '@/components/atoms/MessageBubble/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useEffect, useRef, useState } from 'react';
import { scrollTo } from '@/utils/scrollTo';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { usePersistedState } from '@/hooks/usePersistedState';

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
  const [questions, setQuestions] = usePersistedState<string[]>(
    'furia_questions',
    recommendedQuestions
  );
  const [previousQuestions, setPreviousQuestions] = usePersistedState<string[]>(
    'furia_previousQuestions',
    []
  );
  const [messages, setMessages] = usePersistedState<MessageBubbleProps[]>(
    'furia_messages',
    initialMessages
  );
  const [isTyping, setIsTyping] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollTo(endOfMessagesRef);
  }, [messages]);

  const handleSendMessage = async (selectedQuestion: string) => {
    if (isTyping) return;

    //This block is for testing purposes, to simulate a response from the AI
    if (true) {
      setMessages((prev) => [
        ...prev,
        { text: selectedQuestion, sender: 'User' },
      ]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `Resposta teste para ${selectedQuestion}`, sender: 'other' },
        ]);
        setIsTyping(false);
      }, 2000);
      setShowHistory(false);
      setPreviousQuestions(
        questions.filter((question) => question !== selectedQuestion)
      );
      return;
    }

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
      // If clicked on a new question ➔ remove from questions and add to history
      setPreviousQuestions(
        questions.filter((question) => question !== selectedQuestion)
      );
      setQuestions(response.questions); // novas perguntas!
    } else {
      // If clicked on a previous question ➔ remove from history and keep questions
      setPreviousQuestions((prev) =>
        prev.filter((question) => question !== selectedQuestion)
      );
      // Do not update questions, keep the same ones
    }

    setShowHistory(false);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col md:items-center pt-24 justify-center w-full min-h-screen overflow-hidden relative bg-black">
      <ScrollArea className="text-black h-[85vh] w-[100vw] bg-transparent rounded-lg shadow-lg">
        <motion.div
          layout="preserve-aspect"
          className="flex flex-col w-full items-center h-full pt-4 px-2 lg:px-20"
        >
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
                  className="flex items-center justify-end w-full h-fit mb-4"
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
              <AnimatePresence>
                {showHistory &&
                  previousQuestions.map((question, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.1,
                      }}
                      key={index}
                      className="flex items-center justify-end w-full h-fit mb-4"
                    >
                      <Button
                        onClick={() => handleSendMessage(question)}
                        variant="question"
                        className="self-end"
                      >
                        {question}
                      </Button>
                    </motion.div>
                  ))}
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center justify-end w-full h-fit"
              >
                <Button
                  onClick={() => {
                    setShowHistory(!showHistory);
                    setTimeout(() => {
                      scrollTo(endOfMessagesRef);
                    }, 300);
                  }}
                  variant="question"
                  className="self-end"
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
        </motion.div>
      </ScrollArea>
      <div className="flex flex-col items-center justify-center w-full p-4"></div>
    </div>
  );
}
