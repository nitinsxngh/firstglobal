import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ServiceDetailsMainSlug from "@/components/layout/main/ServiceDetailsMainSlug";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { getAllServices } from "@/libs/getServiceBySlug";
import { notFound } from "next/navigation";

const services = getAllServices();

export default async function ServiceDetails({ params }) {
	const { slug } = await params;

	const service = services?.find((s) => s.slug === slug);
	if (!service) {
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
						<ServiceDetailsMainSlug service={service} />
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
	return services?.map((service) => ({ slug: service.slug }));
}

