const makeWowDelay = (delay, startingDelay) => {
	const delayFloat = parseFloat(delay < 10 ? `.${delay}` : `1.${delay}`);
	const wowDelay = delayFloat + startingDelay + delayFloat;
	return `${wowDelay.toFixed(1)}s`;
};

export default makeWowDelay;
