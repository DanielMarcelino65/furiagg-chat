'use client';
import React from 'react';
import Wrapper from '@/components/templates/Wrapper';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import FallenPhoto from '@/../public/images/fallen-photo-upscale.png';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      <div className="absolute bottom-0 h-[250px] w-full bg-gradient-to-t from-[#000000B3] to-transparent z-10" />
      <motion.div
        initial={{ opacity: 1, transform: 'translateY(100%)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="hero-triangle absolute bottom-0 h-[50%] lg:h-full min-w-full bg-[#E7E7E7]"
      />
      <Wrapper>
        <div className="flex items-center justify-center md:justify-start w-full min-h-screen">
          <div className="flex flex-col mb-5 md:mb-0 gap-2 items-center md:items-start justify-center w-fit h-full">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              aria-label="Fale com a Fúria e viva o game"
              className="text-[32px] md:text-[48px] lg:text-[64px] font-bebas-neue text-center font-extrabold text-[#E7E7E7]"
            >
              FALE COM A FÚRIA E VIVA O GAME
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[16px] md:text-[20px] lg:text-[24px] max-w-[650px] text-center md:text-left font-bebas-neue font-light text-[#E7E7E7]"
            >
              Chegou a tua chance de se conectar de verdade com a FÚRIA!
              Descubra curiosidades, acompanhe nossos jogos, troque ideia sobre
              a comunidade e viva toda a emoção do Esports direto do chat. Aqui
              o fã é protagonista. Bora resenhar? 🖤🔥
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href={'/chat'}>
                <Button>Bora conversar!</Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0.5, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="z-10 absolute bottom-0 md:right-0 xl:right-2.5"
          >
            <Image
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] object-cover"
              src={FallenPhoto}
              alt="Jogador profissional de CS da FuriaGG"
            />
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
}
