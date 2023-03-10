import localFont from "next/font/local";

import styles from "./BackgroundText.module.scss";

const ermilov = localFont({
	src: "../../../../public/fonts/ermilov-bold.otf",
});

const BackgroundText = ({ text }) => {
	return (
		<div className={`${styles.bgText} ${ermilov.className}`}>{text}</div>
	);
};

export default BackgroundText;
