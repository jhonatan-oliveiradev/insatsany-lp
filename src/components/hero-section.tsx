"use client";

import Image from "next/image";
import { GridContainer } from "./ui/grid-container";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroSection() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      },
    );

    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      },
    );

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      {
        rotate: 10,
        duration: 1,
      },
    );
  }, []);

  return (
    <section className="bg-hero relative h-[874px] w-full overflow-hidden bg-teal-900 bg-top bg-no-repeat pt-16">
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-[1056px] text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="mb-4 text-xl font-medium text-teal-600">
            Novo curso focado em Instagram
          </h3>
          <h1 className="text-7xl/normal font-semibold text-zinc-50">
            Destrave as suas habilidades
          </h1>
        </div>
        <div className="flex items-center justify-center gap-10">
          <button className="flex items-center gap-2">
            <Image
              src="/icon-file.svg"
              alt="Ícone: Lista de espera"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[18px] w-[18px]"
            />
            <span className="font-medium text-zinc-50">
              Assinar lista de espera
            </span>
          </button>
          <button className="rounded-full bg-lime-300 px-5 py-4 font-bold text-teal-900 transition-all hover:bg-lime-500">
            <span>Começar agora</span>
          </button>
        </div>
        <div className="relative mt-4 h-28 w-full max-w-[855px]">
          <Image
            src="/icon-hand.svg"
            alt="Imagem: batendo palmas"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-0 left-0 h-[48px] w-[48px]"
          />
          <Image
            src="/icon-hand-02.svg"
            alt="Imagem: batendo palmas"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute right-0 top-0 h-[48px] w-[48px]"
          />
        </div>
        <div className="absolute -bottom-44 flex w-full max-w-[957px] justify-between">
          <Image
            src="/mockup.svg"
            alt="Imagem: silhueta de um celular"
            width={328}
            height={662}
            className="relative left-[53px] top-[18px]"
            ref={mockupLeftRef}
          />
          <Image
            src="/mockup.svg"
            alt="Imagem: silhueta de um celular"
            width={328}
            height={662}
            className="relative right-[53px] top-[18px]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
