"use client";

import getBrands from "@/libs/getBrands";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider2 = () => {
	const brands = getBrands();
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={0}
			freeMode={true}
			centeredSlides={true}
			loop={true}
			speed={5000}
			allowTouchMove={false}
			autoplay={{
				delay: 1,
				disableOnInteraction: true,
			}}
			className="client-slider client-slider-2"
			modules={[Autoplay]}
		>
			{brands?.length
				? brands?.map(({ img2 }, idx) => (
						<SwiperSlide key={idx} className="client-item">
							<div className="client-logo">
								<img
									src={img2 ? img2 : "/images/brands/brand-1-light.webp"}
									alt="Brand"
								/>
							</div>
						</SwiperSlide>
				  ))
				: ""}
		</Swiper>
	);
};

export default BrandSlider2;
