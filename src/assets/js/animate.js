import anime from 'animejs';
import '../scss/animate.scss';

const animate = {
	// Get data options
	getDataOptions(elem) {
		if (elem.dataset.animate !== undefined) {
			return JSON.parse(elem.dataset.animate);
		}

		return {};
	},

	// Start animation
	start(elem, options) {
		if (!elem.classList.contains('animate--started')) {
			options = options || {};

			Object.assign(options, animate.getDataOptions(elem));

			elem.classList.remove('animate--completed');

			if (animate[options.name]) {
				const targets = options.targets ? elem.querySelectorAll(options.targets) : [elem];
				const animeInstance = animate[options.name](targets, options);

				animeInstance.begin = () => {
					elem.classList.add('animate--started');
				};

				animeInstance.complete = () => {
					elem.classList.remove('animate--started');
					elem.classList.add('animate--completed');
				};
			} else {
				elem.classList.add('animate--completed');
			}
		}
	},

	// Update
	update() {
		const animateElList = document.querySelectorAll('.animate:not(.animate--completed)');

		animateElList.forEach((elem) => {
			if (elem.matches('.animate-text:not(.animate-text--split)')) {
				elem.innerHTML = elem.textContent.replace(/[\S\u00A0]+/g, (match) => {
					match = match.replace(/\S/g, '<span class="animate__letter">$&</span>');

					return `<span class="animate__word">${match}</span>`;
				});

				elem.classList.add('animate-text--split');
			}

			const animateStart = animate.getDataOptions(elem).start;

			if (animateStart === 'scroll') {
				const elCoords = elem.getBoundingClientRect();

				if (elCoords.top <= window.innerHeight - 100 && elCoords.bottom >= 100) {
					animate.start(elem);
				}
			} else if (animateStart === 'load') {
				elem.complete ? animate.start(elem) : null;
			}
		});
	},

	// Initialize
	init() {
		requestAnimationFrame(function runAnimate() {
			animate.update();
			requestAnimationFrame(runAnimate);
		});
	},

	// Animations
	fadeIn(targets, options) {
		const {
			duration = 1000,
			delayStart = 0,
			delayStep = 200,
			easing = 'easeInOutSine',
			direction = 'normal',
			loop = false,
		} = options;

		return anime({
			opacity: [0, 1],
			targets,
			duration,
			delay: (target, i) => {
				return delayStart + i * delayStep;
			},
			easing,
			direction,
			loop,
		});
	},
	fadeInUp(targets, options) {
		const {
			duration = 1000,
			delayStart = 0,
			delayStep = 200,
			easing = 'easeInOutSine',
			direction = 'normal',
			loop = false,
		} = options;

		return anime({
			opacity: [0, 1],
			translateY: ['100%', 0],
			targets,
			duration,
			delay: (target, i) => {
				return delayStart + i * delayStep;
			},
			easing,
			direction,
			loop,
		});
	},
	lettersFadeInUp(targets, options) {
		const {
			duration = 500,
			delayStart = 0,
			delayStep = 50,
			easing = 'easeInOutSine',
			direction = 'normal',
			loop = false,
		} = options;

		let animeInstance;

		targets.forEach((target) => {
			target.querySelectorAll('.animate__word').forEach((word) => {
				animeInstance = anime({
					opacity: [0, 1],
					translateY: ['100%', 0],
					targets: word.querySelectorAll('.animate__letter'),
					duration,
					delay: (target, i) => {
						return delayStart + i * delayStep;
					},
					easing,
					direction,
					loop,
				});
			});
		});

		return animeInstance;
	},
	runningString(targets, options) {
		const {
			duration = 30000,
			delayStart = 0,
			delayStep = 200,
			easing = 'linear',
			direction = 'normal',
			loop = true,
		} = options;

		return anime({
			translateX: (target) => {
				return [target.parentElement.clientWidth, -target.clientWidth];
			},
			targets,
			duration,
			delay: (target, i) => {
				return delayStart + i * delayStep;
			},
			easing,
			direction,
			loop,
		});
	},
};

export default animate;
