import { useTranslation } from "next-i18next";
import { useState } from "react";
import localFont from "next/font/local";

import Title from "@/components/common/title/Title";
import Form from "@/components/common/form/Form";
import Modal from "@/components/common/modal/Modal";
import Rate from "./rate/Rate";

import { prices } from "@/data/price";

import styles from "./Price.module.scss";

const ermilov = localFont({
	src: "../../../public/fonts/ermilov-bold.otf",
});

const Price = () => {
	const [isShowModal, setIsShowModal] = useState(false);

	const { t } = useTranslation("price");

	return (
		<div className={`section ${styles.section}`}>
			<div className="container">
				<Title title={t("title")} />
				<ul className={styles.boxList}>
					{prices.map((item, i) => (
						<Rate
							key={i}
							idx={i}
							{...item}
							design={t(`cards.design.${item.design}`)}
							setIsShowModal={setIsShowModal}
						/>
					))}
				</ul>
				<div className={styles.noteBox}>
					<p className={styles.note}>{t("note")}</p>
					<p className={styles.note2}>{t("note2")}</p>
				</div>
			</div>

			{isShowModal && (
				<Modal
					isShowModal={isShowModal}
					close={() => setIsShowModal(false)}
				>
					<h2 className={`${styles.titleModal} ${ermilov.className}`}>
						{t("titleModal")}
					</h2>
					<p className={styles.enum}>{t("enum")}</p>
					<Form isShowRates backgroundColor="transparent" />
				</Modal>
			)}
		</div>
	);
};

export default Price;
