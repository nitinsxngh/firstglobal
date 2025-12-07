import servicesData from "@/../public/fakedata/services-detailed.json";

const getServiceBySlug = (slug) => {
	return servicesData.find((service) => service.slug === slug);
};

const getAllServices = () => {
	return servicesData;
};

const getServicesByCategory = (category) => {
	return servicesData.filter((service) => service.category === category);
};

export { getServiceBySlug, getAllServices, getServicesByCategory };
export default getServiceBySlug;

