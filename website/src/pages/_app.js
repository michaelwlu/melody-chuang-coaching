import { Crimson_Text, Poppins } from "next/font/google";
import Head from "next/head";
import "../styles/tailwind.css";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-themeSans",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
});

const crimsonText = Crimson_Text({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-themeSerif",
	weight: ["400", "600", "700"],
	style: ["normal", "italic"],
});

function MyApp({ Component, pageProps }) {
	const title = "Melody Chuang Coaching";
	const description =
		"I help women rewire their brains and nervous systems to free themselves from the shackles of social conditioning and get the results they want in life.";
	const url = String(process.env.NEXT_PUBLIC_WEB_URL);

	return (
		<div
			className={`${poppins.variable} ${crimsonText.variable} font-themeSans`}
		>
			<Head>
				<link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={description} />

				<meta property="og:title" content={title} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={`${url}/meta.jpg`} />
				<meta property="og:url" content={url} />
				<meta property="og:description" content={description} />
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
