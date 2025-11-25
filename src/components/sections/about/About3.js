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
									<i className="tji-box"></i>About First Global Services
								</span>
								<h2 className="sec-title title-anim">
									{type === 2 ? (
										<>
											Leading Security & Facility Management Solutions <span>Across India & Beyond.</span>
										</>
									) : (
										"Leading Security & Facility Management Solutions Across India & Beyond."
									)}
								</h2>
								<p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.8", color: "#666" }}>
									First Global Services Pvt. Ltd. (formerly Orion Security Solutions Pvt. Ltd.) is the flagship & holding company of ORION Group. With an annual revenue of <strong>INR 700+ Cr</strong>, we have established a strong presence across <strong>25+ states in India</strong> with <strong>8 regional offices</strong> and <strong>47 branch offices</strong>. Our international operations span UAE and Finland (since 2016).
								</p>
							</div>
						</div>
						<div className="about-bottom-area">
							<div
								className="mission-vision-box wow fadeInLeft"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Workforce</h4>
								<p className="desc">
									We employ <strong>45,000+ people</strong> including <strong>650+ back-office employees</strong>, <strong>13,000+ armed guards</strong>, and <strong>31,000+ unarmed guards</strong>. Our team comprises <strong>30% Ex-Army</strong> and <strong>70% Civilian</strong> personnel.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>650+ Back-Office Employees
									</li>
									<li>
										<i className="tji-list"></i>13,000+ Armed Guards
									</li>
									<li>
										<i className="tji-list"></i>31,000+ Unarmed Guards
									</li>
								</ul>
							</div>
							<div
								className="mission-vision-box wow fadeInRight"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Goal</h4>
								<p className="desc">
									To be valued at <strong>INR 3000 Cr by 2029</strong>. We operate with <strong>zero debt</strong> and maintain <strong>surplus manpower</strong> for business continuity.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>INR 3000 Cr Valuation by 2029
									</li>
									<li>
										<i className="tji-list"></i>Zero Debt Operations
									</li>
									<li>
										<i className="tji-list"></i>ISO 9001:2008 Certified
									</li>
								</ul>
							</div>
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
