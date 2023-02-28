import { useTranslation } from "next-i18next";

import styles from "./Footer.module.scss";

const Footer = () => {
	const { t } = useTranslation("footer");

	return (
		<footer>
			<div className="container">{t("title")}</div>
		</footer>
	);
};

export default Footer;
