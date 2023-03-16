import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import Button from "../button/Button";
import RadioItem from "./radioItem/RadioItem";
import FormField from "./formField/FormField";

import { radioItems } from "@/data/radioItems";
import { formFields } from "@/data/formFields";

import styles from "./Form.module.scss";

const Form = ({ isShowRates = false, backgroundColor, padding }) => {
	const { t } = useTranslation("form");

	const stylesBg = {
		background: backgroundColor,
		padding: padding,
	};

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

			// console.log(radioItems);
			reset();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className={styles.form} style={stylesBg}>
			{isShowRates && (
				<ul className={`${styles.label} ${styles.radioList}`}>
					{radioItems.map((_, index) => (
						<RadioItem
							key={index}
							index={index}
							register={register}
						/>
					))}

					{errors?.rates && (
						<p className={styles.error}>
							{errors?.rates?.message || t("messageError")}
						</p>
					)}
				</ul>
			)}

			<div className={styles.labelContainer}>
				<FormField
					data={formFields.name}
					register={register}
					errors={errors}
				/>

				<FormField
					data={formFields.tel}
					register={register}
					errors={errors}
				/>
			</div>

			<FormField
				data={formFields.email}
				register={register}
				errors={errors}
			/>

			<FormField
				data={formFields.comment}
				register={register}
				errors={errors}
				textarea
			/>

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
				<div className={styles.btnBox}>
					<Button
						// className={styles.btnSubmit}
						onClick={handleSubmit(onSubmit)}
						type="button"
					>
						{t("btn")}
					</Button>
				</div>
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
