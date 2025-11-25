"use client";

const serviceCategories = [
	{
		title: "Security Services",
		icon: "tji-shield-check",
		description:
			"End-to-end protection programs for people, premises, events, and high-profile executives backed by trained guards and command-center monitoring.",
		services: [
			"Security Guard Services",
			"Manned & Escort Guarding",
			"Event & Executive Protection",
			"Railway Gate & Travel Security",
			"Security Training",
		],
	},
	{
		title: "Facility Management",
		icon: "tji-building",
		description:
			"Integrated facility management with soft and hard services that keep workplaces running efficiently and compliantly across India.",
		services: [
			"Facility & Electromechanical Management",
			"Janitorial & Pantry Services",
			"Washroom Hygiene & Pest Control",
			"Mechanized Housekeeping & Carpet Care",
			"COVID Sanitization & Customer Facilitation",
		],
	},
	{
		title: "Information Security",
		icon: "tji-lock",
		description:
			"Technology-led security operations combining physical and digital controls for modern campuses, plants, and smart cities.",
		services: [
			"Visitor & Vendor Management",
			"Surveillance & Perimeter Protection",
			"Parking & Smart Traffic Management",
			"Incident Response & Access Control",
			"Integrated Smart Command Centers",
		],
	},
	{
		title: "Skills & Training",
		icon: "tji-graduation-cap",
		description:
			"Learning programs delivered through 52+ training centres covering soft skills, grooming, compliance, and specialized security capabilities.",
		services: [
			"Skills & Corporate Training",
			"Soft Skills & Language Labs",
			"Grooming & Etiquette Sessions",
			"Greeting & Front-of-House Programs",
			"Book Keeping & Administrative Upskilling",
		],
	},
];

const ServicesPrimary = () => {
	return (
		<section className="tj-service-section service-4 section-gap">
			<div className="container">
				<div className="row row-gap-4">
					{serviceCategories.map((category, idx) => (
						<div
							key={category.title}
							className="col-lg-6 col-md-12 wow fadeInUp"
							data-wow-delay={`${0.1 * (idx + 1)}s`}
						>
							<div className="service-item style-4 service-category-card">
								<div className="service-icon">
									<i className={category.icon}></i>
								</div>
								<div className="service-content">
									<h4 className="title">{category.title}</h4>
									<p className="desc">{category.description}</p>
									<ul className="service-category-list">
										{category.services.map(service => (
											<li key={service}>
												<i className="tji-check-circle"></i> {service}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesPrimary;
