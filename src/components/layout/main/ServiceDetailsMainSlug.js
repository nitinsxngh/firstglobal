import HeroInner from "@/components/sections/hero/HeroInner";
import ServiceDetailsSlug from "@/components/sections/services/ServiceDetailsSlug";
import { getAllServices } from "@/libs/getServiceBySlug";

const ServiceDetailsMainSlug = ({ service }) => {
	const allServices = getAllServices();
	const currentIndex = allServices.findIndex((s) => s.slug === service.slug);
	const prevService =
		currentIndex > 0 ? allServices[currentIndex - 1] : null;
	const nextService =
		currentIndex < allServices.length - 1
			? allServices[currentIndex + 1]
			: null;

	return (
		<div>
			<HeroInner
				title={service?.title || "Service Details"}
				text={service?.title || "Service Details"}
				breadcrums={[
					{ name: "Services", path: "/services" },
					{ name: service?.category || "Service", path: "#" },
				]}
			/>
			<ServiceDetailsSlug
				service={service}
				prevService={prevService}
				nextService={nextService}
			/>
		</div>
	);
};

export default ServiceDetailsMainSlug;

