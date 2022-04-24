#### 几个弹窗样式
1. 在做一个项目，里面搞了好多弹窗，烦。。。
2. 在写了几个弹窗样式之后，提取做成了组件
3. 通过type进行区分使用那一个弹窗样式 4和5是两种不同样式的更新提示弹窗

#### 使用方式
#### 在需要弹窗的页面引入
```javascript
import popup from "@/components/ge-popup.vue";
```
```javascript
components: {  
    popup  
},
```
页面中通过下面方式调用
```html
<popup type="1" @close="closeMask()"></popup>
```
示例
```html
		<view v-if="isMask">
			<view v-if="index==1">
				<popup type="1" @close="closeMask()"></popup>
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
		<script>
			import popup from "@/components/ge-popup.vue";
			export default {
				components: {
					popup
				},
				data() {
					return {
						isMask:true,//是否显示弹窗
						index:1,//显示第几个弹窗
						money:99.99,//红包金额
						title:'公告',
						content:'公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容',
						version:'1.0',
						desc:'1.更新内容更新内容 <br/> 2.更新内容更新内容 <br/>2.更新内容更新内容'
					}
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
```
#### Value 传值说明
```html
	type：用于区分弹窗样式 1.绑定微信的提示弹窗 2.红包弹窗  3.信息提示弹窗  4.更新提示弹窗  5.更新提示弹窗
	money:红包弹窗是需要传入的红包金额
	title:信息提示窗口的标题
	content:弹窗要展示的内容
```