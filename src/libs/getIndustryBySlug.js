import industriesData from "@/../public/fakedata/industries.json";

const getIndustryBySlug = (slug) => {
	return industriesData.find((industry) => industry.slug === slug);
};

const getAllIndustries = () => {
	return industriesData;
};

export { getIndustryBySlug, getAllIndustries };
export default getIndustryBySlug;

