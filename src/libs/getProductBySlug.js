import products from "../../public/fakedata/products";

const getProductBySlug = (slug) => {
	return products.find((product) => product.slug === slug);
};

export default getProductBySlug;

