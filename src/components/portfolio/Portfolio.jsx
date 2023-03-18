import { useTranslation } from "next-i18next";
import BackgroundText from "../common/backgroundText/BackgroundText";
import Title from "../common/title/Title";
import List from "./list/List";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
	const { t } = useTranslation("portfolio");

	return (
		<div className={`section ${styles.section}`} id="portfolio">
			<div className={`container ${styles.portfolio}`}>
				<Title title={t("title")} />
				<List />
			</div>
			<BackgroundText text="portfolio" />
		</div>
	);
};

export default Portfolio;
