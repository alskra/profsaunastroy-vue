<script>
	import Vue from 'vue';

	const resetStyles = {
		borderTopWidth: '',
		borderBottomWidth: '',
		paddingTop: '',
		paddingBottom: '',
		height: '',
		opacity: '',
	};

	const hiddenStyles = {
		borderTopWidth: 0,
		borderBottomWidth: 0,
		paddingTop: 0,
		paddingBottom: 0,
		height: 0,
		opacity: 0,
	};

	const onEnterTransitionend = (evt) => {
		const el = evt.currentTarget;

		if (el === evt.target) {
			el.removeEventListener('transitionend', onEnterTransitionend);
			el.classList.remove('expand-enter-active');
			Object.assign(el.style, resetStyles, {overflow: ''});
		}
	};

	const onLeaveTransitionend = (evt) => {
		const el = evt.currentTarget;

		if (el === evt.target) {
			el.removeEventListener('transitionend', onLeaveTransitionend);
			el.classList.remove('expand-leave-active');
			Object.assign(el.style, resetStyles, {
				display: 'none',
				overflow: '',
			});
		}
	};

	Vue.directive('expand', {
		bind (el, binding) {
			if (!binding.value) {
				Object.assign(el.style, {display: 'none'});
			}
		},
		update (el, binding) {
			if (binding.value !== binding.oldValue) {
				clearTimeout(el.timer);

				let fromStyles = {};
				let toStyles = {};

				// Define from styles
				if ((el.classList.contains('expand-enter-active') || el.classList.contains('expand-leave-active'))
				|| binding.oldValue) {
					const {
						borderTopWidth,
						borderBottomWidth,
						paddingTop,
						paddingBottom,
						height,
						opacity,
					} = getComputedStyle(el);

					Object.assign(fromStyles, {
						borderTopWidth,
						borderBottomWidth,
						paddingTop,
						paddingBottom,
						height,
						opacity,
					});

					el.removeEventListener('transitionend', onEnterTransitionend);
					el.removeEventListener('transitionend', onLeaveTransitionend);
					el.classList.remove('expand-enter-active', 'expand-leave-active');
				} else {
					Object.assign(fromStyles, hiddenStyles);
				}

				Object.assign(el.style, resetStyles, {
					display: '',
					overflow: 'hidden',
					transition: 'none',
				});

				// Define to styles
				if (binding.value) {
					const {
						borderTopWidth,
						borderBottomWidth,
						paddingTop,
						paddingBottom,
						height,
						opacity,
					} = getComputedStyle(el);

					Object.assign(toStyles, {
						borderTopWidth,
						borderBottomWidth,
						paddingTop,
						paddingBottom,
						height,
						opacity,
					}, {transition: ''});
				} else {
					Object.assign(toStyles, hiddenStyles, {transition: ''});
				}

				// Animate from...
				Object.assign(el.style, fromStyles);

				// Animate to...
				el.timer = setTimeout(() => {
					delete el.timer;

					if (binding.value) {
						el.addEventListener('transitionend', onEnterTransitionend);
						el.classList.add('expand-enter-active');
						Object.assign(el.style, toStyles);
					} else {
						el.addEventListener('transitionend', onLeaveTransitionend);
						el.classList.add('expand-leave-active');
						Object.assign(el.style, toStyles);
					}
				}, 20);
			}
		},
	});

	export default {
		name: 'BaseDirectiveExpand',
	}
</script>

<style lang="scss">
	.expand {
		&-enter-active,
		&-leave-active {
			transition-property:
				border-top-width,
				border-bottom-width,
				padding-top,
				padding-bottom,
				height,
				opacity !important;
			transition-duration: .15s !important;
			transition-delay: 0s !important;
		}

		&-enter-active {
			// transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
			transition-timing-function: ease-out !important;
		}

		&-leave-active {
			// transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045) !important;
			transition-timing-function: ease-in !important;
		}
	}
</style>
