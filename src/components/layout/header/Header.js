"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useIsSticky from "@/hooks/useIsSticky";
import Link from "next/link";
import { useState } from "react";
import ContactMenu from "./ContactMenu";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Header = ({
	headerType = 1,
	isHeaderTop = false,
	topbarType = 1,
	isStickyHeader = false,
}) => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isContactOpen, setIsContactOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isSticky = useIsSticky(isStickyHeader);
	const handleContactTogglerClick = () => {
		setIsContactOpen(true);
	};
	const handleMobileTogglerClick = () => {
		setIsMobileMenuOpen(true);
	};

	return (
		<>
			{/* <!-- start: Offcanvas Menu --> */}
			<ContactMenu
				isContactOpen={isContactOpen}
				setIsContactOpen={setIsContactOpen}
			/>
			{/* <!-- end: Offcanvas Menu --> */}

			{/* <!-- start: Offcanvas Menu --> */}
			<MobileMenu
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
			/>
			{/* <!-- end: Offcanvas Menu --> */}

			{/* Search Popup --> */}
			<div
				className={`search-popup-overlay ${
					isSearchOpen ? "search-popup-overlay-open" : ""
				}`}
				onClick={() => setIsSearchOpen(false)}
			></div>
			<header
				className={`header-area ${
					headerType === 3
						? "header-3"
						: headerType === 2
						? "header-2"
						: "header-1"
				} section-gap-x ${
					isStickyHeader
						? `header-duplicate header-sticky ${isSticky ? "sticky" : ""}`
						: "header-absolute"
				} `}
				style={{ backgroundColor: "#f8f9fa" }}
			>
				<style dangerouslySetInnerHTML={{
					__html: `
						.header-area .mainmenu > ul {
							column-gap: 32px !important;
						}
						.header-area .mainmenu > ul > li > a {
							color: #1a1a1a !important;
							font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, "Segoe UI", Roboto, sans-serif !important;
							font-size: 14px !important;
							font-weight: 500 !important;
							letter-spacing: 0.3px !important;
							text-transform: none !important;
							padding: 37px 0 !important;
							line-height: 1.2 !important;
						}
						.header-area .mainmenu > ul > li:hover > a,
						.header-area .mainmenu > ul > li.current-menu-ancestor > a {
							color: var(--tj-color-theme-primary) !important;
						}
						.header-area .mainmenu > ul > li.has-dropdown > a {
							padding-inline-end: 20px !important;
						}
						/* Submenu styling - slightly smaller for visual hierarchy */
						.header-area .mainmenu > ul > li > .sub-menu > li > a {
							font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, "Segoe UI", Roboto, sans-serif !important;
							font-size: 13px !important;
							font-weight: 400 !important;
							letter-spacing: 0.2px !important;
							line-height: 1.4 !important;
						}
						.header-area .header-search .search,
						.header-area .header-search .search_close_btn {
							color: #1a1a1a !important;
						}
						.header-area .menu_bar span {
							background-color: #1a1a1a !important;
						}
						.header-area .header-wrapper {
							background-color: #f8f9fa !important;
						}
					`
				}} />
				{isHeaderTop && <HeaderTop type={topbarType} />}
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="header-wrapper">
								{/* <!-- site logo --> */}
								<Logo headerType={headerType} isStickyHeader={isStickyHeader} />

								{/* <!-- navigation --> */}
								<Navbar />
								{/* <!-- header right info --> */}
								<div className="header-right-item d-none d-lg-inline-flex">
									{headerType === 4 ? (
										<Link
											className="header-contact d-none d-xl-inline-flex"
											href="tel:18884521505"
										>
											<span className="call-icon">
												<i className="tji-phone"></i>
											</span>
											<span className="call-text">1-888-452-1505</span>
										</Link>
									) : (
										<div className="header-search">
											<button
												className={`search  ${
													isSearchOpen ? "search-hide" : ""
												}`}
												onClick={() => setIsSearchOpen(true)}
											>
												<i className="tji-search"></i>
											</button>
											<button
												type="button"
												className={`search_close_btn ${
													isSearchOpen ? "close-show" : ""
												}`}
												onClick={() => setIsSearchOpen(false)}
											>
												<svg
													width="18"
													height="18"
													viewBox="0 0 18 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M17 1L1 17"
														stroke="currentColor"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M1 1L17 17"
														stroke="currentColor"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</button>
										</div>
									)}

									<div className="header-button">
										<ButtonPrimary 
											text={"Let's Talk"} 
											url={"/contact"} 
											className="lets-talk-btn"
										/>
									</div>
									{headerType !== 3 && (
										<div
											className="menu_bar menu_offcanvas d-none d-lg-inline-flex"
											onClick={handleContactTogglerClick}
										>
											<span></span>
											<span></span>
											<span></span>
										</div>
									)}
								</div>

								{/* <!-- menu bar --> */}
								<div
									className="menu_bar mobile_menu_bar d-lg-none"
									onClick={handleMobileTogglerClick}
								>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Search Popup --> */}
				<div className={`search_popup ${isSearchOpen ? "search-opened" : ""}`}>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-8">
								<div className="tj_search_wrapper">
									<div className="search_form">
										<form action="#">
											<div className="search_input">
												<div className="search-box">
													<input
														className="search-form-input"
														type="text"
														placeholder="Type Words and Hit Enter"
														required
													/>
													<button type="submit">
														<i className="tji-search"></i>
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
