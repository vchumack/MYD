import { useTranslation } from "next-i18next";

import styles from "./FormField.module.scss";

const FormField = ({
	data: { name, type, options },
	register,
	errors,
	textarea = false,
}) => {
	const { required, minLength } = options;

	const { t } = useTranslation("form");

	if (options) {
		if (required?.message) {
			required.message = `${t(required.message)}`;
		}

		if (minLength?.message) {
			minLength.message = `${t(minLength.message)}`;
		}
	}

	const error = errors[name] && (
		<p className={styles.error}>
			{errors[name]?.message || t("messageError")}
		</p>
	);

	if (textarea) {
		return (
			<label className={styles.textareaContainer}>
				<textarea
					{...register(name, { ...options })}
					className={`${styles.input} ${styles.textarea}`}
					aria-label={t(name)}
					type={type}
					placeholder={t(name)}
				/>
				{error}
			</label>
		);
	} else {
		return (
			<label className={styles.label}>
				<input
					{...register(name, { ...options })}
					className={styles.input}
					type={type}
					aria-label={t(name)}
					placeholder={t(name)}
				/>
				{error}
			</label>
		);
	}
};

export default FormField;
