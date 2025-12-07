"use client";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";
import { getAllServices } from "@/libs/getServiceBySlug";

const ServiceDetailsSlug = ({ service, prevService, nextService }) => {
	const allServices = getAllServices();
	const sidebarItems = allServices?.slice(0, 6);
	const { title, content, image, category, description } = service || {};

	return (
		<section className="tj-service-area section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src={image || "/images/service/service-details.webp"}
									alt={title || "Service Image"}
									width={870}
									height={450}
									style={{ height: "auto", width: "100%" }}
								/>
							</div>
							<h2 className="title title-anim">{title}</h2>
							{category && (
								<div
									className="service-category wow fadeInUp"
									data-wow-delay=".2s"
									style={{
										marginBottom: "20px",
										padding: "8px 16px",
										background: "#f8f9fa",
										borderRadius: "4px",
										display: "inline-block",
										fontSize: "14px",
										color: "#666",
										fontWeight: "500",
									}}
								>
									{category}
								</div>
							)}
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
												return (
													<p key={index} style={{ marginBottom: "20px" }}>
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
									{prevService && (
										<div className="col-md-6">
											<Link
												href={`/services/${prevService.slug}`}
												className="service-nav-link service-nav-prev wow fadeInUp"
												data-wow-delay=".3s"
											>
												<span className="nav-label">Previous Service</span>
												<h6 className="nav-title">{prevService.title}</h6>
											</Link>
										</div>
									)}
									{nextService && (
										<div
											className={`col-md-6 ${!prevService ? "offset-md-6" : ""}`}
										>
											<Link
												href={`/services/${nextService.slug}`}
												className="service-nav-link service-nav-next wow fadeInUp text-end"
												data-wow-delay=".3s"
											>
												<span className="nav-label">Next Service</span>
												<h6 className="nav-title">{nextService.title}</h6>
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
									<h4 className="widget-title">All Services</h4>
									<ul className="service-list">
										{sidebarItems?.map((item) => (
											<li key={item.id}>
												<Link
													href={`/services/${item.slug}`}
													className={
														item.slug === service.slug ? "active" : ""
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

export default ServiceDetailsSlug;

