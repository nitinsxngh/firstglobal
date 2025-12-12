import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function PrivacyPolicy() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Privacy Policy"} text={"Privacy Policy"} />
						<section className="tj-service-details-section section-gap section-gap-x">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="service-details-content">
											<div className="service-details-text">
												<div className="service-content-text">
													<p>
														First Global ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
														explains how we collect, use, disclose, and safeguard your information when you visit our
														website FirstGlobal.io (the "Site") or engage with our services.
													</p>
													<p>
														Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
														please do not access the Site.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>1. Collection of Your Information</h3>
													<p>
														We may collect information about you in a variety of ways. The information we may collect on
														the Site includes:
													</p>
													<p>
														<strong>A. Personal Data</strong> Personally identifiable information, such as your name, shipping address,
														email address, and telephone number, that you voluntarily give to us when you register with the
														Site, submit a contact form, or choose to participate in various activities related to the Site.
													</p>
													<p>
														<strong>B. Employment and Recruitment Data</strong> If you access our "Talent Login" or apply for a position,
														we may collect specific information necessary for the recruitment process, including:
													</p>
													<ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
														<li>Resumes/CVs and employment history.</li>
														<li>Educational background and qualifications.</li>
														<li>Identification documents (as required by law).</li>
														<li>Login credentials (username and password) for your candidate profile.</li>
													</ul>
													<p>
														<strong>C. Derivative Data</strong> Information our servers automatically collect when you access the Site, such
														as your IP address, your browser type, your operating system, your access times, and the
														pages you have viewed directly before and after accessing the Site.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>2. Use of Your Information</h3>
													<p>
														Having accurate information about you permits us to provide you with a smooth, efficient, and
														customized experience. Specifically, we may use information collected about you via the Site to:
													</p>
													<ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
														<li><strong>Service Delivery:</strong> Create and manage your account, facilitate operational services, and
															respond to your inquiries.</li>
														<li><strong>Recruitment:</strong> Evaluate your candidacy for employment, conduct background checks
															(where permitted), and manage the hiring process.</li>
														<li><strong>Communication:</strong> Send you administrative information, such as updates to our terms,
															conditions, and policies, or regarding your account status.</li>
														<li><strong>Site Improvement:</strong> Compile anonymous statistical data and analysis for use internally to
															improve the layout and content of our website.</li>
														<li><strong>Security:</strong> Monitor and analyze usage and trends to improve your experience with the
															Site and to prevent fraudulent activity.</li>
													</ul>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>3. Disclosure of Your Information</h3>
													<p>
														We may share information we have collected about you in certain situations. Your information
														may be disclosed as follows:
													</p>
													<ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
														<li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
															necessary to respond to legal process, to investigate or remedy potential violations of
															our policies, or to protect the rights, property, and safety of others, we may share your
															information as permitted or required by any applicable law, rule, or regulation.</li>
														<li><strong>Service Providers:</strong> We may share your information with third-party vendors, service
															providers, contractors, or agents who perform services for us or on our behalf and
															require access to such information to do that work (e.g., data hosting, email delivery, and
															customer service).</li>
														<li><strong>Business Transfers:</strong> If we reorganize or sell all or a portion of our assets, undergo a
															merger, or are acquired by another entity, we may transfer your information to the
															successor entity.</li>
													</ul>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>4. Cookies and Tracking Technologies</h3>
													<p>
														We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site
														to help customize the Site and improve your experience. When you access the Site, your
														personal information is not collected through the use of tracking technology. You are free to
														decline cookies if your browser permits, although doing so may interfere with your use of the
														Site.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>5. Data Security</h3>
													<p>
														We use administrative, technical, and physical security measures to help protect your personal
														information. While we have taken reasonable steps to secure the personal information you
														provide to us, please be aware that despite our efforts, no security measures are perfect or
														impenetrable, and no method of data transmission can be guaranteed against any interception
														or other type of misuse.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>6. Policy for Children</h3>
													<p>
														We do not knowingly solicit information from or market to children under the age of 18. If we
														learn that we have collected information from a child under age 18 without verification of
														parental consent, we will delete that information as quickly as possible.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>7. Your Data Rights</h3>
													<p>
														Depending on your location, you may have the following rights regarding your personal data:
													</p>
													<ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
														<li><strong>Access and Correction:</strong> You may request access to or correction of the personal data
															we hold about you.</li>
														<li><strong>Deletion:</strong> You may request that we delete your personal data, subject to certain legal
															exceptions.</li>
														<li><strong>Opt-Out:</strong> You may opt out of receiving marketing communications from us by following
															the unsubscribe link in the emails.</li>
													</ul>
													<p>
														To exercise these rights, please contact us using the information provided below.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>8. Changes to This Privacy Policy</h3>
													<p>
														We may update this Privacy Policy from time to time in order to reflect, for example, changes to
														our practices or for other operational, legal, or regulatory reasons. We will alert you about any
														changes by updating the "Last Updated" date of this Privacy Policy.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>9. Contact Us</h3>
													<p>
														If you have questions or comments about this Privacy Policy, please contact us at:
													</p>
													<p>
														Rider House, 6th Floor, Plot No. 136, Sector 44, Gurugram, Haryana - 122003
													</p>
													<p>
														P: +91-11-26495662<br />
														M: info@firstglobal.io
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

