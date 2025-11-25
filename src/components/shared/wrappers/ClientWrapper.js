"use client";
import animateInvertText from "@/libs/animateInvertText";
import arrangeAnim from "@/libs/arrangeAnim";
import arrangeAnim2 from "@/libs/arrangeAnim2";
import fadeInRightOnScrollAnim from "@/libs/fadeInRightOnScrollAnim";
import { useGSAP } from "@/libs/gsap.config";
import initSmoothScroller from "@/libs/initSmoothScroller";
import onePageNavAnim from "@/libs/onePageNavAnim";
import progressBar from "@/libs/progressBar";
import sidebarSticky from "@/libs/sidebarSticky";
import smoothScrollToTop from "@/libs/smoothScrollToTop";
import textReavealAnim from "@/libs/textReavealAnim";
import titleAnim from "@/libs/titleAnim";
import titleAnim2 from "@/libs/titleAnim2";
import titleAnim3 from "@/libs/titleAnim3";
import tjImageParallex from "@/libs/tjImageParallex";
import tjLeftSwipeAnimation from "@/libs/tjLeftSwipeAnimation";
import tjMagicCursorAnimation from "@/libs/tjMagicCursorAnimation";
import tjRightSwipeAnimation from "@/libs/tjRightSwipeAnimation";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useEffect } from "react";
const ClientWrapper = () => {
	useEffect(() => {
		import("wow.js").then(({ default: WOW }) => {
			new WOW().init();
		});
		smoothScrollToTop();
		const cleanup = tjMagicCursorAnimation();
		return () => {
			if (cleanup) cleanup();
		};
	}, []);
	useGSAP((context, contextSafe) => {
		tjRightSwipeAnimation();
		tjLeftSwipeAnimation();
		titleAnim();
		titleAnim2();
		titleAnim3();
		textReavealAnim();
		tjImageParallex();
		initSmoothScroller();
		sidebarSticky();
		arrangeAnim();
		arrangeAnim2();
		animateInvertText();
		fadeInRightOnScrollAnim();
		onePageNavAnim(contextSafe);
		progressBar();
		tjStackAnimation();
	});
	return null;
};

export default ClientWrapper;
