import { useTranslation } from "next-i18next";
import styles from "./RadioItem.module.scss";

const RadioItem = ({ index, item, register }) => {
	const { t } = useTranslation("form");

	return (
		<li>
			<label className={styles.radioLabel}>
				<input
					{...register("rates", {
						required: {
							value: true,
							message: `${t("messageRequired")}`,
						},
					})}
					className={styles.radioInput}
					type="radio"
					value={t(`variants.${index + 1}`)}
					// aria-label={t("name")}
				/>
				{/* {item} */}
				{t(`variants.${index + 1}`)}
			</label>
		</li>
	);
};

export default RadioItem;
