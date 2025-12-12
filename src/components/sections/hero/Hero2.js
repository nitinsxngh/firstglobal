"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero2 = () => {
	const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	const videoRef = useRef(null);
	const mainSwiperRef = useRef(null);

	// Initialize video on mount
	useEffect(() => {
		if (videoRef.current && heroSlides[0]) {
			videoRef.current.src = heroSlides[0].video;
			videoRef.current.load();
			videoRef.current.play().catch((error) => {
				console.log("Video autoplay prevented:", error);
			});
		}
	}, []);

	// Update video when slide changes
	useEffect(() => {
		if (videoRef.current && heroSlides[activeSlideIndex]) {
			const newVideoSrc = heroSlides[activeSlideIndex].video;
			const currentSrc = videoRef.current.currentSrc || videoRef.current.src;
			if (!currentSrc.includes(newVideoSrc.split('/').pop())) {
				videoRef.current.src = newVideoSrc;
				videoRef.current.load();
				videoRef.current.play().catch((error) => {
					console.log("Video autoplay prevented:", error);
				});
			}
		}
	}, [activeSlideIndex]);

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
			thumbImg: "/hero/security.png",
			video: "/hero/security.mp4",
		},
		{
			subtitle: "Comprehensive Facility Management Solutions",
			title: (
				<>
					Maintaining Excellence in <span>Operations.</span>
				</>
			),
			desc: "Delivering integrated facility management services with precision and reliability.",
			img: "/images/hero/slider-2.webp",
			thumbImg: "/hero/maintainace.png",
			video: "/hero/management.mp4",
		},
		{
			subtitle: "Advanced Technology & Innovation",
			title: (
				<>
					Technology-Driven Security <span>Solutions.</span>
				</>
			),
			desc: "Leveraging cutting-edge technology to enhance security and operational efficiency.",
			img: "/images/hero/slider-3.webp",
			thumbImg: "/hero/technology.png",
			video: "/hero/technology.mp4",
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
					<source src={heroSlides[activeSlideIndex]?.video || "/hero/security.mp4"} type="video/mp4" />
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
				onSwiper={(swiper) => {
					mainSwiperRef.current = swiper;
				}}
				onSlideChange={(swiper) => {
					setActiveSlideIndex(swiper.realIndex);
				}}
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
				{heroSlides.map(({ subtitle, title, desc }, idx) => (
					<SwiperSlide key={idx} className="tj-slider-item" style={{ backgroundColor: "transparent" }}>
						<div className="container">
							<div className="slider-wrapper">
								<div className="slider-content">
									{subtitle && (
										<div className="slider-subtitle" style={{ color: "#666", fontSize: "14px", fontWeight: "500", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
											{subtitle}
										</div>
									)}
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
				onSlideChange={(swiper) => {
					if (mainSwiperRef.current) {
						mainSwiperRef.current.slideTo(swiper.activeIndex);
					}
				}}
			>
				{heroSlides.map(
					({ thumbImg }, idx) => (
						<SwiperSlide 
							key={idx} 
							className="thumb-item"
							onClick={() => {
								if (mainSwiperRef.current) {
									mainSwiperRef.current.slideTo(idx);
								}
							}}
							style={{ cursor: "pointer" }}
						>
							<Image
								src={thumbImg}
								alt="images"
								width={80}
								height={80}
								style={{ height: "auto", borderRadius: "8px" }}
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
