import HeroInner from "@/components/sections/hero/HeroInner";
import IndustryDetailsSlug from "@/components/sections/industries/IndustryDetailsSlug";
import { getAllIndustries } from "@/libs/getIndustryBySlug";

const IndustryDetailsMain = ({ industry }) => {
	const allIndustries = getAllIndustries();
	const currentIndex = allIndustries.findIndex((i) => i.slug === industry.slug);
	const prevIndustry =
		currentIndex > 0 ? allIndustries[currentIndex - 1] : null;
	const nextIndustry =
		currentIndex < allIndustries.length - 1
			? allIndustries[currentIndex + 1]
			: null;

	return (
		<div>
			<HeroInner
				title={industry?.title || "Industry Details"}
				text={industry?.title || "Industry Details"}
				breadcrums={[
					{ name: "Industries", path: "/industries" },
					{ name: industry?.title || "Industry", path: "#" },
				]}
			/>
			<IndustryDetailsSlug
				industry={industry}
				prevIndustry={prevIndustry}
				nextIndustry={nextIndustry}
			/>
		</div>
	);
};

export default IndustryDetailsMain;

