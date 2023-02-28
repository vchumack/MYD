import { useTranslation } from "next-i18next";

import styles from "./Hero.module.scss";

const Hero = () => {
	const { t } = useTranslation("hero");

	return (
		<div className="section">
			<div className="container">{t("text")}</div>
		</div>
	);
};

export default Hero;
