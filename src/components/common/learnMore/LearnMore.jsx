import { useTranslation } from "next-i18next";

import styles from "./LearnMore.module.scss";

const LearnMore = ({ href }) => {
	const { t } = useTranslation("common");
	return (
		<a rel="noopener" target="_blank" href={href} className={styles.link}>
			{t("learnMore")} &#x3e;
		</a>
	);
};

export default LearnMore;
