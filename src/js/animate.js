import '../scss/animate.scss';
import anime from 'animejs';

const animate = {
	// Get data options
	getDataOptions(elem) {
		if (elem.dataset.animate !== undefined) {
			return JSON.parse(elem.dataset.animate);
		}

		return {};
	},

	// Split text for `.animate-text` type animation
	splitText() {
		document.querySelectorAll('.animate-text:not(.animate-text--split)').forEach((elem) => {
			elem.innerHTML = elem.textContent.replace(/[\S\u00A0]+/g, (match) => {
				match = match.replace(/\S/g, '<span class="animate__letter">$&</span>');

				return `<span class="animate__word">${match}</span>`;
			});

			elem.classList.add('animate-text--split');
		});
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

	// Events to start
	onScroll() {
		document.querySelectorAll('.animate:not(.animate--completed)').forEach((elem) => {
			if (animate.getDataOptions(elem).start === 'scroll'
				&& elem.getBoundingClientRect().bottom >= 100
				&& elem.getBoundingClientRect().top <= window.innerHeight - 100) {
				animate.start(elem);
			}
		});
	},
	onLoaded() {
		document.querySelectorAll('.animate:not(.animate--completed)').forEach((elem) => {
			if (animate.getDataOptions(elem).start === 'load' && elem.complete) {
				animate.start(elem);
			}
		});
	},
	onLoad(evt) {
		const elem = evt.target;

		if (elem.classList.contains('animate') && animate.getDataOptions(elem).start === 'load') {
			animate.start(elem);
		}
	},

	// Update
	update() {
		animate.splitText();
		animate.onScroll();
		animate.onLoaded();
	},

	// Initialize
	init() {
		animate.update();

		window.addEventListener('scroll', animate.onScroll);
		document.addEventListener('load', animate.onLoad, true);
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
			loop = 3,
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
