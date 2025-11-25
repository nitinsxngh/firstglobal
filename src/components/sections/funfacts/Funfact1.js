import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<div className="tj-countup-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="countup-wrap">
							<div className="countup-item">
								<FunfactSingle currentValue={45} symbol={"K+"} />

								<span className="count-text">People Employed</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={52} symbol={"+"} />
								<span className="count-text">Training Centers</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={47} symbol={"+"} />
								<span className="count-text">Branches/Cities</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={700} symbol={"+ Cr"} />
								<span className="count-text">Annual Revenue (INR)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfact1;
