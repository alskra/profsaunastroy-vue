<template lang="pug">
	button.btn-primary(v-if="el === 'button'")
		slot
	router-link.btn-primary(
		v-else-if="el === 'router-link'"
		:to="to"
	)
		slot
</template>

<script>
	export default {
		name: "BtnPrimary",
		props: {
			el: {
				type: String,
				default: 'button',
			},
			to: {
				type: [String, Object],
				default: '',
			},
		},
	}
</script>

<style lang="scss" scoped>
	.btn-primary {
		@include reset;

		display: inline-block;
		vertical-align: top;
		overflow: hidden;
		border: 1px solid #141414;
		padding: (46px - 2px - 14px * 1.25) / 2 2.5rem;
		width: 260px;
		max-width: 100%;
		font-weight: 500;
		font-size: 14px;
		line-height: 1.25;
		white-space: nowrap;
		text-align: center;
		text-overflow: ellipsis;
		text-transform: uppercase;
		color: #141414;
		transition: border-color 0.15s ease-in-out,
		background-color 0.15s ease-in-out,
		color 0.15s ease-in-out;
		cursor: pointer;

		&:not(:disabled) {
			&:hover {
				color: var(--page-background-color);
				background-color: #141414;
			}
		}

		&--invert {
			border-color: var(--page-background-color);
			color: var(--page-background-color);

			&:not(:disabled) {
				&:hover {
					color: #141414;
					background-color: var(--page-background-color);
				}
			}
		}
	}
</style>
