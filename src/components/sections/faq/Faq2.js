import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const items = [
		{
			title: "What security and facility management services does First Global offer?",
			desc: "First Global offers comprehensive security services including Manned Guarding, Escort Guarding, Event Protection, Executive Security, and Security Training. We also provide Facility Management services such as Janitorial & Pantry Services, Washroom Hygiene & Pest Control, Electromechanical Services, and COVID Sanitization. Additionally, we offer Information Security solutions including Visitor Management, Surveillance, Parking Management, and Access Control, along with Skills & Training programs.",
			initActive: true,
		},
		{
			title: "What is First Global's operational presence across India?",
			desc: "First Global operates in 25+ states across India with 8 regional offices and 47 branch offices. Our headquarters is located in Gurugram, Haryana. We employ over 45,000+ people including 650+ back-office employees, 13,000+ armed guards, and 31,000+ unarmed guards, with 30% Ex-Army and 70% Civilian personnel.",
			initActive: false,
		},
		{
			title: "How does First Global ensure quality and compliance?",
			desc: "We maintain 100% compliance with state and central laws, ensure on-time PF & ESIC payments, and pay 100% wages online/bank transfer. We are ISO 9001:2008 certified and maintain all licenses including PSARA in all states. We have 52+ training centers across India and conduct regular compliance audits to ensure the highest standards.",
			initActive: false,
		},
		{
			title: "What is First Global's mobilization and transition process?",
			desc: "Our mobilization process includes four phases: Service contract issuance and site survey, Staff evaluation and recruitment, Physical endurance tests and background verification, and Training & SOP finalization. We ensure smooth transition with uniform issuance, deployment orders, and on-site refresher training before service commencement.",
			initActive: false,
		},
		{
			title: "What technology solutions does First Global provide?",
			desc: "We offer app-based real-time incident reporting with features including real-time operations monitoring, on-site visibility, instant updates, QR code based site information, MIS reports, compliance notifications, SOS/Panic alerts, activity pattern mapping, and a central command and control dashboard.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim">
										Need <span>Help?</span> Start Here...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									With 45,000+ employees, 52+ training centers, and operations across 25+ states, we deliver comprehensive security and facility management solutions backed by proven expertise and quality processes.
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Need Help? Start Here...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Get Started Free Call? </h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:+911126495662">
											<span>+91-11-26495662</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
