import localFont from "next/font/local";

import styles from "./Title.module.scss";

const ermilov = localFont({
	src: "../../../../public/fonts/ermilov-bold-webfont.woff2",
});

const Title = ({ title }) => {
	return <h2 className={`${styles.title} ${ermilov.className}`}>{title}</h2>;
};

export default Title;
