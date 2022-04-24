<template>
	<uni-popup ref="popup" type="center">内容</uni-popup>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			this.$refs.popup.open('top')
		}
	}
</script>

<style lang="scss" scoped>

</style>
