import { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ close, children }) => {
	useEffect(() => {
		document.body.classList.add("scroll-hidden");
		document.addEventListener("keydown", handleCloseEsc);

		return () => {
			document.body.classList.remove("scroll-hidden");
			document.removeEventListener("keydown", handleCloseEsc);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClickOverlay = (event) => {
		if (event.currentTarget === event.target) {
			close();
		}
	};

	const handleCloseEsc = (event) => {
		if (event.code === "Escape") {
			close();
		}
	};

	return (
		<div
			className={styles.overlay}
			onClick={(event) => handleClickOverlay(event)}
		>
			<div className={styles.modal}>
				<svg
					onClick={() => close()}
					height="200"
					viewBox="0 0 200 200"
					width="200"
				>
					<title />
					<path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
				</svg>
				{children}
			</div>
		</div>
	);
};

export default Modal;
