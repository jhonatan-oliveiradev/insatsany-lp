import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";

const epilogue = Epilogue({
	subsets: ["latin"],
	weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
	title: "Instasany",
	description: "Seja o seu melhor."
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={epilogue.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
