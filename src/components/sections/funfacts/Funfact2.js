"use client";

const Funfact2 = () => {
	const footprint = [
		{
			title: "45,000+",
			subtitle: "Workforce",
		},
		{
			title: "13,000+",
			subtitle: "Armed Guards",
		},
		{
			title: "31,000+",
			subtitle: "Unarmed Guards",
		},
		{
			title: "650+",
			subtitle: "Back-Office Staff",
		},
		{
			title: "52+",
			subtitle: "Training Centres",
		},
		{
			title: "25+",
			subtitle: "States Coverage",
		},
		{
			title: "8",
			subtitle: "Regional Offices",
		},
		{
			title: "47",
			subtitle: "Branch Offices",
		},
	];

	return (
		<section className="tj-funfact-section section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Reach
							</span>
							<h2 className="sec-title text-anim">
								Our <span>Footprint.</span>
							</h2>
							<p
								style={{
									marginTop: "20px",
									fontSize: "16px",
									lineHeight: "1.8",
									color: "#666",
									maxWidth: "700px",
									margin: "20px auto 40px",
								}}
							>
								With operations spanning India, UAE, and Finland, we maintain a strong presence across multiple states and regions, ensuring reliable service delivery wherever you need us.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{footprint.map((item, index) => (
						<div
							key={index}
							className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
							data-wow-delay={`${0.1 * (index + 1)}s`}
						>
							<div className="funfact-item style-2 text-center">
								<h3 className="funfact-number">
									<span className="tj-counter">{item.title}</span>
								</h3>
								<p className="funfact-title">{item.subtitle}</p>
							</div>
						</div>
					))}
					<div
						className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
						data-wow-delay=".9s"
					>
						<div className="funfact-item style-2 text-center">
							<h3 className="funfact-number">
								<span>UAE & Finland</span>
							</h3>
							<p className="funfact-title">International Operations</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact2;
