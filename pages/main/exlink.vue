<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		onLoad(val) {
			let url = encodeURIComponent(val.url)
			this.url = url
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
