<script>
	import Vue from 'vue';

	const resetStyles = {
		borderTopWidth: '',
		borderBottomWidth: '',
		paddingTop: '',
		paddingBottom: '',
		height: '',
		transition: 'none',
	};

	const hiddenStyles = {
		borderTopWidth: 0,
		borderBottomWidth: 0,
		paddingTop: 0,
		paddingBottom: 0,
		height: 0,
	};

	const visibleStyles = {
		borderTopWidth: '',
		borderBottomWidth: '',
		paddingTop: '',
		paddingBottom: '',
		height: '',
	};

	const onEnterTransitionend = function (evt) {
		if (this === evt.target) {
			this.removeEventListener('transitionend', onEnterTransitionend);
			this.classList.remove('expand-enter-active');
			this.style.height = '';
		}
	};

	const onLeaveTransitionend = function (evt) {
		if (this === evt.target) {
			this.removeEventListener('transitionend', onLeaveTransitionend);
			this.classList.remove('expand-leave-active');
		}
	};

	Vue.directive('expand', {
		bind (el, binding) {
			el.style.overflow = 'hidden';

			if (binding.value) {
				Object.assign(el.style, visibleStyles);
			} else {
				Object.assign(el.style, hiddenStyles);
			}
		},
		componentUpdated (el, binding) {
			clearTimeout(el.timer);
			delete el.timer;

			const {
				borderTopWidth,
				borderBottomWidth,
				paddingTop,
				paddingBottom,
				height,
			} = getComputedStyle(el);

			el.removeEventListener('transitionend', onEnterTransitionend);
			el.removeEventListener('transitionend', onLeaveTransitionend);
			el.classList.remove('expand-enter-active', 'expand-leave-active');

			Object.assign(el.style, resetStyles);
			const fullHeight = el.offsetHeight + 'px';

			Object.assign(el.style, {
				borderTopWidth,
				borderBottomWidth,
				paddingTop,
				paddingBottom,
				height,
			});

			if ((binding.value !== binding.oldValue) && binding.value) {
				el.timer = setTimeout(() => {
					el.addEventListener('transitionend', onEnterTransitionend);
					el.classList.add('expand-enter-active');
					Object.assign(el.style, {transition: ''}, visibleStyles, {height: fullHeight});
				}, 20);
			} else if ((binding.value !== binding.oldValue) && !binding.value) {
				el.timer = setTimeout(() => {
					el.addEventListener('transitionend', onLeaveTransitionend);
					el.classList.add('expand-leave-active');
					Object.assign(el.style, {transition: ''}, hiddenStyles);
				}, 20);
			}
		},
	});

	export default {
		name: "BaseTransitions",
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
				height !important;
			transition-duration: 0.3s !important;
			transition-delay: 0s !important;
		}

		&-enter-active {
			transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
		}

		&-leave-active {
			transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045) !important;
		}
	}
</style>
