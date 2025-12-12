import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function TermsAndConditions() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Terms & Conditions"} text={"Terms & Conditions"} />
						<section className="tj-service-details-section section-gap section-gap-x">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="service-details-content">
											<div className="service-details-text">
												<div className="service-content-text">
													<p>
														First Global ("we," "us," or "our") provides the website FirstGlobal.io (the "Site") for
														informational and recruitment purposes. By accessing or using this Site, you agree to comply
														with and be bound by these Terms and Conditions ("Terms").
													</p>
													<p style={{ fontWeight: "600", marginTop: "20px", marginBottom: "20px" }}>
														IF YOU DO NOT AGREE WITH THESE TERMS, PLEASE DO NOT ACCESS OR USE THIS
														SITE.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>1. Intellectual Property Rights</h3>
													<p>
														Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
														functionality, software, website designs, audio, video, text, photographs, and graphics on the
														Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein
														(the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright
														and trademark laws.
													</p>
													<p>
														You are granted a limited license to access and use the Site and to download or print a copy of
														any portion of the Content to which you have properly gained access solely for your personal,
														non-commercial use.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>2. User Representations</h3>
													<p>
														By using the Site, you represent and warrant that:
													</p>
													<ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
														<li>All registration information you submit (if applicable) will be true, accurate, current, and
															complete.</li>
														<li>You have the legal capacity and you agree to comply with these Terms.</li>
														<li>You will not access the Site through automated or non-human means, whether through a
															bot, script, or otherwise.</li>
														<li>You will not use the Site for any illegal or unauthorized purpose.</li>
													</ul>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>3. User Accounts and Security</h3>
													<p>
														If you register for an account (e.g., "Talent Login") or create a profile on the Site:
													</p>
													<ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
														<li>You are responsible for maintaining the confidentiality of your password and account
															details.</li>
														<li>You agree to accept responsibility for all activities that occur under your account.</li>
														<li>We reserve the right to remove, reclaim, or change a username you select if we
															determine, in our sole discretion, that such username is inappropriate, obscene, or
															otherwise objectionable.</li>
														<li>We reserve the right to disable any user account at any time if, in our opinion, you have
															failed to comply with any of the provisions of these Terms.</li>
													</ul>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>4. Prohibited Activities</h3>
													<p>
														You may not access or use the Site for any purpose other than that for which we make the Site
														available. Specifically, you agree not to:
													</p>
													<ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
														<li>Systematically retrieve data or other content from the Site to create or compile, directly
															or indirectly, a collection, compilation, database, or directory without written permission
															from us.</li>
														<li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
														<li>Engage in unauthorized framing of or linking to the Site.</li>
														<li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other
															material that interferes with any party's uninterrupted use and enjoyment of the Site.</li>
														<li>Use the Site to advertise or offer to sell goods and services.</li>
													</ul>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>5. No Professional Relationship</h3>
													<p>
														The information provided on this Site is for general informational purposes only. It does not
														constitute a binding offer to provide security or facility management services. A professional
														client-vendor relationship is only established upon the execution of a formal written agreement
														between you and First Global.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>6. Modifications and Interruptions</h3>
													<p>
														We reserve the right to change, modify, or remove the contents of the Site at any time or for any
														reason at our sole discretion without notice. We also reserve the right to modify or discontinue
														all or part of the Site without notice at any time. We will not be liable to you or any third party for
														any modification, price change, suspension, or discontinuance of the Site.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>7. Limitation of Liability</h3>
													<p>
														To the fullest extent permitted by law, in no event will First Global or our directors, employees, or
														agents be liable to you or any third party for any direct, indirect, consequential, exemplary,
														incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other
														damages arising from your use of the Site, even if we have been advised of the possibility of
														such damages.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>8. Indemnification</h3>
													<p>
														You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and
														all of our respective officers, agents, partners, and employees, from and against any loss,
														damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made
														by any third party due to or arising out of: (1) your use of the Site; (2) breach of these Terms; or
														(3) your violation of the rights of a third party, including but not limited to intellectual property
														rights.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>9. Governing Law</h3>
													<p>
														These Terms shall be governed by and defined following the laws of India. You irrevocably
														consent that the courts of Gurugram shall have exclusive jurisdiction to resolve any dispute
														which may arise in connection with these terms.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>10. Contact Us</h3>
													<p>
														In order to resolve a complaint regarding the Site or to receive further information regarding use
														of the Site, please contact us at:
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

