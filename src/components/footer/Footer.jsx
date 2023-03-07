import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import Form from "../common/form/Form";
import Whatsup from "../../../public/img/icons/Whatsup.svg";
import Tg from "../../../public/img/icons/TG2.svg";
import Viber from "../../../public/img/icons/Viber.svg";
import Tel from "../../../public/img/icons/Tel.svg";
import Email from "../../../public/img/icons/Email.svg";
import Insta from "../../../public/img/icons/instagram.svg";

import Title from "../common/title/Title";

import styles from "./Footer.module.scss";

const Footer = () => {
	const { t } = useTranslation("footer");

	return (
		<footer className={`section ${styles.footer}`}>
			<div className={styles.ellipse}></div>
			<div className={`container ${styles.footerContainer}`}>
				<div className={`${styles.titleContainer}`}>
					<Title title={t("title")} />
				</div>
				<div className={styles.formContainer}>
					<Form />
				</div>
				<div className={`${styles.iconsContainer}`}>
					<Link href="/" target="_blank" rel="noopener norefferer">
						<Image src={Whatsup} alt="Whatsapp" />
					</Link>
					<Link href="/" target="_blank" rel="noopener norefferer">
						<Image src={Tg} alt="Telegram" />
					</Link>
					<Link href="/" target="_blank" rel="noopener norefferer">
						<Image src={Viber} alt="Viber" />
					</Link>

					<Link
						href="https://www.instagram.com/meetydev/"
						target="_blank"
						rel="noopener norefferer"
					>
						<Image src={Insta} alt="Instagram" />
					</Link>
					<Link href="/" target="_blank" rel="noopener norefferer">
						<Image src={Tel} alt="Telephone" />
					</Link>
					<Link href="/" target="_blank" rel="noopener norefferer">
						<Image src={Email} alt="Email" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
