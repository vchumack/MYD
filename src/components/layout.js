import { Rubik } from "next/font/google";

import Footer from "./footer/Footer";
import Header from "./header/Header";

const rubik = Rubik({
	subsets: ["latin"],
	weight: ["300", "700"],
});

export default function Layout({ children }) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${rubik.style.fontFamily};
				}
			`}</style>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
