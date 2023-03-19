import { useTranslation } from "next-i18next";
import Image from "next/image";
import Slider from "react-slick";
import Title from "../common/title/Title";

import { useMedia } from "@/shared/hooks/useMedia";
import { team } from "@/data/team";

import styles from "./Team.module.scss";
import Link from "next/link";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,

				display: "block",
				background: "none !important",
				color: "#f6b529",
				// fontSize: "2rem",
				// width: "50px",
				// height: "50px",
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
}

const Team = () => {
	const { t } = useTranslation("team");
	const { isTablet, isDesktop } = useMedia();

	const settings = {
		dots: true,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		infinite: true,
		speed: 500,
		slidesToShow: isDesktop ? 3 : isTablet ? 2 : 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className={`section ${styles.section}`}>
			<div className="container">
				<Title title={t("title")} />
				<Slider {...settings}>
					{team.map((item, idx) => (
						<div key={item.name} className={styles.teamItem}>
							<div className={styles.imgBox}>
								<Image
									src={item.img}
									alt={item.name}
									width="auto"
									height="auto"
								/>
							</div>
							<div className={styles.nameBox}>
								<p>{t(`cards.name.${idx + 1}`)} </p>
								<p className={styles.position}>
									<span>&gt;</span>{" "}
									{t(`cards.pos.${idx + 1}`)}
								</p>
							</div>
							<ul className={styles.socialBox}>
								{item.social.map(({ icon, href, alt }) => (
									<li key={href}>
										<Link href={href} target="_blank">
											<Image alt={alt} src={icon} />
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Team;
