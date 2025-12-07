import Link from "next/link";

const CtaSidebar = () => {
	return (
		<div className="feature-box">
			<div className="feature-content">
				<h2 className="title">Need Help?</h2>
				<span>Get in Touch</span>
				<Link className="read-more feature-contact" href="tel:+911126495662">
					<i className="tji-phone-3"></i>
					<span>+91-11-26495662</span>
				</Link>
				<Link className="read-more feature-contact" href="mailto:info@firstglobal.io" style={{ marginTop: "10px", display: "block" }}>
					<i className="tji-email"></i>
					<span>info@firstglobal.io</span>
				</Link>
			</div>
			<div className="feature-images">
				<img src="/images/service/service-ad.webp" alt="First Global Services" />
			</div>
		</div>
	);
};

export default CtaSidebar;
