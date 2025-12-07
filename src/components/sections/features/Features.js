import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Leadership With Real Depth",
			desc: "A diverse management team with national and international exposure drives consistency, discipline, and service innovation.",
			icon: "tji-team",
		},
		{
			title: "Scale That Ensures Stability",
			desc: "45,000+ workforce, 47 branch offices, surplus manpower, and zero-debt operations guarantee uninterrupted service delivery.",
			icon: "tji-innovative",
		},
		{
			title: "Nationwide Operational Reach",
			desc: "Presence across A, B, and C cities with structured hierarchy systems ensures instant mobilization and on-site responsiveness.",
			icon: "tji-worldwide",
		},
		{
			title: "Quality Processes That Don't Break",
			desc: "52+ training centers, dedicated verification teams, process-driven SOPs, and ISO 9001:2008 certified systems maintain uniform quality across all locations.",
			icon: "tji-award",
		},
	];

	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{type == 2 ? (
							<div className="sec-heading-wrap">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading">
								<h2 className="sec-title title-anim">
									What Makes First Global <span>Different.</span>
								</h2>
								<p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.8", color: "#666", maxWidth: "600px" }}>
									Our unique combination of leadership depth, operational scale, nationwide reach, and quality processes sets us apart as India's trusted security and facility management partner.
								</p>
									</div>
									<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text="Need Help? Start Here" url="/contact" />
									</div>
								</div>
							</div>
						) : (
							<div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Why First Global?
								</span>
								<h2 className="sec-title title-anim">
									Empowering Business with <span>Expertise.</span>
								</h2>
								<p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.8", color: "#666", maxWidth: "700px", margin: "20px auto 0" }}>
									With over 45,000+ employees, 52+ training centers, and operations across 25+ states, we deliver comprehensive security and facility management solutions backed by proven expertise and quality processes.
								</p>
							</div>
						)}
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className={type == 2 ? "col-lg-3 col-md-6" : "col-lg-4"}>
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
