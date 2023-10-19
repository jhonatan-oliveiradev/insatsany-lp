import Image from "next/image";

export function CardsSection() {
  return (
    <>
      <section className="w-full pb-20">
        <Image
          src="/mockup-main.png"
          alt="Celular com stories de uma garota sendo exibido na tela"
          width={0}
          height={0}
          sizes="100vw"
          className="sticky top-56 z-10 mx-auto -mt-[32rem] mb-16 h-auto w-[323.339px]"
        />
        <h2 className="mb-56 text-center text-7xl font-semibold text-zinc-900">
          Faça <span className="text-teal-900/60">você</span> mesmo, de casa
        </h2>

        <div className="relative mx-auto h-[35.125rem] w-full max-w-[1320px]">
          <Image
            src="/image-01.png"
            alt="Card 01"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute left-44 top-8 h-[175px] w-[250px]"
          />
          <Image
            src="/image-02.png"
            alt="Card 02"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-32 left-0 h-[175px] w-[250px]"
          />
          <Image
            src="/image-03.png"
            alt="Card 03"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-0 left-80 h-[175px] w-[250px]"
          />
          <Image
            src="/image-04.png"
            alt="Card 04"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute right-32 top-0 h-[175px] w-[250px]"
          />
          <Image
            src="/image-05.png"
            alt="Card 05"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-28 right-0 h-[175px] w-[250px]"
          />
          <Image
            src="/image-06.png"
            alt="Card 06"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-0 right-80 h-[175px] w-[250px]"
          />
        </div>
      </section>
    </>
  );
}
