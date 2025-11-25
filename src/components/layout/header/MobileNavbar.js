import getNavItems from "@/libs/getNavItems";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const servicesNav = navItems[0];
	const industriesNav = navItems[1];
	const sustainableImpactNav = navItems[2];
	const aboutNav = navItems[3];
	const contactNav = navItems[4];
	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							<MobileMenuItem
								text={servicesNav?.name}
								url={null}
								submenuClass={"mega-menu-service"}
							>
								{servicesNav?.submenu?.length
									? servicesNav?.submenu?.map((item, idx) => (
											<li key={idx}>
												<Link
													className="mega-menu-service-single"
													href={item?.path ? item?.path : "/"}
												>
													{" "}
													<span className="mega-menu-service-icon">
														<i
															className={
																item?.icon ? item?.icon : "tji-service-1"
															}
														></i>
													</span>{" "}
													<span className="mega-menu-service-title">
														{item?.name
															? item?.name
															: "Business process optimization"}
													</span>{" "}
													<span className="mega-menu-service-nav">
														<i className="tji-arrow-right-long"></i>
														<i className="tji-arrow-right-long"></i>
													</span>
												</Link>
											</li>
									  ))
									: ""}
							</MobileMenuItem>
							<MobileMenuItem text={industriesNav?.name} url={null}>
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
							</MobileMenuItem>
							<MobileMenuItem text={sustainableImpactNav?.name} url={null}>
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
							</MobileMenuItem>
							<li>
								<Link href={aboutNav?.path ? aboutNav?.path : "#"}>
									{aboutNav?.name}
								</Link>
							</li>
							<li className="mean-last">
								<Link href={contactNav?.path ? contactNav?.path : "#"}>
									{" "}
									{contactNav?.name ? contactNav?.name : "Contact"}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
