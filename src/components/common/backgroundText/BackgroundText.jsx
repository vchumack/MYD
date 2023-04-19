import localFont from "next/font/local";

import styles from "./BackgroundText.module.scss";

const ermilov = localFont({
	src: "../../../../public/fonts/ermilov-bold.otf",
});

const BackgroundText = ({ text }) => {
	return <p className={`${styles.bgText} ${ermilov.className}`}>{text}</p>;
};

export default BackgroundText;
