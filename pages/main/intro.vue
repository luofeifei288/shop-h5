<template>
	<view>
		<view class="box" v-html="data"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:""
			};
		},
		onLoad(params) {
			let title = params.type
			if(title=='jianjie'){
				uni.setNavigationBarTitle({
					title:this.$t('index.chongzhi')
				})
				this.getData1()
			}
			// else if(title=='renzhen'){
			// 	uni.setNavigationBarTitle({
			// 		title:this.$t('index.tixian')
			// 	})
			// 	this.getData2()
			// }
			
		},
		methods:{
			// 简介
			getData1(){
				this.$api.getIntroduction({}).then(res=>{
					if(res.code==200){
						this.data = res.data.content
					}
				})
			},
			// 认证
			getData2(){
				this.$api.getCertification({}).then(res=>{
					if(res.code==200){
						this.data = res.data.content
					}
				})
			}
			
		}
	}
</script>

<style lang="scss">
	.box{
		/deep/ img,image{
			width: 100%!important;
		}
	}

</style>
