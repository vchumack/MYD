import { useTranslation } from "next-i18next";

import styles from "./Price.module.scss";

const Price = () => {
	const { t } = useTranslation("footer");

	return (
		<div className="section">
			<div className="container">{t("title")}</div>
		</div>
	);
};

export default Price;
