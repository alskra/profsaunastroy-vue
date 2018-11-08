<template lang="pug">
	svg(
	xmlns="http://www.w3.org/2000/svg"
	:width="width"
	:height="height"
	viewBox="0 0 100 100"
	:aria-labelledby="iconName"
	role="presentation"
	)
		title(
		:id="iconName"
		lang="en"
		)
			| {{ iconName }} icon

		g(:fill="iconColor")
			slot
</template>

<script>
	export default {
		name: "IconBase",
		props: {
			iconName: {
				type: String,
				default: 'box'
			},
			width: {
				type: [Number, String],
				default: 32
			},
			height: {
				type: [Number, String],
				default: 32
			},
			iconColor: {
				type: String,
				default: 'currentColor'
			}
		}
	}
</script>
