<template>
	<nav class="mui-bar mui-bar-tab">
		<a :class="['mui-tab-item', tabActive=='index' ? 'mui-active' : '']"  @click="navClick('index')">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a :class="['mui-tab-item', tabActive=='find' ? 'mui-active' : '']"  @click="navClick('find')">
			<span class="mui-icon mui-icon-email"></span>
			<span class="mui-tab-label">发现</span>
		</a>
		<a :class="['mui-tab-item', tabActive=='order' ? 'mui-active' : '']"  @click="navClick('order')">
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">订单</span>
		</a>
		<a :class="['mui-tab-item', tabActive=='mine' ? 'mui-active' : '']"  @click="navClick('mine')">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">我的</span>
		</a>
	</nav>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				tabActive:"index"
			}
		},
		props: {},
		//v-model
		watch: {},
		methods: {
			navClick(pageName) {
				this.tabActive=pageName;
				this.$router.push({
					name: pageName
				});
			}
		},
		//定义过滤函数
		filters: {},
		//所有的v-model变化
		computed: {},
		/*
   * beforecreate : 举个栗子：可以在这加个loading事件
     created ：在这结束loading，还做一些初始化，实现函数自执行 
     mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
     beforeDestroy： 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容
   * 
   */
		created() {},
		mounted() {},
		destroyed() {}
	}
</script>

<style scoped>
    .mui-bar{
    	box-shadow: 0 0 0 #FFFFFF !important;
    	border-top: 1px solid #DDDDDD;
    }
</style>