import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Strong Management Team",
			desc: "Diverse leadership with international exposure, driving innovation and excellence across all operations.",
			icon: "tji-team",
		},
		{
			title: "Business Continuity Infrastructure",
			desc: "Backup centers, zero debt operations, and surplus manpower ensure seamless service delivery and reliability.",
			icon: "tji-innovative",
		},
		{
			title: "Presence, Expertise & Experience",
			desc: "Operating in all A, B, C cities with a strong hierarchy structure and 25+ states presence across India.",
			icon: "tji-worldwide",
		},
		{
			title: "Quality Processes",
			desc: "52+ training centers, dedicated background verification, state-of-the-art technology, and ISO 9001:2008 certified.",
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
											Why First Global? Key <span>Differentiators.</span>
										</h2>
										<p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.8", color: "#666", maxWidth: "600px" }}>
											With over 45,000+ employees, 52+ training centers, and operations across 25+ states, we deliver comprehensive security and facility management solutions backed by proven expertise and quality processes.
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
