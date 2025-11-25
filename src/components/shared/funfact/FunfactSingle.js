"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FunfactSingle = ({ currentValue, symbol, isSup }) => {
	const [value, setValue] = useState(0);

	const [Odometer, setOdometer] = useState(null);
	// Intersection Observer
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.4, // Adjust as needed
	});
	useEffect(() => {
		import("react-odometerjs").then(mod => setOdometer(() => mod.default));
	}, []);

	// Trigger odometer when visible
	useEffect(() => {
		if (inView) {
			const timeoutId = setTimeout(() => {
				setValue(currentValue || 0);
			}, 250);
			return () => clearTimeout(timeoutId);
		}
	}, [inView, currentValue]);

	return (
		<div ref={ref} className="inline-content">
			{Odometer ? (
				<Odometer className="odometer countup-number" value={value} />
			) : (
				<div className="odometer odometer-auto-theme countup-number">
					<div className="odometer-inside">
						<span className="odometer-digit">
							<span className="odometer-digit-spacer">0</span>
							<span className="odometer-digit-inner">
								<span className="odometer-ribbon">
									<span className="odometer-ribbon-inner">
										<span className="odometer-value">0</span>
									</span>
								</span>
							</span>
						</span>
					</div>
				</div>
			)}{" "}
			<span className="count-plus">{symbol ? symbol : ""}</span>
		</div>
	);
};

export default FunfactSingle;
