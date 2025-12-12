"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/libs/gsap.config";

const SaasShowcase = () => {
	const containerRef = useRef(null);
	const laptopRef = useRef(null);
	const mobile1Ref = useRef(null);
	const mobile2Ref = useRef(null);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const container = containerRef.current;
		const laptop = laptopRef.current;
		const mobile1 = mobile1Ref.current;
		const mobile2 = mobile2Ref.current;

		if (!container || !laptop || !mobile1 || !mobile2) return;

		gsap.registerPlugin(ScrollTrigger);

		// Initial state - elements hidden
		gsap.set([laptop, mobile1, mobile2], {
			opacity: 0,
			y: 100,
			scale: 0.8,
		});

		// Create timeline for entrance animation
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top 80%",
				end: "top 30%",
				toggleActions: "play none none reverse",
			},
		});

		// Animate laptop first
		tl.to(laptop, {
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 1,
			ease: "power3.out",
		})
			// Then animate mobile 1
			.to(
				mobile1,
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					ease: "power3.out",
				},
				"-=0.5"
			)
			// Then animate mobile 2
			.to(
				mobile2,
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					ease: "power3.out",
				},
				"-=0.5"
			);

		// Parallax effect on scroll
		gsap.to(laptop, {
			y: -50,
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom top",
				scrub: 1,
			},
		});

		gsap.to(mobile1, {
			y: -30,
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom top",
				scrub: 1.5,
			},
		});

		gsap.to(mobile2, {
			y: -30,
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom top",
				scrub: 1.5,
			},
		});

		// Continuous subtle floating animation
		let laptopFloatAnim = gsap.to(laptop, {
			y: "+=10",
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
		});

		let mobile1FloatAnim = gsap.to(mobile1, {
			y: "+=8",
			duration: 2.5,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
			delay: 0.3,
		});

		let mobile2FloatAnim = gsap.to(mobile2, {
			y: "+=8",
			duration: 2.5,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
			delay: 0.6,
		});

		// Hover effects with pause/resume of floating animations
		const handleLaptopHover = () => {
			laptopFloatAnim.pause();
			gsap.to(laptop, {
				scale: 1.05,
				duration: 0.3,
				ease: "power2.out",
			});
		};

		const handleLaptopLeave = () => {
			gsap.to(laptop, {
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
				onComplete: () => {
					laptopFloatAnim.resume();
				},
			});
		};

		const handleMobile1Hover = () => {
			mobile1FloatAnim.pause();
			gsap.to(mobile1, {
				scale: 1.1,
				rotation: -5,
				duration: 0.3,
				ease: "power2.out",
			});
		};

		const handleMobile1Leave = () => {
			gsap.to(mobile1, {
				scale: 1,
				rotation: 0,
				duration: 0.3,
				ease: "power2.out",
				onComplete: () => {
					mobile1FloatAnim.resume();
				},
			});
		};

		const handleMobile2Hover = () => {
			mobile2FloatAnim.pause();
			gsap.to(mobile2, {
				scale: 1.1,
				rotation: 5,
				duration: 0.3,
				ease: "power2.out",
			});
		};

		const handleMobile2Leave = () => {
			gsap.to(mobile2, {
				scale: 1,
				rotation: 0,
				duration: 0.3,
				ease: "power2.out",
				onComplete: () => {
					mobile2FloatAnim.resume();
				},
			});
		};

		laptop.addEventListener("mouseenter", handleLaptopHover);
		laptop.addEventListener("mouseleave", handleLaptopLeave);
		mobile1.addEventListener("mouseenter", handleMobile1Hover);
		mobile1.addEventListener("mouseleave", handleMobile1Leave);
		mobile2.addEventListener("mouseenter", handleMobile2Hover);
		mobile2.addEventListener("mouseleave", handleMobile2Leave);

		return () => {
			laptop.removeEventListener("mouseenter", handleLaptopHover);
			laptop.removeEventListener("mouseleave", handleLaptopLeave);
			mobile1.removeEventListener("mouseenter", handleMobile1Hover);
			mobile1.removeEventListener("mouseleave", handleMobile1Leave);
			mobile2.removeEventListener("mouseenter", handleMobile2Hover);
			mobile2.removeEventListener("mouseleave", handleMobile2Leave);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			laptopFloatAnim?.kill();
			mobile1FloatAnim?.kill();
			mobile2FloatAnim?.kill();
		};
	}, []);

	return (
		<section className="tj-saas-showcase section-gap section-gap-x" style={{ paddingTop: "100px" }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Platform
							</span>
							<h2 className="sec-title text-anim">
								Experience Our <span>Technology Solutions.</span>
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
								Explore our comprehensive security and facility management platform
								across desktop and mobile devices. Interactive, intuitive, and
								designed for excellence.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div
							ref={containerRef}
							className="saas-showcase-container"
							style={{
								position: "relative",
								minHeight: "600px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "60px 20px",
							}}
						>
							{/* Mobile 1 - Left */}
							<div
								ref={mobile1Ref}
								className="saas-device saas-mobile-1"
								style={{
									position: "absolute",
									left: "5%",
									top: "50%",
									transform: "translateY(-50%)",
									zIndex: 2,
									cursor: "pointer",
									transition: "all 0.3s ease",
								}}
							>
								<div className="mobile-device-frame">
									<div className="mobile-screen">
										<Image
											src="/saas/firstglobal-mobile-1.png"
											alt="First Global Mobile App - Service Requests"
											width={200}
											height={400}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</div>
								</div>
							</div>

							{/* Laptop - Center */}
							<div
								ref={laptopRef}
								className="saas-device saas-laptop"
								style={{
									position: "relative",
									zIndex: 3,
									cursor: "pointer",
									transition: "all 0.3s ease",
								}}
							>
								<div className="laptop-device-frame">
									<div className="laptop-screen">
										<Image
											src="/saas/firstglobal-dash.png"
											alt="First Global Platform - Dashboard View"
											width={800}
											height={500}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</div>
									<div className="laptop-keyboard"></div>
									<div className="laptop-trackpad"></div>
								</div>
							</div>

							{/* Mobile 2 - Right */}
							<div
								ref={mobile2Ref}
								className="saas-device saas-mobile-2"
								style={{
									position: "absolute",
									right: "5%",
									top: "50%",
									transform: "translateY(-50%)",
									zIndex: 2,
									cursor: "pointer",
									transition: "all 0.3s ease",
								}}
							>
								<div className="mobile-device-frame">
									<div className="mobile-screen">
										<Image
											src="/saas/firstglobal-mobile-2.png"
											alt="First Global Mobile App - Quicko Services"
											width={200}
											height={400}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</div>
								</div>
							</div>

							{/* Background gradient effect */}
							<div
								className="saas-bg-gradient"
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									width: "1000px",
									height: "1000px",
									background:
										"radial-gradient(circle, rgba(211, 176, 56, 0.1) 0%, rgba(211, 176, 56, 0) 70%)",
									borderRadius: "50%",
									zIndex: 0,
									pointerEvents: "none",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.tj-saas-showcase {
					background: linear-gradient(
						to bottom,
						#f8f9fa 0%,
						#ffffff 50%,
						#f8f9fa 100%
					);
					overflow: hidden;
					padding-top: 100px;
				}
				.saas-showcase-container {
					position: relative;
				}
				.saas-device {
					will-change: transform;
				}
				.saas-device:hover {
					z-index: 10 !important;
				}

				/* Mobile Device Frame */
				.mobile-device-frame {
					position: relative;
					width: 200px;
					height: 420px;
					background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
					border-radius: 30px;
					padding: 8px;
					box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
						inset 0 0 0 1px rgba(255, 255, 255, 0.1);
					filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
				}

				.mobile-screen {
					width: 100%;
					height: 100%;
					background: #000;
					border-radius: 22px;
					overflow: hidden;
					position: relative;
					box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
				}

				.mobile-screen::before {
					content: "";
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 60px;
					height: 20px;
					background: #1a1a1a;
					border-radius: 0 0 12px 12px;
					z-index: 10;
				}

				.mobile-screen::after {
					content: "";
					position: absolute;
					bottom: 8px;
					left: 50%;
					transform: translateX(-50%);
					width: 120px;
					height: 4px;
					background: #1a1a1a;
					border-radius: 2px;
					z-index: 10;
				}

				/* Laptop Device Frame */
				.laptop-device-frame {
					position: relative;
					width: 800px;
					max-width: 100%;
					perspective: 1000px;
					filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.2));
				}

				.laptop-screen {
					position: relative;
					width: 100%;
					height: 500px;
					background: #1a1a1a;
					border-radius: 8px 8px 0 0;
					overflow: hidden;
					box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
						inset 0 0 0 3px rgba(255, 255, 255, 0.1);
					border: 3px solid #2d2d2d;
					border-bottom: none;
				}

				.laptop-screen::before {
					content: "";
					position: absolute;
					bottom: -2px;
					left: 50%;
					transform: translateX(-50%);
					width: 200px;
					height: 4px;
					background: #1a1a1a;
					border-radius: 0 0 4px 4px;
					z-index: 5;
				}

				.laptop-keyboard {
					position: relative;
					width: 100%;
					height: 20px;
					background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
					border-radius: 0 0 8px 8px;
					margin-top: -1px;
					box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
				}

				.laptop-keyboard::before {
					content: "";
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 60%;
					height: 2px;
					background: rgba(255, 255, 255, 0.05);
					border-radius: 1px;
				}

				.laptop-trackpad {
					position: relative;
					width: 120px;
					height: 80px;
					background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
					border-radius: 4px;
					margin: 10px auto 0;
					box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
				}

				.laptop-trackpad::before {
					content: "";
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 80%;
					height: 60%;
					border: 1px solid rgba(255, 255, 255, 0.1);
					border-radius: 2px;
				}

				@media (max-width: 1199px) {
					.saas-mobile-1 {
						left: 2% !important;
					}
					.saas-mobile-2 {
						right: 2% !important;
					}
					.mobile-device-frame {
						width: 160px !important;
						height: 336px !important;
					}
				}
				@media (max-width: 991px) {
					.saas-mobile-1,
					.saas-mobile-2 {
						display: none;
					}
					.laptop-device-frame {
						width: 100% !important;
						max-width: 600px;
						margin: 0 auto;
					}
					.laptop-screen {
						height: 375px !important;
					}
				}
				@media (max-width: 767px) {
					.saas-showcase-container {
						min-height: 400px !important;
						padding: 40px 10px !important;
					}
					.laptop-device-frame {
						max-width: 100%;
					}
					.laptop-screen {
						height: 250px !important;
					}
					.laptop-trackpad {
						width: 80px !important;
						height: 60px !important;
					}
				}
			`}</style>
		</section>
	);
};

export default SaasShowcase;

