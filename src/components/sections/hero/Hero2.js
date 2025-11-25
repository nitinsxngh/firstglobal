"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero2 = () => {
	const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				console.log("Video autoplay prevented:", error);
			});
		}
	}, []);
	const heroSlides = [
		{
			subtitle: "Fully Compliant & Certified Service Provider",
			title: (
				<>
					Protecting People and <span>Property.</span>
				</>
			),
			desc: "Providing scenario-based and client-focused security services.",
			img: "/images/hero/slider-1.webp",
			thumbImg: "/images/hero/slider-thumb-1.webp",
		},
		{
			subtitle: "100+ Clients from 16+ Industries",
			title: (
				<>
					Trusted Security Solutions <span>Provider.</span>
				</>
			),
			desc: "Combining experience, skills, and advanced technology to address complex security needs.",
			img: "/images/hero/slider-2.webp",
			thumbImg: "/images/hero/slider-thumb-2.webp",
		},
		{
			subtitle: "30,000+ Staff Members | 47+ Training Centers",
			title: (
				<>
					Ethics, Integrity, and <span>Excellence.</span>
				</>
			),
			desc: "Emphasizing ethics, integrity, and excellence in service.",
			img: "/images/hero/slider-3.webp",
			thumbImg: "/images/hero/slider-thumb-3.webp",
		},
	];
	return (
		<section className="tj-slider-section" style={{ position: "relative", overflow: "hidden", minHeight: "92.5vh", backgroundColor: "#f8f9fa" }}>
			<style dangerouslySetInnerHTML={{
				__html: `
					.tj-slider-item::after {
						background: linear-gradient(
							90deg,
							rgba(255, 255, 255, 1) 20%,
							rgba(255, 255, 255, 0.4) 60%,
							rgba(255, 255, 255, 0) 100%
						) !important;
					}
					.slider-title {
						font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, "Segoe UI", Roboto, sans-serif !important;
						letter-spacing: -0.5px !important;
					}
					.slider-title span {
						color: #1a1a1a !important;
					}
					.slider-desc {
						font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, "Segoe UI", Roboto, sans-serif !important;
						font-size: 16px !important;
						letter-spacing: 0.2px !important;
						line-height: 1.5 !important;
					}
					.hero-navigation .slider-prev:hover,
					.hero-navigation .slider-next:hover {
						border-color: #1a1a1a !important;
						background-color: #1a1a1a !important;
					}
					.hero-navigation .slider-prev:hover .anim-icon i,
					.hero-navigation .slider-next:hover .anim-icon i {
						color: #ffffff !important;
					}
				`
			}} />
			{/* Video Background */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: "100%",
					height: "100%",
					zIndex: 0,
					overflow: "hidden",
				}}
			>
				<video
					ref={videoRef}
					autoPlay
					loop
					muted
					playsInline
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						minHeight: "100%",
						objectFit: "cover",
						objectPosition: "center center",
					}}
				>
					<source src="/video/Firstglobal.io-poster.mp4" type="video/mp4" />
				</video>
				{/* Linear gradient overlay - solid on left, transparent on right */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0) 100%)",
						zIndex: 1,
					}}
				></div>
			</div>
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				effect="fade"
				speed={1400}
				autoplay={{ delay: 5000 }}
				modules={[Autoplay, Navigation, EffectFade, Thumbs]}
				thumbs={{ swiper: controlledMainSwiper }}
				navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
				className="hero-slider"
				style={{ position: "relative", zIndex: 2, backgroundColor: "transparent" }}
			>
				{heroSlides.map(({ img, title, desc }, idx) => (
					<SwiperSlide key={idx} className="tj-slider-item" style={{ backgroundColor: "transparent" }}>
						<div className="container">
							<div className="slider-wrapper">
								<div className="slider-content">
									<h1 className="slider-title" style={{ color: "#1a1a1a" }}>{title}</h1>
									<div className="slider-desc" style={{ color: "#4a4a4a" }}>{desc}</div>
									<div className="slider-btn">
										<ButtonPrimary text={"Get Started"} url={"/contact"} className="get-started-btn" />
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				<div
					className="hero-navigation d-inline-flex wow fadeIn"
					data-wow-delay="1.5s"
					style={{ position: "relative", zIndex: 2 }}
				>
					<div className="slider-prev" role="button" style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}>
						<span className="anim-icon">
							<i className="tji-arrow-left" style={{ color: "#1a1a1a" }}></i>
							<i className="tji-arrow-left" style={{ color: "#1a1a1a" }}></i>
						</span>
					</div>
					<div className="slider-next" role="button" style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}>
						<span className="anim-icon">
							<i className="tji-arrow-right" style={{ color: "#1a1a1a" }}></i>
							<i className="tji-arrow-right" style={{ color: "#1a1a1a" }}></i>
						</span>
					</div>
				</div>
			</Swiper>
			<Swiper
				onSwiper={setControlledMainSwiper} // capture thumbs swiper
				slidesPerView={3}
				spaceBetween={15}
				loop={false}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[Thumbs]}
				className="hero-thumb wow fadeIn"
				data-wow-delay="2s"
				style={{ position: "relative", zIndex: 2 }}
			>
				{heroSlides.map(
					({ thumbImg = "/images/hero/slider-thumb-1.webp" }, idx) => (
						<SwiperSlide key={idx} className="thumb-item">
							<Image
								src={thumbImg}
								alt="images"
								width={80}
								height={80}
								style={{ height: "auto" }}
							/>
						</SwiperSlide>
					)
				)}
			</Swiper>

			<div
				className="circle-text-wrap wow fadeInUp"
				data-wow-delay="1s"
				style={{ position: "relative", zIndex: 2 }}
			>
				<span
					className="circle-text"
					style={{ backgroundImage: "url('/images/hero/circle-text.webp')" }}
				></span>
				<Link className="circle-icon" href="/services" style={{ color: "#1a1a1a" }}>
					<i className="tji-arrow-down-big"></i>
				</Link>
			</div>
		</section>
	);
};

export default Hero2;
