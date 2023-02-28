import { useTranslation } from "next-i18next";

import styles from "./Modal.module.scss";

const Modal = () => {
	const { t } = useTranslation("modal");

	return <div className="container">{t("title")}</div>;
};

export default Modal;
