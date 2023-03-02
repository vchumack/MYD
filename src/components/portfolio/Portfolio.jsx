import { useTranslation } from "next-i18next";
import Title from "../common/title/Title";
import List from "./list/List";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
	const { t } = useTranslation("portfolio");

	return (
		<div className={`section`} id="portfolio">
			<div className={`container ${styles.portfolio}`}>
				<Title title={t("title")} />
				<List />
			</div>
		</div>
	);
};

export default Portfolio;
