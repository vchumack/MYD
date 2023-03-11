import { useTranslation } from "next-i18next";
import Title from "../common/title/Title";
import { prices } from "@/data/price";

import styles from "./Price.module.scss";

const Price = () => {
	const { t } = useTranslation("price");

	function Rate({ name, description, bonus, price, design, idx }) {
		return (
			<div>
				<h3>{t(`cards.title.${idx + 1}`)}</h3>
				<ul>
					{description.map((item, index) => (
						<li key={index}>
							{t(`cards.list.${idx + 1}.${index + 1}`)}
						</li>
					))}
				</ul>
				<p>{bonus && t(`cards.bonus.${idx + 1}`)}</p>
				<p>{t(`cards.price.${idx + 1}`)}</p>
				<p>{t(`cards.design.${idx + 1}`)}</p>

				<button>{t("btn")}</button>
			</div>
		);
	}

	return (
		<div className="section">
			<div className="container">
				<Title title={t("title")} />
				<ul>
					{prices.map((item, i) => (
						<Rate
							key={i}
							idx={i}
							{...item}
							design={t(`cards.design.${item.design}`)}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Price;
