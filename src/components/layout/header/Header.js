"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useIsSticky from "@/hooks/useIsSticky";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ContactMenu from "./ContactMenu";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { getAllServices } from "@/libs/getServiceBySlug";
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
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const searchInputRef = useRef(null);
	const isSticky = useIsSticky(isStickyHeader);
	
	const allServices = getAllServices();

	const handleContactTogglerClick = () => {
		setIsContactOpen(true);
	};
	const handleMobileTogglerClick = () => {
		setIsMobileMenuOpen(true);
	};

	const handleSearchChange = (e) => {
		const query = e.target.value.toLowerCase().trim();
		setSearchQuery(query);

		if (query.length > 0) {
			const filtered = allServices.filter((service) => {
				const titleMatch = service.title?.toLowerCase().includes(query);
				const descMatch = service.description?.toLowerCase().includes(query);
				const contentMatch = service.content?.toLowerCase().includes(query);
				const categoryMatch = service.category?.toLowerCase().includes(query);
				return titleMatch || descMatch || contentMatch || categoryMatch;
			});
			setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
		} else {
			setSearchResults([]);
		}
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchResults.length > 0) {
			window.location.href = `/services/${searchResults[0].slug}`;
		}
	};

	const handleSearchClose = () => {
		setIsSearchOpen(false);
		setSearchQuery("");
		setSearchResults([]);
	};

	// Focus input when search opens
	useEffect(() => {
		if (isSearchOpen && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [isSearchOpen]);

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
				onClick={handleSearchClose}
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
												onClick={handleSearchClose}
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
							<div className="col-xxl-8 col-lg-10">
								<div className="tj_search_wrapper">
									<div className="search_form">
										<form onSubmit={handleSearchSubmit}>
											<div className="search_input">
												<h4 className="title">
													Search Services
												</h4>
												<div className="search-box">
													<input
														ref={searchInputRef}
														className="search-form-input"
														type="text"
														placeholder="Search services..."
														value={searchQuery}
														onChange={handleSearchChange}
													/>
													<button type="submit">
														<i className="tji-search"></i>
													</button>
												</div>
												{searchResults.length > 0 && (
													<div className="search-results">
														<div className="search-results-header">
															<span>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found</span>
														</div>
														<ul className="search-results-list">
															{searchResults.map((service) => (
																<li key={service.slug}>
																	<Link
																		href={`/services/${service.slug}`}
																		onClick={handleSearchClose}
																	>
																		<div className="result-item">
																			<h5 className="result-title">{service.title}</h5>
																			{service.category && (
																				<span className="result-category">{service.category}</span>
																			)}
																			{service.description && (
																				<p className="result-desc">{service.description}</p>
																			)}
																		</div>
																	</Link>
																</li>
															))}
														</ul>
													</div>
												)}
												{searchQuery.length > 0 && searchResults.length === 0 && (
													<div className="search-no-results">
														<p>No services found matching "{searchQuery}"</p>
													</div>
												)}
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<style jsx>{`
						.search-results {
							margin-top: 30px;
							background: #fff;
							border-radius: 12px;
							box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
							max-height: 500px;
							overflow-y: auto;
							padding: 20px;
						}
						.search-results-header {
							padding: 15px 0;
							margin-bottom: 15px;
							border-bottom: 1px solid #e9ecef;
							font-size: 14px;
							color: #666;
							font-weight: 500;
						}
						.search-results-list {
							list-style: none;
							padding: 0;
							margin: 0;
						}
						.search-results-list li {
							border-bottom: 1px solid #f0f0f0;
						}
						.search-results-list li:last-child {
							border-bottom: none;
						}
						.search-results-list a {
							display: block;
							padding: 15px 0;
							text-decoration: none;
							color: inherit;
							transition: background-color 0.3s ease;
						}
						.search-results-list a:hover {
							background-color: #f8f9fa;
						}
						.result-item {
							display: flex;
							flex-direction: column;
							gap: 8px;
						}
						.result-title {
							font-size: 18px;
							font-weight: 600;
							color: #1a1a1a;
							margin: 0;
						}
						.result-category {
							display: inline-block;
							font-size: 12px;
							padding: 4px 12px;
							background: #f0f0f0;
							border-radius: 4px;
							color: #666;
							width: fit-content;
						}
						.result-desc {
							font-size: 14px;
							color: #666;
							line-height: 1.6;
							margin: 0;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							overflow: hidden;
						}
						.search-no-results {
							margin-top: 20px;
							padding: 30px 20px;
							text-align: center;
							color: #666;
						}
						.search-no-results p {
							margin: 0;
						}
					`}</style>
				</div>
			</header>
		</>
	);
};

export default Header;
