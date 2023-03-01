import { useTranslation } from "next-i18next";

import Link from "next/link";
import Language from "@/components/common/language/Language";

import styles from "./Subnav.module.scss";

const Subnav = ({ toggle }) => {
	const { t } = useTranslation("header");

	return (
		<div className={styles.wrapper}>
			<Language toggle={toggle}/>
			<Link
				href="#contacts"
				className={styles.contact}
				scroll={false}
				onClick={toggle}
			>
				{t("contacts")}
			</Link>
		</div>
	);
};

export default Subnav;
