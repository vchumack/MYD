import { useTranslation } from "next-i18next";

import styles from "./Steps.module.scss";

const Steps = () => {
	const { t } = useTranslation("steps");

	return (
		<div className="section">
			<div className="container">{t("title")}</div>
		</div>
	);
};

export default Steps;
