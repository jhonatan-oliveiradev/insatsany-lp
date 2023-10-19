import Image from "next/image";
import Link from "next/link";

import { GridContainer } from "./grid-container";

const arrayMenu = [
  {
    id: 1,
    title: "Início",
    link: "/",
  },
  {
    id: 2,
    title: "Benefícios",
    link: "#",
  },
  {
    id: 3,
    title: "Para quem é o curso?",
    link: "#",
  },
  {
    id: 4,
    title: "Preços promocionais",
    link: "#",
  },
  {
    id: 5,
    title: "Sobre nós",
    link: "#",
  },
];

export function Header() {
  const activatedStyle = "bg-teal-600 text-white text-opacity-100 rounded-full";

  return (
    <header className="relative flex h-24 w-full items-center border-b border-teal-600 bg-teal-900 text-zinc-50">
      <GridContainer className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logotipo: Instasany"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-[156px]"
          />
        </Link>
        <div className="hidden items-center gap-20 lg:flex">
          <nav className="flex gap-2">
            {arrayMenu.map((item, index) => (
              <Link
                className={`px-3 py-1 text-zinc-50 text-opacity-40 transition-all hover:text-opacity-100 ${
                  index === 0 ? activatedStyle : ""
                }`}
                key={item.id}
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button>
            <Image
              src="/icon-search.svg"
              alt="Ícone de pesquisa"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[24px] w-[24px]"
            />
          </button>
          <button className="flex items-center gap-2">
            <Image
              src="/icon-user.svg"
              alt="Ícone de usuário"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[24px] w-[24px]"
            />
            <span className="hidden font-medium sm:flex">Fazer login</span>
          </button>
        </div>
      </GridContainer>
    </header>
  );
}
