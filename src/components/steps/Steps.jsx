import { useTranslation } from "next-i18next";
import Title from "../common/title/Title";

import styles from "./Steps.module.scss";

const Steps = () => {
	const { t } = useTranslation("steps");

	return (
		<div className="section">
			<div className="container">
				<Title title={t("title")} />
				<div className={styles.grid}>
					<p className={`${styles.textLeft} ${styles.text1}`}>
						{t("step1")}
					</p>
					<div className={styles.skip1}></div>
					<div className={styles.skip2}></div>
					<p className={`${styles.textRight} ${styles.text3}`}>
						{t("step2")}
					</p>
					<p className={`${styles.textLeft} ${styles.text2}`}>
						{t("step3")}
					</p>
					<div className={styles.skip3}></div>
					<div className={styles.skip4}></div>

					<p className={`${styles.textRight} ${styles.text4}`}>
						{t("step4")}
					</p>
					<div className={styles.line}></div>
					<p className={styles.textAdditional}>*{t("note")}</p>
				</div>
			</div>
		</div>
	);

	/* версия с флексами */

	// return (
	// 	<div className="section">
	// 		<div className="container">
	// 			<Title title={t("title")} />

	// 			<div className={styles.box}>
	// 				<div className={styles.boxLeft}>
	// 					<p>
	// 						Обговорення технічного завдання, укладання договору
	// 						та передоплата
	// 					</p>
	// 				</div>
	// 				<div
	// 					className={`${styles.boxRight} ${styles.boxRightPosition}`}
	// 				>
	// 					<p>Створення та затвердження дизайну</p>
	// 					{/* <div className={styles.box2}></div>
	// 					<div className={styles.box3}></div> */}
	// 				</div>
	// 				<div
	// 					className={`${styles.boxLeft} ${styles.boxLeftPosition}`}
	// 				>
	// 					<p>Розробка сайту</p>
	// 				</div>
	// 				<div className={styles.boxRight}>
	// 					<p className={styles.lastText}>
	// 						Схвалення клієнта на розміщення сайту в інтернеті
	// 						<span>
	// 							*За необхідності додаткові правки на будь-якому
	// 							етапі
	// 						</span>
	// 					</p>
	// 				</div>
	// 				<div className={styles.line}></div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};

export default Steps;
