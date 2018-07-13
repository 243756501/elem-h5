<template>
	<div id="app">
		<router-view/>
		<tabbar />
	</div>
</template>

<script>
	import tabbar from './components/tabbar.vue'

	export default {
		name: 'App',
		components: {
			tabbar
		},
		data(){
			return {
				test: 100
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	#app {
		font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>