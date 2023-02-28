import { useTranslation } from "next-i18next";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
	const { t } = useTranslation("portfolio");

	return (
		<div className="section">
			<div className="container">{t("title")}</div>
		</div>
	);
};

export default Portfolio;
