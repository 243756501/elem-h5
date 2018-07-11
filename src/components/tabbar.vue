<template>
	<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active" @click="navClick('index')">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item" @click="navClick('find')">
			<span class="mui-icon mui-icon-email"></span>
			<span class="mui-tab-label">发现</span>
		</a>
		<a class="mui-tab-item" @click="navClick('order')">
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">订单</span>
		</a>
		<a class="mui-tab-item" @click="navClick('mine')">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">我的</span>
		</a>
	</nav>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		props: {},
		watch: {},
		methods: {
			navClick(pageName) {
				this.$router.push({
					name: pageName
				});
			}
		},
		filters: {},
		computed: {},
		created() {},
		mounted() {},
		destroyed() {}
	}
</script>

<style>

</style>