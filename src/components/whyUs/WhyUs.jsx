import { useTranslation } from "next-i18next";

import styles from "./WhyUs.module.scss";

const WhyUs = () => {
	const { t } = useTranslation("whyUs");

	return (
		<div className="section">
			<div className="container">{t("title")}</div>
		</div>
	);
};

export default WhyUs;
