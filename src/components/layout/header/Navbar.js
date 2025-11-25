import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const servicesNav = makeActiveLink(navItems[0]);
	const industriesNav = makeActiveLink(navItems[1]);
	const sustainableImpactNav = makeActiveLink(navItems[2]);
	const aboutNav = makeActiveLink(navItems[3]);
	const contactNav = makeActiveLink(navItems[4]);

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					<li
						className={`has-dropdown ${
							servicesNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={servicesNav?.path ? servicesNav?.path : "#"}>
							{servicesNav?.name}
						</Link>
						<ul className="sub-menu header__mega-menu mega-menu mega-menu-services-grid">
							<li>
								<div className="mega-menu-wrapper">
									<div className="container-fluid gap-60-25">
										<div className="row">
											{/* Security Services Column */}
											<div className="col-xl-3 col-lg-3 col-md-6">
												<div className="mega-menu-services-column">
													<h6 className="mega-menu-services-category">Security Services</h6>
													<div className="mega-menu-services-list">
														{servicesNav?.submenu?.filter((item, idx) => idx >= 1 && idx <= 7).map((item, idx) => (
															<Link
																key={item?.id || idx}
																href={item?.path ? item?.path : "/services"}
																className="mega-menu-services-item"
															>
																{item?.name}
															</Link>
														))}
													</div>
												</div>
											</div>
											{/* Facility Management Column */}
											<div className="col-xl-3 col-lg-3 col-md-6">
												<div className="mega-menu-services-column">
													<h6 className="mega-menu-services-category">Facility Management</h6>
													<div className="mega-menu-services-list">
														{servicesNav?.submenu?.filter((item, idx) => idx >= 9 && idx <= 15).map((item, idx) => (
															<Link
																key={item?.id || idx}
																href={item?.path ? item?.path : "/services"}
																className="mega-menu-services-item"
															>
																{item?.name}
															</Link>
														))}
													</div>
												</div>
											</div>
											{/* Information Security Column */}
											<div className="col-xl-3 col-lg-3 col-md-6">
												<div className="mega-menu-services-column">
													<h6 className="mega-menu-services-category">Information Security</h6>
													<div className="mega-menu-services-list">
														{servicesNav?.submenu?.filter((item, idx) => idx >= 17 && idx <= 24).map((item, idx) => (
															<Link
																key={item?.id || idx}
																href={item?.path ? item?.path : "/services"}
																className="mega-menu-services-item"
															>
																{item?.name}
															</Link>
														))}
													</div>
												</div>
											</div>
											{/* Skills & Training Column */}
											<div className="col-xl-3 col-lg-3 col-md-6">
												<div className="mega-menu-services-column">
													<h6 className="mega-menu-services-category">Skills & Training</h6>
													<div className="mega-menu-services-list">
														{servicesNav?.submenu?.filter((item, idx) => idx >= 26).map((item, idx) => (
															<Link
																key={item?.id || idx}
																href={item?.path ? item?.path : "/services"}
																className="mega-menu-services-item"
															>
																{item?.name}
															</Link>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>
					<li
						className={`has-dropdown ${
							industriesNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={industriesNav?.path ? industriesNav?.path : "#"}>
							{industriesNav?.name}
						</Link>
						<ul className="sub-menu">
							{industriesNav?.submenu?.length
								? industriesNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/industries"}>
												{item?.name ? item?.name : "Industry"}
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>
					<li
						className={`has-dropdown ${
							sustainableImpactNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={sustainableImpactNav?.path ? sustainableImpactNav?.path : "#"}>
							{sustainableImpactNav?.name}
						</Link>
						<ul className="sub-menu">
							{sustainableImpactNav?.submenu?.length
								? sustainableImpactNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/sustainable-impact"}>
												{item?.name ? item?.name : "Impact"}
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>
					<li className={aboutNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={aboutNav?.path ? aboutNav?.path : "#"}>
							{aboutNav?.name}
						</Link>
					</li>
					<li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={contactNav?.path ? contactNav?.path : "#"}>
							{contactNav?.name ? contactNav?.name : "Contact"}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
