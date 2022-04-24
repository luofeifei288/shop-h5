<template>
	<view class="content" :style="bgcolor">
		<view class="logo">
			<image src="../../static/logo.png" mode=""></image>
			<!-- <view class="name">LOGO</view> -->
		</view>
		<view class="right">
			<view class="lag" :style="{color:type==1?'#000000':'#FFFFFF',background:type==1?'#FFFFFF':'##C95D19'}"
				@click="showlag">
				<!-- {{ applicationLocale.toUpperCase() }} -->
				<!-- <view class="elsel">11</view> -->
				{{ lang.toUpperCase() }}
			</view>
			
			<span class="iconfont icon-message xx" :style="{color:type==1?'#FFFFFF':'#000000'}"
				@click="messagelist()" v-if="isshow"></span>
			
			<span class="iconfont icon-kefu kf" :style="{color:type==1?'#FFFFFF':'#000000'}" @click="getkefu()" v-if="isshow"></span>
		</view>
	</view>
</template>

<script>
	import elSelect from '../../components/ep-select/ep-select.vue'
	export default {
		components: {
			elSelect
		},
		data() {
			return {
				type: 0,
			};
		},
		computed:{
			lang:function(){
				if(this.$i18n.locale=='zh-Hans'){
					return 'cn' ;
				}
				return this.$i18n.locale;
			}
		},
		props:{
			"isshow":{
				type: Boolean,
				default:true
			},
			"bgcolor":{
				type:Object,
				default:()=>{
					return {
						'background-color':'#FFFFFF'
					}
				}
			}
		},
		
		created() {
			if (this.$route.path.indexOf('mine') != -1 || this.$route.path.indexOf('invest') != -1) {
				this.type = 1
			} else {
				this.type = 0
			}

			let systemInfo = uni.getSystemInfoSync();
			this.systemLocale = systemInfo.language;
			
			uni.onLocaleChange((e)=>{
				if(e.locale=='zh-Hans'){
					this.$emit('kebab-case')
				}else{
					this.$emit('kebab-case')
				}
			})
			
		},
		methods: {
			// 选择多语言
			showlag(e) {
				let _this = this
				uni.showActionSheet({
					itemList: ['English', 'Spain','中文'],
					success: function(res) {
						if(res.tapIndex == 0){
							uni.setLocale('en');
							_this.$i18n.locale = 'en'
		
						}else if(res.tapIndex == 1){
							uni.setLocale('es');
							_this.$i18n.locale = 'es'
		
						}else if(res.tapIndex == 2){
							uni.setLocale('zh-Hans');
							_this.$i18n.locale = 'zh-Hans'
		
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			// 获取客服地址
			getkefu() {
				this.$api.kefu({}).then(res => {
					if (res.code == 200) {
						location.href=res.data.url
					}
				})
			},
			// 消息列表跳转
			messagelist() {
				uni.navigateTo({
					url: '../main/message'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		justify-content: space-between;
		position: fixed;
		background-color: #FFFFFF;
		// width: 694rpx;
		top: 0;
		left: 0;
		right: 0;
		padding: 20rpx 28rpx;
		z-index: 9;

		.logo {
			display: flex;
			align-items: center;

			image {
				width: 82rpx;
				height: 72rpx;
				// border-radius: 50%;
			}

			.name {
				font-size: 32rpx;
				margin-left: 14rpx;
			}
		}

		.right {
			display: flex;
			align-items: center;

			.lag {
				background: #C95D19;
				opacity: 1;
				border-radius: 175rpx;
				font-size: 32rpx;
				color: #FFFFFF;
				padding: 4rpx 12rpx;
			}

			.xx {
				font-size: 44rpx;
				margin-left: 23rpx;
			}

			.kf {
				font-size: 44rpx;
				margin-left: 23rpx;
			}
		}
	}
</style>
