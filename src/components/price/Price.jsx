import { useTranslation } from "next-i18next";
import localFont from "next/font/local";
import Title from "@/components/common/title/Title";
import Button from "@/components/common/button/Button";
import Modal from "@/components/common/modal/Modal";

import { prices } from "@/data/price";
import { useState } from "react";

import styles from "./Price.module.scss";
import Form from "../common/form/Form";

const ermilov = localFont({
	src: "../../../public/fonts/ermilov-bold.otf",
});

const Price = () => {
	const [isShowModal, setIsShowModal] = useState(false);

	const { t } = useTranslation("price");

	function Rate({ description, bonus, idx }) {
		return (
			<li className={styles.boxItem}>
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
				<p className={styles.price}>{t(`cards.price.${idx + 1}`)}</p>
				<p className={styles.design}>{t(`cards.design.${idx + 1}`)}</p>

				<Button onClick={() => setIsShowModal(true)} visualType="card">
					{t("btn")}
				</Button>
			</li>
		);
	}

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
