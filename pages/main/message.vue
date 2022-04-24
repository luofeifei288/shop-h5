<template>
	<view class="container">
		<view class="mlist">
			<view class="mitem" v-for="(item,index) in datalist" @click="toDetail(item.id)">
				<view class="t">
					<view class="title">{{ item.title }}</view>
					<view class="time">{{ item.create_time }}</view>
				</view>
				<view class="con">
					{{ item.content }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datalist:[]
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData() {
				this.$api.messagelist({
					
				}).then(res=>{
					if(res.code == 200){
						this.datalist = res.data
					}
				})
			},
			toDetail(id){
				uni.navigateTo({
					url: './messageDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mlist{
		.mitem{
			background-color: $uni-color-primary;
			border-radius: 18rpx;
			padding: 25rpx 33rpx;
			margin-bottom: 18rpx;
			.t{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.title{
					font-size: 28rpx;
					color: #FFFFFF;
					font-weight: bold;
				}
				.time{
					color: #FFFFFF;
					font-size: 25rpx;
				}
			}
			.con{
				color: #FFFFFF;
				font-size: 25rpx;
				margin-top: 25rpx;
			}
		}
	}
</style>
