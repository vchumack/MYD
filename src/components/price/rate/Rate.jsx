import { useTranslation } from "next-i18next";
import styles from "./Rate.module.scss";
import Button from "@/components/common/button/Button";
// import Button from "@/components/common/button/Button";

const Rate = ({ description, bonus, idx, setIsShowModal }) => {
	const { t } = useTranslation("price");

	return (
		<li className={styles.boxItem}>
			<div className={styles.boxInfo}>
				<h3>{t(`cards.title.${idx + 1}`)}</h3>

				<ul className={styles.servicesList}>
					{description.map((_, index) => (
						<li key={index}>
							<span className={styles.span}>&#62; </span>
							{t(`cards.list.${idx + 1}.${index + 1}`)}
						</li>
					))}
				</ul>
				<p className={styles.bonus}>
					{bonus && t(`cards.bonus.${idx + 1}`)}
				</p>
			</div>
			<div>
				<p className={styles.price}>{t(`cards.price.${idx + 1}`)}</p>
				<p className={styles.design}>{t(`cards.design.${idx + 1}`)}</p>

				<Button onClick={() => setIsShowModal(true)} visualType="card">
					{t("btn")}
				</Button>
			</div>
		</li>
	);
};

export default Rate;
