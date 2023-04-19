import { Archivo_Black, Monsieur_La_Doulaise } from "next/font/google";
import Link from "next/link";

import styles from "./Logo.module.scss";
//Zeyada good
//Sacramento
//? Mr_Dafoe
//?Mrs_Saint_Delafield
// todo Herr_Von_Muellerhoff
//Arizonia
//Monsieur_La_Doulaise
//? Clicker_Script

const gajraj = Archivo_Black({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
});

const dancing = Monsieur_La_Doulaise({
	subsets: ["latin"],
	weight: ["400"],
});

const Logo = ({ toggle }) => {
	return (
		<Link
			href="/"
			className={`${styles.logo} ${gajraj.className}`}
			onClick={toggle}
		>
			<p className={styles.main}>MYD</p>
			{/* <div className={`${styles.sub} ${dancing.className}`}>
				<div className={`${styles.subMain} ${dancing.className}`}>
					Meet Your
				</div>
				<div className={styles.subSecondary}>Developers</div>
			</div> */}
		</Link>
	);
};

export default Logo;
