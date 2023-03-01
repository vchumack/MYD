import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Link from "next/link";

import styles from "./Language.module.scss";

const Language = ({ toggle }) => {
	const { t } = useTranslation("header");
	const { locale, locales } = useRouter();

	return (
		<Link
			href="/"
			locale={locale === "en" ? locales[0] : locales[1]}
			className={styles.language}
			onClick={toggle}
		>
			{t("lang")}
		</Link>
	);
};

export default Language;
