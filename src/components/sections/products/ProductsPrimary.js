"use client";
import getAllProducts from "@/libs/getAllProducts";
import ProductCard from "@/components/shared/cards/ProductCard";

const ProductsPrimary = () => {
	const products = getAllProducts();

	return (
		<section className="tj-service-section service-4 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Products
							</span>
							<h2 className="sec-title text-anim">
								Innovative Security Solutions <span>for Your Business</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{products?.map((product, idx) => (
						<div key={idx} className="col-lg-6 col-md-6">
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsPrimary;

