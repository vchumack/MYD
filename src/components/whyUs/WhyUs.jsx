import { useTranslation } from "next-i18next";
import { cards } from "@/data/whyUs";

import Title from "../common/title/Title";

import styles from "./WhyUs.module.scss";

const WhyUs = () => {
	const { t } = useTranslation("whyUs");

	return (
		<div className={`section ${styles.whyUs}`} id="why">
			<div className="container">
				<Title title={t("title")} />
				<ul className={styles.list}>
					{cards.map((card, idx) => (
						<li key={idx} className={styles.item}>
							<p className={styles.text}>{t(`cards.${card}`)}</p>
							<p className={styles.icon}>v</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default WhyUs;
