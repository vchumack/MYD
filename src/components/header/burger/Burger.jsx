import styles from "./Burger.module.scss";

const Burger = ({ isOpen, toggle }) => {
	return (
		<div onClick={toggle} className={styles.wrapper}>
			<div className={isOpen ? styles.burgerClose : styles.burgerOpen} />
		</div>
	);
};

export default Burger;
