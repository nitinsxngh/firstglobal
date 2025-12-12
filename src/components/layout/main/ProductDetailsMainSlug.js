import HeroInner from "@/components/sections/hero/HeroInner";
import ProductDetailsSlug from "@/components/sections/products/ProductDetailsSlug";
import getAllProducts from "@/libs/getAllProducts";

const ProductDetailsMainSlug = ({ product }) => {
	const allProducts = getAllProducts();
	const currentIndex = allProducts.findIndex((p) => p.slug === product.slug);
	const prevProduct = currentIndex > 0 ? allProducts[currentIndex - 1] : null;
	const nextProduct =
		currentIndex < allProducts.length - 1
			? allProducts[currentIndex + 1]
			: null;

	return (
		<div>
			<HeroInner
				title={product.title}
				text={product.title}
				breadcrums={[{ name: "Products", path: "/products" }]}
			/>
			<ProductDetailsSlug
				product={product}
				allProducts={allProducts}
				prevProduct={prevProduct}
				nextProduct={nextProduct}
			/>
		</div>
	);
};

export default ProductDetailsMainSlug;

