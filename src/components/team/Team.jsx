import { useTranslation } from "next-i18next";

import styles from "./Team.module.scss";

const Team = () => {
	const { t } = useTranslation("team");

	return (
		<div className="section">
			<div className="container">{t("title")}</div>
		</div>
	);
};

export default Team;
