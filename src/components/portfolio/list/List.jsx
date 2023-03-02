import Image from "next/image";
import Slider from "react-slick";
import LearnMore from "@/components/common/learnMore/LearnMore";

import { useMedia } from "@/shared/hooks/useMedia";
import { useTranslation } from "next-i18next";
import { portfolio } from "@/data/portfolio";

import styles from "./List.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const List = () => {
	const { t } = useTranslation("portfolio");
	const { isTablet, isDesktop } = useMedia();

	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		rows: isDesktop ? 2 : 1,
		slidesPerRow: isTablet ? 2 : isDesktop ? 3 : 1,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{portfolio.map((item) => (
				<div key={item.name} className={styles.item}>
					<a href="#portfolio" className={styles.wrapper}>
						<Image
							src={item.img}
							alt={`${item.name} logo`}
							width="auto"
							height="auto"
							className={styles.logo}
						/>
					</a>
					<div className={styles.description}>
						<p className={styles.text}>
							{t(`cards.${item.description}`)}
						</p>
						<LearnMore href={item.href} />
					</div>
				</div>
			))}
		</Slider>
	);
};

export default List;
