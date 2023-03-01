import { useTranslation } from "next-i18next";
import { navbar } from "@/data/header";

import Link from "next/link";

import styles from "./Navbar.module.scss";

const Navbar = ({ toggle }) => {
	const { t } = useTranslation("header");

	return (
		<nav>
			<ul className={styles.list}>
				{navbar.map((item) => (
					<li key={item} className={styles.item}>
						<Link href={`#${item}`} scroll={false} onClick={toggle}>
							{t(item)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
