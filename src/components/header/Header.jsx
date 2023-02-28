import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
	const { t } = useTranslation("header");
	const { locale, locales } = useRouter();

	return (
		<header>
			<div className="container">{t("home")}</div>
			<Link href="/" locale={locale === "en" ? locales[0] : locales[1]}>
				{t("lang")}
			</Link>
		</header>
	);
};

export default Header;
