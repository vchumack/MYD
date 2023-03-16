import { useMedia } from "@/shared/hooks/useMedia";
import styles from "./Button.module.scss";

const typeButton = {
	fullWidth: styles.fullWidth,
	card: styles.card,
};

const Button = ({ children, visualType = "fullWidth", ...restProps }) => {
	const { isTablet, isDesktop } = useMedia();

	return (
		<button
			className={`${styles.btn} ${typeButton[visualType]}`}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default Button;
