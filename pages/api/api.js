import request from "./request.js"

const http = {
	// 活动页面
	activeIndex(params){
		return request('/active/index','GET',params)
	},
	// 点击签到
	gosign(params){
		return request('/active/gosign','GET',params)
	},
	// 充值返佣
	testRecharge(params){
	    return request('/active/testRecharge','GET',params)	
	},
	// 邀请返佣
	goinvate(params){
	    return request('/active/goinvate','POST',params)	
	},
	// 判断token
	valiToken(params){
		return request('/sign/valiToken','POST',params)
	},
	// 简介
	getIntroduction(params){
		return request('/main/getIntroduction','GET',params)
	},
	// 认证
	getCertification(params){
		return request('/main/getCertification','POST',params)
	},
	// 登陆
	passwordLogin(params) {
		return request('/sign/login','POST',params)
	},
	// 验证码
	sendsms(params) {
		return request('/sendsms/index','POST',params)
	},
	// 注册
	register(params) {
		return request('/sign/register','POST',params)
	},
	// 找回密码
	forget(params) {
		return request('/sign/forget','POST',params)
	},
	// 首页
	home(params) {
		return request('/main/index','POST',params)
	},
	// 订单列表
	orderlist(params) {
		return request('/order/getList','GET',params)
	},
	// 商品列表
	shoplist(params) {
		return request('/shop/index','GET',params)
	},
	// 获取商品
	getshop(params) {
		return request('/shop/getshop','POST',params)
	},
	// 完成订单
	overorder(params) {
		return request('/shop/overorder','POST',params)
	},
	// 分享
	share(params) {
		return request('/share/index','GET',params)
	},
	// 我的
	mine(params) {
		return request('/users/index','GET',params)
	},
	// 明细
	balancelog(params) {
		return request('/users/balancelog','GET',params)
	},
	// 消息
	messagelist(params) {
		return request('/message/getlist','POST',params)
	},
	// 消息详情
	getonemessage(params){
		return request('/message/getonemessage','GET',params)
	},
	// 设置
	setting(params) {
		return request('/users/setting','POST',params)
	},
	// 设置1
	setting1(params) {
		return request('/users/setting1','POST',params)
	},
	// 上传
	uploadDNI(params) {
		return request('/users/uploadDNI','POST',params)
	},
	// 获取设置
	getset(params) {
		return request('/users/setting','GET',params)
	},
	// 团队
	team(params) {
		return request('/team/index','POST',params)
	},
	// 团队
	kefu(params) {
		return request('/kefu/index','GET',params)
	},
	// 获取提现账号
	getAccount(params) {
		return request('/deposit/getAccount','POST',params)
	},
	// 提现
	goDeposit(params) {
		return request('/deposit/goDeposit','POST',params)
	},
	// 充值页面
	rechargeList(params) {
		return request('/recharge/getList','GET',params)
	},
	//充值
	goRecharge(params) {
		return request('/recharge/goRecharge','POST',params)
	}
}
export default http
