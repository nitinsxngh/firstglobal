import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Disclaimer() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Disclaimer"} text={"Disclaimer"} />
						<section className="tj-service-details-section section-gap section-gap-x">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="service-details-content">
											<div className="service-details-text">
												<div className="service-content-text">
													<h3 style={{ marginTop: "0", marginBottom: "20px", fontWeight: "600" }}>1. General Disclaimer</h3>
													<p>
														The information provided on this website is for general informational purposes only. While First
														Global ("the Company") endeavors to keep the information up to date and correct, we make no
														representations or warranties of any kind, express or implied, about the completeness,
														accuracy, reliability, suitability, or availability with respect to the website or the information,
														products, services, or related graphics contained on the website for any purpose. Any reliance
														you place on such information is therefore strictly at your own risk.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>2. No Professional Advice or Relationship</h3>
													<p>
														The content on this website is provided for general information only and does not constitute
														professional, legal, or financial advice. Accessing this website or communicating with the
														Company through this site does not create a client-vendor, professional, or confidential
														relationship. Users should not act upon any information provided on this website without
														seeking advice from a qualified professional relevant to their specific situation.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>3. Limitation of Liability</h3>
													<p>
														In no event will the Company, its affiliates, directors, employees, or agents be liable for any loss
														or damage including without limitation, direct, indirect, incidental, special, or consequential loss
														or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of,
														or in connection with, the use of this website. This limitation applies whether the alleged liability
														is based on contract, tort, negligence, strict liability, or any other basis.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>4. External Links</h3>
													<p>
														Through this website, you may be able to link to other websites which are not under the control
														of the Company. We have no control over the nature, content, and availability of those sites. The
														inclusion of any links does not necessarily imply a recommendation or endorse the views
														expressed within them. The Company is not responsible for any loss or damage that may arise
														from your use of them.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>5. Forward-Looking Statements</h3>
													<p>
														This website may contain forward-looking statements that involve risks and uncertainties. These
														statements are based on current expectations, estimates, and projections about the industry
														and markets in which the Company operates. These statements are not guarantees of future
														performance, and actual results may differ materially.
													</p>

													<h3 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }}>6. Copyright and Intellectual Property</h3>
													<p>
														All content included on this website, such as text, graphics, logos, images, and software, is the
														property of the Company or its content suppliers and is protected by applicable copyright and
														intellectual property laws. Unauthorized use or reproduction of any content from this website is
														strictly prohibited.
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

