<template>
	<view class="container">
		<view class="title">
			{{ title }}
		</view>
		<view class="con" v-html="con">
			
		</view>
		<view class="time">
			{{ time }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				con: '',
				time: ''
			}
		},
		onLoad(e) {
			this.getDetail(e.id)
		},
		methods: {
			getDetail(id) {
				this.$api.getonemessage({
					id: id
				}).then(res=>{
					if(res.code==200){
						this.title = res.data.title
						this.con = res.data.content
						this.time = res.data.create_time
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.title{
	font-size: 34rpx;
	font-weight: bold;
	text-align: center;
}
.con{
	margin-top: 56rpx;
	text-indent: 56rpx;
	font-size: 28rpx;
	// background-color: #F3F3F3;
	padding: 28rpx;
	border-radius: 18rpx;
	line-height: 2;
}
.time{
	font-size: 28rpx;
	margin-top: 56rpx;
	text-align: right;
}
</style>
