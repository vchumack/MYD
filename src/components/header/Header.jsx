import { useEffect, useState } from "react";
import { useMedia } from "@/shared/hooks/useMedia";
import { removeScroll } from "@/shared/functions/removeScroll";

import Logo from "../common/logo/Logo";
import Navbar from "./navbar/Navbar";
import Subnav from "./subnav/Subnav";
import Burger from "./burger/Burger";
import BurgerMenu from "./burgerMenu/BurgerMenu";

import styles from "./Header.module.scss";
import { toggler } from "@/shared/functions/toggler";

const Header = () => {
	const { isTablet, isDesktop } = useMedia();

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		removeScroll(isOpen);
	}, [isOpen]);

	const toggleBurger = () => {
		toggler(setIsOpen, isOpen);
	};

	return (
		<header className={styles.header}>
			<div className={`container ${styles.wrapper}`}>
				<Logo />
				{isTablet || isDesktop ? (
					<>
						<Navbar />
						<Subnav />
					</>
				) : (
					<>
						<Burger isOpen={isOpen} toggle={toggleBurger} />
						<BurgerMenu
							isOpen={isOpen}
							setIsOpen={setIsOpen}
							toggle={toggleBurger}
						/>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
