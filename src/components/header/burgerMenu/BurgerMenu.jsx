import Logo from "@/components/common/logo/Logo";
import Burger from "../burger/Burger";
import Navbar from "../navbar/Navbar";
import Subnav from "../subnav/Subnav";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ isOpen, toggle }) => {
	return (
		<div className={isOpen ? styles.open : styles.closed}>
			<div className="section">
				<div className="container">
					<div className={styles.main}>
						<Logo toggle={toggle} />
						<Burger isOpen={isOpen} toggle={toggle} />
					</div>
					<Navbar toggle={toggle} />
					<Subnav toggle={toggle} />
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
