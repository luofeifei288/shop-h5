<template>
	<view class="container">
		<title-com></title-com>
		<view class="head" style="margin-top: 112rpx;">
			<view class="one text-con">
				<view class="lv" @click="sellv('1')">{{ $t('team.team1') }}</view>
				<view class="nub">{{ count.typeA||0 }}</view>
			</view>
			<view class="two text-con">
				<view class="lv" @click="sellv('2')">{{ $t('team.team2') }}</view>
				<view class="nub">{{ count.typeB||0 }}</view>
			</view>
			<view class="there text-con">
				<view class="lv" @click="sellv('3')">{{ $t('team.team3') }}</view>
				<view class="nub">{{ count.typeC||0 }}</view>
			</view>
		</view>
		<view class="tlist">
			<view class="title">
				<view class="title-lv">
					<text>{{ $t('team.team4') }}</text>
				</view>
				<view class="title-user">
					<text>{{ $t('team.team5') }}</text>
				</view>
				<view class="title-time">
					<text>{{ $t('team.team6') }}</text>
				</view>
				<view class="title-money">
					<text>{{ $t('team.team7') }}</text>
				</view>
			</view>
			<view>
				<view class="titem" v-for="(item,index) in teamlist">
					<view class="item-lv">
						<text>{{ item.type }}</text>
					</view>
					<view class="item-user">{{ item.tel }}</view>
					<view class="item-time">{{ item.create_date }}</view>
					<view class="item-money">{{ item.balance }}</view>
				</view>
			</view>
			<!-- <no-data class="itembox" v-else></no-data> -->
		</view>
		<uni-load-more :status="status" :content-text="contentText"></uni-load-more>
	</view>
</template>

<script>
	import titleCom from '../component/titleCom.vue'
	export default {
		data() {
			return {
				type: '1',
				page: '1',
				size: '10',
				status: 'more',
				teamlist: [],
				count: {}
			};
		},
		components:{
			titleCom
		},
		computed:{
			contentText() {
				return {
					contentdown: this.$t('team.team8'),
					contentrefresh: this.$t('team.team9'),
					contentnomore: this.$t('team.team10')
				}
			}
		},
		onLoad() {
			this.getData()
		},
		onReachBottom() {
			this.page++
			this.status = 'loading'
			this.getData()
		},
		methods:{
			getData(){
				uni.showToast({
					title:'loading...',
					icon:'none'
				})
				this.$api.team({
					type: this.type,
					page: this.page,
					size: this.size
				}).then(res=>{
					if(res.code==200){
						this.teamlist = [...this.teamlist,...res.data.list.data];
						this.count = res.data.count;
						if(res.data.list.data.length<this.size){
							this.status = 'no-more'
						}else{
							this.status = 'more'
						}
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			sellv(type){
				this.type = type
				this.teamlist =[]
				this.getData()
			}
		}
	}
</script>

<style lang="scss">
.container{
	background-color: #F0F3F7;
	margin: 0 28rpx;
	border-radius: 16rpx;
	.head{
		box-shadow: 0px 2rpx 5rpx rgba(0, 0, 0, 0.16);
		border-radius: 35rpx;
		background-color: #FFFFFF;
		padding: 44rpx 23rpx;
		display: flex;
		justify-content: space-between;
		.lv{
			background: #D66A28;
			box-shadow: 0px 2rpx 5rpx rgba(0, 0, 0, 0.16);
			border-radius: 28rpx;
			font-weight: bold;
			font-size: 32rpx;
			color: #FFFFFF;
			padding: 26rpx 0rpx;
			width: 177rpx;
		}
		.nub{
			font-size: 32rpx;
			font-weight: bold;
			color: #000000;
			margin-top: 21rpx;
		}
	}
	.tlist{
		margin-top: 19rpx;
		.title{
			transition: all 0.3s;
			display: flex;
			justify-content: space-between;
			.title-lv,.title-user,.title-time,.title-money{
				width: 25%;
				text-align: left;
				font-size: 28rpx;
				font-weight: bold;
				color: $uni-color-primary;
				border-bottom: 1px #ebeef5 solid;
			}
			.title-lv{
				text-align: left;
			}
			.title-time{
				width: 25%;
				text-align: center;
			}
			.title-money{
				text-align: center;
			}
			
		}
		.itembox{
			height: 800rpx;
			overflow-y: auto;
			&::-webkit-scrollbar {display:none}
		}
		.titem{
			display: flex;
			align-items: center;
			// justify-content: space-between;
			padding: 20rpx 0;
			border-bottom: 2rpx solid rgba(112, 112, 112, 0.3);
			.item-lv {
				
				width: 18%;
				text{
					background: #D66A28;
					color: #FFFFFF;
					font-size: 28rpx;
					font-weight: bold;
					padding: 4rpx 12rpx;
					border-radius: 4rpx;
				}
			}
			.item-user{
				text-align: left;
				width: 28%;
				font-size: 28rpx;
				// font-weight: bold;
			}
			.item-time{
				text-align: center;
				width: 29%;
				font-size: 28rpx;
				// font-weight: bold;
			}
			.item-money{
				text-align: right;
				width: 25%;
				font-size: 28rpx;
				// font-weight: bold;
			}
		}
	}
}
.text-con{
	text-align: center;
}
</style>
