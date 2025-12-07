import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import IndustryDetailsMain from "@/components/layout/main/IndustryDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { getAllIndustries } from "@/libs/getIndustryBySlug";
import { notFound } from "next/navigation";

const industries = getAllIndustries();

export default async function IndustryDetails({ params }) {
	const { slug } = await params;

	const industry = industries?.find((i) => i.slug === slug);
	if (!industry) {
		notFound();
	}

	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<IndustryDetailsMain industry={industry} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

export async function generateStaticParams() {
	return industries?.map((industry) => ({ slug: industry.slug }));
}

