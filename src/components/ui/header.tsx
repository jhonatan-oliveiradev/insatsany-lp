import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header>
			<div>
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="Logotipo: Instasany"
						width={0}
						height={0}
						sizes="100vw"
						className="w-[170px] h-auto"
					/>
				</Link>
				<div>
					<nav>
						<Link href="#">Início</Link>
						<Link href="#">Benefícios</Link>
						<Link href="#">Para quem é o curso?</Link>
						<Link href="#">Preços promocionais</Link>
						<Link href="#">Sobre nós</Link>
					</nav>
				</div>
				<div>
					<button>
						<Image
							src="/icon-search.svg"
							alt="Ícone de pesquisa"
							width={0}
							height={0}
							sizes="100vw"
							className="w-[20px] h-[20px]"
						/>
					</button>
				</div>
			</div>
		</header>
	);
}
