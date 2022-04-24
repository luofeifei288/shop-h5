<template>
	<view class="container">
		<view class="time">
			<view class="example-body" style="width: 500rpx;">
				<uni-datetime-picker :start-placeholder="$t('detail.detail1')" :end-placeholder="$t('detail.detail2')" v-model="range" type="daterange" @change="seldata" @maskClick="maskClick" />
			</view>
			<button type="default" @click="searchData">{{ $t('detail.detail3') }}</button>
		</view>
		<view class="table">
			<view class="seltype">
				<view class="ls">
					<text :class="index==1?'active':''" @click="seltypefun(1)">{{ $t('detail.detail4') }}</text>
				</view>
				<view class="cz">
					<text :class="index==2?'active':''" @click="seltypefun(2)">{{ $t('detail.detail5') }}</text>
				</view>
				<view class="tx">
					<text :class="index==3?'active':''" @click="seltypefun(3)">{{ $t('detail.detail6') }}</text>
				</view>
			</view>
			<uni-table stripe emptyText="">
				<uni-tr>
					<uni-th align="center" width="196rpx"
						style="font-size: 28rpx;font-weight: bold;color: #000000;background: #F0F3F7;">{{ $t('detail.detail7') }}</uni-th>
					<uni-th align="center" width="196rpx"
						style="font-size: 28rpx;font-weight: bold;color: #000000;background: #F0F3F7;">{{ $t('detail.detail8') }}</uni-th>
					<uni-th align="center" width="196rpx"
						style="font-size: 28rpx;font-weight: bold;color: #000000;background: #F0F3F7;">{{ $t('detail.detail9') }}</uni-th>
				</uni-tr>
				<uni-tr v-for="(item,index) in dataitem">
					<uni-td align="center" style="font-size: 25rpx;color: #000000;background: #F0F3F7;">
						{{ item.create_time }}
					</uni-td>
					<uni-td align="center" style="font-size: 25rpx;color: #000000;background: #F0F3F7;">
						{{ item.num }}
					</uni-td>
					<uni-td :class="ctime(item.type)" align="center" style="font-size: 25rpx;background: #F0F3F7;">
						{{ item.type_name }}
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<uni-load-more :status="status" :content-text="contentText" @clickLoadMore='clickLoadMore'></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				range: [],
				index: '1',
				dataitem:[],
				starttime: '',
				endtime: '',
				status: 'more',
				page: 1,
				size: 10
			};
		},
		onLoad() {
			this.getDetail()
		},
		onReachBottom() {
			
		},
		methods: {
			clickLoadMore(e){
				this.page++
				this.status = 'loading'
				this.getDetail()
			},
			maskClick(e) {
				console.log('maskClick事件:', e);
			},
			seltypefun(i){
				this.dataitem = []
				this.page = 1
				this.index = i
				this.getDetail()
			},
			seldata(res){
				this.starttime= res[0]
				this.endtime= res[1]
			},
			searchData(){
				this.dataitem = []
				this.page = 1
				this.getDetail()
			},
			//明细列表
			getDetail() {
				this.$api.balancelog({
					page: this.page,
					size: this.size,
					starttime: this.starttime,
					endtime: this.endtime,
					type: this.index
				}).then(res=>{
					if(res.code==200){
						this.dataitem = [...this.dataitem,...res.data.data]
						if(res.data.data.length<10){
							this.status = 'no-more'
						}else{
							this.status = 'more'
						}
					}
				})
			}
		},
		computed:{
			ctime() {
				return function(v){
					if(v==1){
						return 'c-029802'
					}else if(v==5){
						return 'c-D26827'
					}else if(v==7){
						return 'c-000000'
					}else if(v==3){
						return 'c-FF0000'
					}
				}
			},
			contentText() {
				return {
					contentdown: this.$t('detail.detail10'),
					contentrefresh: this.$t('detail.detail11'),
					contentnomore: this.$t('detail.detail12')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.time {
		display: flex;
		align-items: center;
		border-radius: 18rpx;
		background: #F0F3F7;
		padding: 40rpx 30rpx;

		.example-body {
			box-shadow: 0px 2rpx 5rpx rgba(0, 0, 0, 0.16);
			border-radius: 11rpx;
		}

		button {
			box-shadow: 0px 2rpx 5rpx rgba(0, 0, 0, 0.16);
			border-radius: 11rpx;
			background: #D26827;
			width: 152rpx;
			height: 66rpx;
			line-height: 66rpx;
			color: #FFFFFF;
			font-size: 28rpx;
			font-weight: bold;
			border: none;
			margin: 0 32rpx;
		}
	}

	.table {
		margin-top: 18rpx;
		width: 694rpx;
		border-radius: 18rpx;
		background: #F0F3F7;
		overflow: hidden;
		.seltype {
			display: flex;
			border-bottom: 2rpx solid rgba(#707070, 0.14);
			.cz,.tx,.ls {
				width: 33.3%;
				text-align: center;
				color: rgba(0, 0, 0, 0.47);
				font-weight: bold;
				text {
					display: inline-block;
					padding: 32rpx 0 9rpx;
				}
				.active{
					color: #D66A28;
					&::after {
						content: '';
						width: 35rpx;
						height: 7rpx;
						display: block;
						margin: 0 auto;
						background-color: #CE6626;
						border-radius: 175rpx;
						position: relative;
						bottom: -9rpx;
					}
				}
			}
		}
	}
	.c-029802{
		color: #029802;
	}
	.c-D26827{
		color: #D26827;
	}
	.c-000000{
		color: #000000;
	}
	.c-FF0000{
		color: #FF0000;
	}
</style>
