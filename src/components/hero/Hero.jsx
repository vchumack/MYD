import { useTranslation } from "next-i18next";
import localFont from "next/font/local";

import styles from "./Hero.module.scss";

const ermilov = localFont({
	src: "../../../public/fonts/ermilov-bold.otf",
});

const Hero = () => {
	const { t } = useTranslation("hero");

	return (
		<div className={`section ${styles.section}`} id="home">
			<div className={`container ${styles.container}`}>
				<div></div>
				<div>
					<h1 className={`${styles.title} ${ermilov.className}`}>
						Meet Your Developer
					</h1>
					<div>
						<p className={`${styles.description} }`}>{t("text")}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
