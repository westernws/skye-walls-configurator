class IntersectionObs {
	buildThresholdList() {
		const thresholds = [];
		const numSteps = 1;

		for (let i = 1.0; i <= numSteps; i += 1) {
			const ratio = i / numSteps;

			thresholds.push(ratio);
		}

		thresholds.push(0);
		return thresholds;
	}

	createObserver() {
		const options = {
			root: this.root,
			rootMargin: this.rootMargin,
			threshold: this.threshold || this.buildThresholdList(),
		};
		const observer = new IntersectionObserver(this.handleIntersect.bind(this), options);

		observer.observe(this.node);
	}

	handleIntersect(entries) {
		console.log(entries);
		entries.forEach((entry) => {
			// (intersectionRatio > prevRatio) -- element coming into view.
			// (intersectionRatio < prevRatio) -- element exiting out of view.
			// (intersectionRatio === 0) -- element is completely out of view.
			this.intersectionRatio = entry.intersectionRatio;
			const {
				target, isVisible, isIntersecting, boundingClientRect,
			} = entry;
			this.callback({
				intersectionRatio: this.intersectionRatio,
				prevRatio: this.prevRatio,
				target,
				isVisible,
				isIntersecting,
				boundingClientRect,
			});
			this.prevRatio = entry.intersectionRatio;
		});
	}

	intersectionRatio

	node

	numSteps

	onLoadHandler() {
		this.node = document.querySelector(this.querySelector);

		this.createObserver();
	}

	prevRatio = 0.0

	querySelector

	root

	threshold

	constructor(querySelector, callback, options = {}) {
		this.querySelector = querySelector;
		this.callback = callback;
		this.numSteps = options.numSteps || 20;
		this.root = options.root || null;
		this.rootMargin = options.rootMargin || '0px';
		this.threshold = options.threshold;
	}
}

export const IntersectionObserverFactory = {
	create(querySelector, callback, options) {
		if (!process.browser) {
			return () => {};
		}
		const instance = new IntersectionObs(querySelector, callback, options);
		const onLoadHandler = () => {
			console.log('onload');
			instance.onLoadHandler();
		};

		window.addEventListener('load', onLoadHandler, false);
		instance.cleanup = () => {
			console.log('cleanup');
			window.removeEventListener('load', onLoadHandler);
		};
		global.inst = instance;
		return instance;
	},
};
