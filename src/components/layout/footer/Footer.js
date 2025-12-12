import Link from "next/link";

const Footer = () => {
	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/first-global-logo-mjE721n2Z2tZnzLL - Edited.png" alt="Firstglobal.io Logo" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Developing personalze our customer journeys to increase
										satisfaction & loyalty of our expansion.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Services</h5>
								<ul>
									<li>
										<Link href="/services">Security Services</Link>
									</li>
									<li>
										<Link href="/services">Facility Management</Link>
									</li>
									<li>
										<Link href="/services">Information Security</Link>
									</li>
									<li>
										<Link href="/services">Skills & Training</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Resources</h5>
								<ul>
									<li>
										<Link href="/contact">Contact us</Link>
									</li>
									{/* <li>
										<Link href="/team">Team Member</Link>
									</li> */}
									<li>
										<Link href="#">Feedback</Link>
									</li>
									<li>
										<Link href="/privacy-policy">Privacy Policy</Link>
									</li>
									<li>
										<Link href="/terms-and-conditions">Terms & Condition</Link>
									</li>
									<li>
										<Link href="/disclaimer">Disclaimer</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-contact wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title" style={{ color: "var(--tj-color-common-white)" }}>Our Office</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span style={{ color: "var(--tj-color-text-body-2)" }}>Rider House, 6th Floor, Plot No. 136, Sector 44, Gurugram, Haryana - 122003</span>
									</div>
									<div className="contact-item">
										<Link href="tel:+911126495662" style={{ color: "var(--tj-color-common-white)", fontWeight: "600", display: "inline-block", marginBottom: "3px" }}>P: +91-11-26495662</Link>
										{" "}
										<Link href="mailto:info@firstglobal.io" style={{ color: "var(--tj-color-common-white)", fontWeight: "600", display: "inline-block", marginBottom: "3px" }}>
											M: info@firstglobal.io
										</Link>
									</div>
									<div className="contact-item">
										<span style={{ color: "var(--tj-color-text-body-2)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
											<i className="tji-clock" style={{ fontSize: "20px", color: "var(--tj-color-theme-primary)" }}></i> Mon-Fri 10am-10pm
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="tel:+911126495662">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+91-11-26495662</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@firstglobal.io">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@firstglobal.io</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text">
									<p>
										&copy; 2025 
										<Link
											href="https://themeforest.net/user/theme-junction/portfolio"
											target="_blank"
										>
											Firstglobal.io
										</Link>{" "}
										All right reserved
									</p>
								</div>
							</div>
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
		</footer>
	);
};

export default Footer;
