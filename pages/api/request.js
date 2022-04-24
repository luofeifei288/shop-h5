// 全局请求封装
let baseUrl = http_url

const install = (api = '', type = 'GET', params = {},header={}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title:''
		})
		
		if(uni.getLocale()=='zh-Hans'){
			header = {
				'think-lang': 'cn'
			}
		}else{
			header = {
				'think-lang': uni.getLocale()
			}
		}
		
		uni.getStorage({
			key: 'token',
			success(t) {
				Object.assign(header,{ 'Authorization':t.data })
			}
		})
		
		uni.request({
			url: baseUrl + api,
			data: params,
			header: header,
			method: type
		}).then(response => {
			let [error, res] = response
			if(res.data.code==301){
				uni.navigateTo({
					url: '/pages/member/login'
				})
			}else if(res.data.code==201||res.data.code==401){
				uni.showToast({
					title: res.data.msg,
					icon: 'none'
				})
			}else{
				resolve(res.data)
			}
			uni.hideLoading()
		}).catch(error => {
			uni.hideLoading()
			let [err, res] = error
			reject(err)
		})
	})
}

export default install
