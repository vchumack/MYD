import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "@/components/hero/Hero";
import WhyUs from "@/components/whyUs/WhyUs";
import Portfolio from "@/components/portfolio/Portfolio";
import Price from "@/components/price/Price";
import Steps from "@/components/steps/Steps";
import Team from "@/components/team/Team";

import styles from "@/styles/Index.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>MYD</title>
				<meta
					name="description"
					content="Create unforgetable WebSite with us"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Hero />
				<WhyUs />
				<Portfolio />
				<Price />
				<Steps />
				<Team />
			</main>
		</>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"header",
				"hero",
				"modal",
				"portfolio",
				"price",
				"steps",
				"team",
				"whyUs",
				"footer",
			])),
		},
	};
}
