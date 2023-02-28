import Layout from "@/components/layout";
import { appWithTranslation } from "next-i18next";

import "@/styles/globals.scss";

function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default appWithTranslation(App);
