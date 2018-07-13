<template>
	<div>
		<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
			<div slot="load-more"></div>
			<div class="top base-blue">
				<div class="location">
					<img src="../../assets/location-icon.png" class="base-icon location-icon" />
					<span>浙江工业大学zcx</span>
					<img src="../../assets/arrowdown-icon.png" class="base-icon arrowdown-icon" />
				</div>
				<div class="search-div">
					<img src="../../assets/search-icon.png" class="base-icon" />
					<span>搜索饿了吗商家、商店名称</span>
				</div>
			</div>
		</v-scroll>
	</div>
</template>

<script>
	import Scroll from './../../components/zscroll.vue';

	export default {
		components: {
			'v-scroll': Scroll
		},
		data() {
			return {
				listdata: [], // 下拉更新数据存放数组
				downdata: [] // 上拉更多的数据存放数组
			}
		},
		mounted: function() {
			this.getList();
		},
		methods: {
			getList() {
				for(let i = 0; i < 50; i++) {
					let item = {
						'name': i
					}
					this.listdata.push(item)
				}
			},
			onRefresh(done) {
				done();
			},
			onInfinite(done) {
				console.log("111")
				done();
			}
		},

	}
</script>

<style scoped>
	.yo-scroll {
		top: 0px !important;
		bottom: 50px !important;
		background-color: #FFFFFF;
	}
	
	.top {
		height: 1rem;
		padding: .1rem;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.location {
		height: .345rem;
		display: table-cell;
	}
	
	.location span {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin: 0 .05rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: .55rem;
		display: inline-block;
		font-size: .2rem;
	}
	
	.search {
		height: .6rem;
	}
	
	.location img {
		vertical-align: middle;
	}
	
	.arrowdown-icon {
		width: .15rem;
	}
	
	.search-div {
		background-color: #FFFFFF;
		width: 100%;
		height: .36rem;
		margin-top: .05rem;
		border-radius: .025rem;
		text-align: center;
		line-height: 0.36rem;
	}
	.search-div span{
		color: #999999;
		font-size: .16rem;
	}
</style>