import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
const About3 = ({ type }) => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className="about-img-area style-2 wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed=".8"
									src="/images/about/about-5.webp"
									alt=""
									width={591}
									height={639}
								/>
							</div>
							<div className={`box-area ${type === 2 ? "style-2" : ""}`}>
								<div className="progress-box wow fadeInUp" data-wow-delay=".3s">
									<h4 className="title">Business Progress</h4>
									<ul className="tj-progress-list">
										<li>
											<h6 className="tj-progress-title">Revenue</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">82%</span>
												<div
													className="tj-progress-bar"
													data-percent="82"
												></div>
											</div>
										</li>
										<li>
											<h6 className="tj-progress-title">Satisfaction</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">90%</span>
												<div
													className="tj-progress-bar"
													data-percent="90"
												></div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div className="about-content-area">
							<div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Who We Are
								</span>
								<h2 className="sec-title title-anim">
									{type === 2 ? (
										<>
											India's Largest Integrated Security & Facility <span>Management Partner.</span>
										</>
									) : (
										"India's Largest Integrated Security & Facility Management Partner."
									)}
								</h2>
								<p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.8", color: "#666" }}>
									First Global is one of India's largest integrated security and facility management partner, trusted by leading organizations across industries. With a workforce of <strong>45,000+ trained professionals</strong>, <strong>52+ training centers</strong>, and presence across <strong>25+ states</strong>, we deliver consistent, reliable, and on-ground operational excellence every day.
								</p>
							</div>
						</div>
						<div className="about-bottom-area">
							<div
								className="mission-vision-box wow fadeInLeft"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Purpose</h4>
								<p className="desc">
									To build dependable, safe, and well-managed environments that help businesses operate smoothly and confidently - every single day.
								</p>
							</div>
							<div
								className="mission-vision-box wow fadeInRight"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Ambition</h4>
								<p className="desc">
									To scale First Global to a valuation of <strong>INR 3000 Cr by 2029</strong>, powered by zero-debt operations, continuous training, technology-led monitoring, and a strong pan-India workforce.
								</p>
							</div>
						</div>
						<div className="about-promise-area wow fadeInUp" data-wow-delay=".7s" style={{ marginTop: "30px" }}>
							<h4 className="title">Our Promise</h4>
							<p className="desc" style={{ fontSize: "16px", lineHeight: "1.8", color: "#666" }}>
								We don't just deploy people - we create operational systems that work, stay reliable, and support your business without interruption.
							</p>
						</div>
						<div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
							<ButtonPrimary text={"Learn More About Us"} url={"/about"} />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default About3;
