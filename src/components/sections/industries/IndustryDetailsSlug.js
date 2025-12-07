"use client";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";
import { getAllIndustries } from "@/libs/getIndustryBySlug";

const IndustryDetailsSlug = ({ industry, prevIndustry, nextIndustry }) => {
	const allIndustries = getAllIndustries();
	const sidebarItems = allIndustries?.slice(0, 6);
	const { title, content, image, description } = industry || {};

	return (
		<section className="tj-service-area section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src={image || "/images/service/service-details.webp"}
									alt={title || "Industry Image"}
									width={870}
									height={450}
									style={{ height: "auto", width: "100%" }}
								/>
							</div>
							<h2 className="title title-anim">{title}</h2>
							<div className="blog-text">
								{description && (
									<p
										className="wow fadeInUp"
										data-wow-delay=".3s"
										style={{
											fontSize: "18px",
											fontWeight: "500",
											color: "#333",
											marginBottom: "20px",
										}}
									>
										{description}
									</p>
								)}
								{content && (
									<div className="wow fadeInUp" data-wow-delay=".3s">
										{content.split("\n").map((para, index) => {
											if (para.trim()) {
												// Check if it's a bullet point
												if (para.trim().startsWith("•")) {
													return (
														<div
															key={index}
															style={{
																marginBottom: "12px",
																paddingLeft: "20px",
																position: "relative",
															}}
														>
															<span
																style={{
																	position: "absolute",
																	left: "0",
																	color: "#d3b038",
																	fontSize: "20px",
																	lineHeight: "1.5",
																}}
															>
																•
															</span>
															<span style={{ display: "block", paddingLeft: "10px" }}>
																{para.trim().substring(1).trim()}
															</span>
														</div>
													);
												}
												return (
													<p
														key={index}
														style={{
															marginBottom: "20px",
															lineHeight: "1.8",
														}}
													>
														{para.trim()}
													</p>
												);
											}
											return null;
										})}
									</div>
								)}
							</div>

							{/* Navigation */}
							<div className="service-navigation">
								<div className="row">
									{prevIndustry && (
										<div className="col-md-6">
											<Link
												href={`/industries/${prevIndustry.slug}`}
												className="service-nav-link service-nav-prev wow fadeInUp"
												data-wow-delay=".3s"
											>
												<span className="nav-label">Previous Industry</span>
												<h6 className="nav-title">{prevIndustry.title}</h6>
											</Link>
										</div>
									)}
									{nextIndustry && (
										<div
											className={`col-md-6 ${!prevIndustry ? "offset-md-6" : ""}`}
										>
											<Link
												href={`/industries/${nextIndustry.slug}`}
												className="service-nav-link service-nav-next wow fadeInUp text-end"
												data-wow-delay=".3s"
											>
												<span className="nav-label">Next Industry</span>
												<h6 className="nav-title">{nextIndustry.title}</h6>
											</Link>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BootstrapWrapper>
							<CtaSidebar />
							<div className="service-sidebar">
								<div className="sidebar-widget">
									<h4 className="widget-title">All Industries</h4>
									<ul className="service-list">
										{sidebarItems?.map((item) => (
											<li key={item.id}>
												<Link
													href={`/industries/${item.slug}`}
													className={
														item.slug === industry.slug ? "active" : ""
													}
												>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
			<style jsx>{`
				.service-nav-link {
					display: block;
					padding: 20px;
					background: #f8f9fa;
					border-radius: 8px;
					text-decoration: none;
					color: #333;
					transition: all 0.3s ease;
					margin-top: 40px;
				}
				.service-nav-link:hover {
					background: #e9ecef;
					color: #d3b038;
				}
				.nav-label {
					display: block;
					font-size: 12px;
					color: #666;
					text-transform: uppercase;
					letter-spacing: 1px;
					margin-bottom: 8px;
				}
				.nav-title {
					font-size: 16px;
					font-weight: 600;
					margin: 0;
				}
				.service-list {
					list-style: none;
					padding: 0;
					margin: 0;
				}
				.service-list li {
					margin-bottom: 10px;
				}
				.service-list a {
					display: block;
					padding: 12px 16px;
					background: #f8f9fa;
					border-radius: 4px;
					text-decoration: none;
					color: #333;
					transition: all 0.3s ease;
				}
				.service-list a:hover,
				.service-list a.active {
					background: #d3b038;
					color: #fff;
				}
				.widget-title {
					font-size: 20px;
					font-weight: 600;
					margin-bottom: 20px;
					color: #1a1a1a;
				}
			`}</style>
		</section>
	);
};

export default IndustryDetailsSlug;

