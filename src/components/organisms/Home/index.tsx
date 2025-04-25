import React from 'react';
import Wrapper from '@/components/templates/Wrapper';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import FallenPhoto from '@/../public/images/fallen-photo-upscale.png';

export default function Home() {
  return (
    <>
      <div className="absolute bottom-0 h-[250px] w-full bg-gradient-to-t from-[#000000B3] to-transparent z-10" />
      <div className="hero-triangle absolute bottom-0 h-[50%] lg:h-full min-w-full bg-[#E7E7E7]" />
      <Wrapper>
        <div className="flex items-center justify-center md:justify-start w-full min-h-screen">
          <div className="flex flex-col mb-5 md:mb-0 gap-2 items-center md:items-start justify-center w-fit h-full">
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bebas-neue font-extrabold text-[#E7E7E7]">
              CONVERSE COM A FÚRIA
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[24px] max-w-[650px] text-center md:text-left font-bebas-neue font-light text-[#E7E7E7]">
              Descubra curiosidades, acompanhe os jogos e se conecte com o
              universo FURIA de um jeito único.
            </p>
            <Button>Iniciar conversa!</Button>
          </div>
          <Image
            className="z-10 absolute bottom-0 md:right-0 xl:right-2.5 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] object-cover"
            src={FallenPhoto}
            alt="Jogador profissional de CS da FuriaGG"
          />
        </div>
      </Wrapper>
    </>
  );
}
