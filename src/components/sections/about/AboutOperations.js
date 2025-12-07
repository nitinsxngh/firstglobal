"use client";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const AboutOperations = () => {
	const operations = [
		{
			title: "People Who Are Prepared",
			desc: "Teams trained in security, hygiene, customer handling, firefighting, and emergency response.",
			icon: "tji-team",
		},
		{
			title: "Processes That Maintain Order",
			desc: "Real-time reporting, audits, compliance checks, and site-specific SOP execution.",
			icon: "tji-innovative",
		},
		{
			title: "Technology That Adds Control",
			desc: "App-based incident reporting, QR-based patrolling, digital MIS systems, and centralized command center monitoring.",
			icon: "tji-worldwide",
		},
		{
			title: "Presence That Keeps Businesses Running",
			desc: "Through consistent manpower availability, structured teams, and fast deployment.",
			icon: "tji-award",
		},
	];

	return (
		<section className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Operational Excellence
							</span>
							<h2 className="sec-title title-anim">
								How We Deliver <span>Stronger Operations.</span>
							</h2>
							<p
								style={{
									marginTop: "20px",
									fontSize: "16px",
									lineHeight: "1.8",
									color: "#666",
									maxWidth: "700px",
									margin: "20px auto 0",
								}}
							>
								Our comprehensive approach combines trained people, proven processes, advanced technology, and strategic presence to ensure your operations run smoothly and securely.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap" style={{ marginTop: "50px" }}>
					{operations.map((operation, idx) => (
						<div key={idx} className="col-lg-3 col-md-6">
							<FeatureCard feature={operation} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutOperations;

