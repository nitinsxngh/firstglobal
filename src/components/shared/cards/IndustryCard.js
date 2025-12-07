import Image from "next/image";

const IndustryCard = ({ industry }) => {
	const { title, description, image, slug } = industry || {};

	return (
		<div className="service-card-4">
			<div className="service-image">
				<Image
					src={image || "/images/service/service-1.webp"}
					alt={title || "Industry"}
					width={370}
					height={250}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="service-content">
				<h4 className="service-title">
					<a href={`/industries/${slug}`}>{title}</a>
				</h4>
				<p className="service-desc">{description}</p>
			</div>
		</div>
	);
};

export default IndustryCard;

