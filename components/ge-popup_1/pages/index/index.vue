<template>
	<view>
		<view v-if="isMask">
			<view v-if="index==1">
				<popup type="1" content="为了您的账号安全，请绑定微信，绑定后可快捷登录" @close="closeMask()"></popup>
			</view>
			<view v-else-if="index==2">
				<popup type="2" :money="money" @close="closeMask()"></popup>
			</view>
			<view v-else-if="index==3">
				<popup type="3" :title="title" :content="content" @close="closeMask()"></popup>
			</view>
			<view v-else-if="index==4">
				<popup type="4" :version="version" :content="desc" @close="closeMask()"></popup>
			</view>
			<view v-else-if="index==5">
				<popup type="5" :version="version" :content="desc" @close="closeMask()" @eventClick="update()"></popup>
			</view>
		</view>
	</view>
</template>

<script>
	import popup from "@/components/ge-popup.vue";
	export default {
		components: {
			popup
		},
		data() {
			return {
				isMask:true,//是否显示弹窗
				index:5,//显示第几个弹窗
				money:99.99,//红包金额
				title:'公告',
				content:'公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容',
				version:'1.0',
				desc:'1.更新内容更新内容 <br/> 2.更新内容更新内容 <br/>2.更新内容更新内容'
			}
		},
		onLoad() {

		},
		methods: {
			closeMask(){//关闭弹窗
				this.isMask=false;
			},
			update(){
				console.log('更新操作');
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
