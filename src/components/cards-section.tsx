"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function CardsSection() {
  const mockupRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const section = sectionRef.current;

  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);

  function animateCards(images: null[], position: number) {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "center center",
        },
      },
    );
  }

  useEffect(() => {
    const mockupPhone = mockupRef.current;
    const title = titleRef.current;

    gsap.fromTo(
      mockupPhone,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power5.out",
      },
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "65% center",
        },
      },
    );

    const img01 = card01Ref.current;
    const img02 = card02Ref.current;
    const img03 = card03Ref.current;
    const img04 = card04Ref.current;
    const img05 = card05Ref.current;
    const img06 = card06Ref.current;

    const leftImages = [img01, img02, img03];
    const rightImages = [img04, img05, img06];

    animateCards(leftImages, 50);
    animateCards(rightImages, -50);
  }, []);

  return (
    <>
      <section className="w-full pb-20" ref={sectionRef}>
        <Image
          src="/mockup-main.png"
          alt="Celular com stories de uma garota sendo exibido na tela"
          width={323}
          height={662}
          className="sticky top-56 z-10 mx-auto -mt-[32rem] mb-16 opacity-0"
          ref={mockupRef}
        />
        <h2
          className="mb-56 text-center text-7xl font-semibold text-zinc-900"
          ref={titleRef}
        >
          Faça <span className="text-teal-900/60">você</span> mesmo, de casa
        </h2>

        <div className="relative mx-auto h-[35.125rem] w-full max-w-[1320px]">
          <Image
            src="/image-01.png"
            alt="Card 01"
            height={175}
            width={250}
            className="absolute left-44 top-8 opacity-0"
            ref={card01Ref}
          />
          <Image
            src="/image-02.png"
            alt="Card 02"
            height={175}
            width={250}
            className="absolute bottom-32 left-0 opacity-0"
            ref={card02Ref}
          />
          <Image
            src="/image-03.png"
            alt="Card 03"
            height={175}
            width={250}
            className="absolute bottom-0 left-80 opacity-0"
            ref={card03Ref}
          />
          <Image
            src="/image-04.png"
            alt="Card 04"
            height={175}
            width={250}
            className="absolute right-32 top-0 opacity-0"
            ref={card04Ref}
          />
          <Image
            src="/image-05.png"
            alt="Card 05"
            height={175}
            width={250}
            className="absolute bottom-28 right-0 opacity-0"
            ref={card05Ref}
          />
          <Image
            src="/image-06.png"
            alt="Card 06"
            height={175}
            width={250}
            className="absolute bottom-0 right-80 opacity-0"
            ref={card06Ref}
          />
        </div>
      </section>
    </>
  );
}
