<template>
	<div>
		<div class="rollback" v-if="rollseen" @click="rollback">
			<img src="../../../static/img/huigunzhiding.png" />
		</div>
		<v-scroll id="myscroll" :on-refresh="onRefresh" :on-infinite="onInfinite">
			<div slot="load-more"></div>
			<div class="top base-blue">
				<div class="location">
					<img src="../../../static/img/location-icon.png" class="base-icon location-icon" />
					<span>浙江工业大学zcx</span>
					<img src="../../../static/img/arrowdown-icon.png" class="base-icon arrowdown-icon" />
				</div>
				<div  class="search-div">
					<img src="../../../static/img/search-icon.png" class="base-icon" />
					<span>搜索饿了吗商家、商店名称</span>
				</div>
			</div>
			<v-gridview  :gridviewList="gridviewList">
				<div v-for="(value,key,index)  in gridviewList" :slot="key | dir" class="gridview">
					<div class="gridview-line">
						<div v-for="(value2,key2,index2) in value.list">
							<img :src="value2.url" class="gridview-img" />
							<p>{{value2.name}}</p>
						</div>
					</div>
				</div>
			</v-gridview>
			<div class="recommend">
				<div v-for="(value,key,index) in recommendList" class="recommend-item">
					<div v-html="value.title"></div>
					<div v-html="value.desc"></div>
					<div v-html="value.extra"></div>
					<div v-html="value.imginfo"></div>
				</div>
			</div>
			<div class="split">
				一 推荐商家 一
			</div>
		</v-scroll>
	</div>
</template>

<script>
	import Scroll from './../../components/zscroll.vue';
	import GridView from './../../components/gridview.vue';

	export default {
		components: {
			'v-scroll': Scroll,
			'v-gridview': GridView
		},
		filters: {
			dir: function(val) {
				return 'zcx_' + val;
			}
		},
		data() {
			return {
				rollseen: true,// 回滚按钮是否可见
				listdata: [], // 下拉更新数据存放数组
				downdata: [], // 上拉更多的数据存放数组
				//横向菜单数据
				gridviewList: [{
					list: [{
						url: "../../static/img/meishi.png",
						name: "美食"
					}, {
						url: "../../static/img/shangchaobianli.png",
						name: "商超便利"
					}, {
						url: "../../static/img/guoshushengxian.png",
						name: "果蔬生鲜"
					}, {
						url: "../../static/img/xiawucha.png",
						name: "下午茶"
					}, {
						url: "../../static/img/yiyaojiankang.png",
						name: "医药健康"
					}, {
						url: "../../static/img/dapaiwuzhe.png",
						name: "大牌五折"
					}, {
						url: "../../static/img/langmanxianhua.png",
						name: "浪漫鲜花"
					}, {
						url: "../../static/img/malatang.png",
						name: "麻辣烫"
					}, {
						url: "../../static/img/difangcaixi.png",
						name: "地方菜系"
					}, {
						url: "../../static/img/pisayimian.png",
						name: "批萨意面"
					}, ]
				}, {
					list: [{
						url: "../../static/img/difangxiaochi.png",
						name: "地方小吃"
					}]
				}],
				//热门推荐数据
				recommendList: [{
					title: '<div style="color: #000000;font-weight: bold;font-size: .16rem;">品质套餐</div>',
					desc: '<div style="color: #AAAAAA;font-size: .12rem;">搭配齐全吃的好</div>',
					extra: '<div style="color: #EC971F;font-size: .12rem;">立即抢购 ></div>',
					imginfo: '<div style="text-align: right;"><img style="width:1.2rem;height:0.8rem;" src="../../../static/img/pinzhitaocan.png" class="recommend-img"/></div>'
				}, {
					title: '<div style="color: #e81919;font-weight: bold;font-size: .16rem;">限量抢购</div>',
					desc: '<div style="color: #AAAAAA;font-size: .12rem;">超值美味9.9元起</div>',
					extra: '<div style="color: #EC971F;font-size: .12rem;"><span style="color:#e81919">1925人</span>正在抢 ></div>',
					imginfo: '<div style="text-align: right;"><img style="width:1.2rem;height:0.8rem;" src="../../../static/img/xianliangqianggou.png" class="recommend-img"/></div>'
				}]

			}
		},
		mounted: function() {
			window.addEventListener('scroll', this.handleScroll,true)
		},
		methods: {
			rollback(){
				console.log('回滚操作...');
			},
			handleScroll() {
			    console.log(document.getElementById("myscroll").scrollTop)
			},
			onRefresh(done) {
				console.log('下载刷新')
				done();
			},
			onInfinite(done) {
				//console.log("上拉加载")
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
		font-size: .16rem;
	}
	
	.search {
		height: .6rem;
	}
	
	.location img {
		vertical-align: middle;
	}
	
	.arrowdown-icon {
		width: .12rem;
		position: relative;
		top: .02rem;
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
	
	.search-div span {
		color: #999999;
		font-size: .14rem;
		position: relative;
		top: -.025rem;
	}
	
	.gridview {
		padding: .1rem 0;
	}
	
	.gridview-line {
		height: 1.5rem;
		display: flex;
		flex-wrap: wrap;
	}
	
	.gridview-line p {
		font-size: .12rem;
	}
	
	.gridview-line div {
		width: 20%;
		height: .75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	
	.gridview-img {
		width: .45rem;
		height: .45rem;
	}
	
	.gridvie-dotlist {
		bottom: -.2rem !important;
	}
	
	.recommend {
		height: 1.4rem;
	}
	
	.recommend-item {
		display: inline-block;
		width: 49%;
		height: 100%;
		padding: .18rem 0 0 .25rem;
	}
	
	.split {
		width: 100%;
		text-align: center;
		font-size: .14rem;
		margin-top: .25rem;
		color: #000;
	}
	
	.rollback {
		position: fixed;
		bottom: ;
		z-index: 9999;
		right: 5%;
		top: 80%;
		padding: .1rem;
		border-radius: 50%;
		border: 1px solid #707070;
		width: .45rem;
		height: .45rem;
		background-color: #FFFFFF;
	}
	
	.rollback img {
		width: 100%;
		height: 100%;
	}
</style>