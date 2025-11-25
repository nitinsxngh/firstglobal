import { Mona_Sans } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/bexon-icons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./globals.css";

const monaSans = Mona_Sans({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	title: "Firstglobal.io - Security Services Provider",
	description: "Firstglobal.io is committed to the safety of people and property, providing scenario-based and client-focused security services. Fully compliant & certified service provider with 100+ clients from 16+ industries.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body className={`${monaSans.variable}`}>{children}</body>
		</html>
	);
}
