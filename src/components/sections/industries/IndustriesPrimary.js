"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import IndustryCard from "@/components/shared/cards/IndustryCard";
import { getAllIndustries } from "@/libs/getIndustryBySlug";
import Link from "next/link";

const IndustriesPrimary = () => {
	const industries = getAllIndustries();

	return (
		<section className="tj-service-section service-4 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Industries
							</span>
							<h2 className="sec-title text-anim">
								Serving Diverse Industries with <span>Tailored Solutions.</span>
							</h2>
							<p
								className="desc wow fadeInUp"
								data-wow-delay=".5s"
								style={{
									marginTop: "20px",
									fontSize: "16px",
									lineHeight: "1.8",
									color: "#666",
									maxWidth: "700px",
									margin: "20px auto 0",
								}}
							>
								We provide comprehensive security and facility management solutions
								customized for various industries, ensuring safety, efficiency, and
								operational excellence.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4" style={{ marginTop: "60px" }}>
					{industries?.map((industry, index) => (
						<div
							key={industry.id}
							className="col-lg-3 col-md-6 wow fadeInUp"
							data-wow-delay={`${0.1 * (index + 1)}s`}
						>
							<Link href={`/industries/${industry.slug}`}>
								<IndustryCard industry={industry} />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default IndustriesPrimary;

