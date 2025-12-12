import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ProductCard = ({ product }) => {
	const { title, description, image, slug } = product || {};

	return (
		<div className="service-item style-1 wow fadeInUp">
			<div className="service-img">
				<Image
					src={image || "/images/service/service-1.webp"}
					alt={title}
					width={870}
					height={450}
					style={{ height: "auto", width: "100%", borderRadius: "12px 12px 0 0" }}
				/>
			</div>
			<div className="service-icon">
				<i className="tji-service-1"></i>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={`/products/${slug}`}>{title}</Link>
				</h4>
				<p className="desc">{description}</p>
				<ButtonPrimary
					text={"Learn More"}
					url={`/products/${slug}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default ProductCard;

