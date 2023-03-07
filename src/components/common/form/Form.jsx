import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";

import axios from "axios";

import styles from "./Form.module.scss";

const Form = () => {
	const { t } = useTranslation("footer");

	const {
		register,
		formState: { errors, isSubmitSuccessful, isSubmitting },
		handleSubmit,
		reset,
	} = useForm({
		mode: "all",
	});

	const onSubmit = async (data) => {
		// let message = `<i>Application from the website</i>\n`;
		// message += `<i>Sender's name:</i> <b>${data.name}</b>\n`;
		// message += `<i>Method of Communication:</i> <b>${data.method}</b>\n`;
		// message += `<i>Sender's Idea:</i> <b>${data.describe}</b>`;

		try {
			await axios.post(
				"https://sheet.best/api/sheets/fa25e0b1-b286-4206-a717-6aae8e6e9049",
				data
			);
			// await axios.post(
			// 	"https://api.telegram.org/bot6277992489:AAFgm4AvImhQxrkcyGBe5MAeOyd7_1uge8o/sendMessage",
			// 	{
			// 		chat_id: "-1001714004559",
			// 		parse_mode: "html",
			// 		text: message,
			// 	}
			// );
			console.log(data);
			reset();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className={styles.form}>
			<div className={styles.labelContainer}>
				<label className={styles.label}>
					<input
						{...register("name", {
							required: {
								value: true,
								message: `${t("messageRequired")}`,
							},
							minLength: {
								value: 3,
								message: `${t("messageMinLength")}`,
							},
						})}
						className={styles.input}
						type="text"
						aria-label={t("name")}
						placeholder={t("name")}
						// autoComplete
					/>

					{errors?.name && (
						<p className={styles.error}>
							{errors?.name?.message || t("messageError")}
						</p>
					)}
				</label>

				<label className={styles.label}>
					<input
						{...register("tel", {
							required: {
								value: true,
								message: `${t("messageRequired")}`,
							},
						})}
						className={styles.input}
						type="tel"
						aria-label={t("tel")}
						placeholder={t("tel")}
					/>

					{errors?.tel && (
						<p className={styles.error}>
							{errors?.tel?.message || t("messageError")}
						</p>
					)}
				</label>
			</div>

			<label className={styles.label}>
				<input
					{...register("email", {
						required: {
							value: true,
							message: `${t("messageRequired")}`,
						},
					})}
					className={styles.input}
					type="text"
					aria-label={t("email")}
					placeholder={t("email")}
				/>

				{errors?.email && (
					<p className={styles.error}>
						{errors?.email?.message || t("messageError")}
					</p>
				)}
			</label>

			<label className={styles.textareaContainer}>
				<textarea
					{...register("comment")}
					className={`${styles.input} ${styles.textarea}`}
					aria-label={t("comment")}
					type="text"
					placeholder={t("comment")}
				/>
				{errors?.comment && (
					<p className={styles.error}>
						{errors?.comment?.message || t("messageError")}
					</p>
				)}
			</label>

			{isSubmitting ? (
				<ThreeDots
					height="50"
					width="50"
					radius="9"
					color="#f6b529"
					ariaLabel="three-dots-loading"
					wrapperStyle={{}}
					wrapperClassName=""
					visible={true}
				/>
			) : (
				<button
					className={styles.btnSubmit}
					onClick={handleSubmit(onSubmit)}
					type="button"
				>
					{t("btn")}
				</button>
			)}

			{isSubmitSuccessful && (
				<div className={styles.successBox}>
					<p className={styles.successText}>{t("messageSuccess")}</p>
				</div>
			)}
		</form>
	);
};

export default Form;
