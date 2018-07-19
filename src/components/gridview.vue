<template>
	<div class="main">
		<div id="gridView" class="gridview">
			<div v-for="(value,key,index) in gridviewList" class="gridview-item" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
				<slot :name="key | dlt"></slot>
			</div>
		</div>
		<div class="gridvie-dotlist">
			<div v-for="(value,key,index)  in gridviewList" :class="['gridvie-dot',itemIndex== key ? 'dot-active' : '' ]"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				startX: 0,
				moveX: 0,
				asp: 1,
				mesdis: 0,
				distance: 0,
				itemIndex: 0,
				eleft: 0,
				obj: null,
				objArray: null,
				countObj: null,
				test: null
			}
		},
		created() {

		},

		props: [
			'gridviewList'
		],
		filters: {
			dlt: function(val) {
				return 'zcx_' + val;
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				this.itemNum = document.getElementsByClassName('gridview-item').length;
				this.obj = document.getElementsByClassName('gridview-item')[0];
				this.objArray = document.getElementsByClassName('gridview-item');
				this.$parent.m = 1111;
			})
		},
		methods: {
			moveAnimation(type) {
				this.eleft = this.itemIndex * this.obj.offsetWidth;
				let a = 1;
				this.countObj = setInterval(() => {
					this.asp += a;
					a += 5;
					if(Math.abs(this.distance) > this.asp) {
						if(type == '1') {
							if((this.obj.offsetWidth - Math.abs(this.distance)) > this.asp) {
								Array.prototype.forEach.call(this.objArray, (e) => {
									e.style.left = -this.eleft + this.distance + this.asp + "px";
								});
							}
						} else if(type == '2') {
							Array.prototype.forEach.call(this.objArray, (e) => {
								e.style.left = -this.eleft + this.distance - this.asp + "px";
							});
						} else if(type == '3') {
							if((this.obj.offsetWidth - Math.abs(this.distance)) > this.asp) {
								Array.prototype.forEach.call(this.objArray, (e) => {
									e.style.left = -this.eleft + this.distance - this.asp + "px";
								});
							}
						} else if(type == '4') {
							Array.prototype.forEach.call(this.objArray, (e) => {
								e.style.left = -this.eleft + this.distance + this.asp + "px";
							});
						}
					} else {
						if(type == '1') {
							this.itemIndex--;
							this.eleft = this.itemIndex * this.obj.offsetWidth;
							Array.prototype.forEach.call(this.objArray, (e) => {
								e.style.left = -this.eleft + "px";
							});
						} else if(type == '2') {
							Array.prototype.forEach.call(this.objArray, (e) => {
								e.style.left = -this.eleft + "px";
							});
						} else if(type == '3') {
							this.itemIndex++;
							this.eleft = this.itemIndex * this.obj.offsetWidth;
							Array.prototype.forEach.call(this.objArray, (e) => {
								e.style.left = -this.eleft + "px";
							});
						} else if(type == '4') {
							Array.prototype.forEach.call(this.objArray, (e) => {
								e.style.left = -this.eleft + "px";
							});
						}
						clearInterval(this.countObj)
						this.asp = 1;
					}
				}, 10);
			},
			touchStart(e) {

				this.startX = e.targetTouches[0].pageX;
				this.distance = 0;
			},
			touchMove(e) {
				this.moveX = e.targetTouches[0].pageX;
				this.distance = this.moveX - this.startX;
				if((this.itemIndex >= (this.itemNum - 1) && this.distance < 0) || (this.itemIndex == 0 && this.distance > 0)) {
					return;
				}
				Array.prototype.forEach.call(this.objArray, (e) => {
					e.style.left = this.distance - this.itemIndex * this.obj.offsetWidth + "px";
				});
			},
			touchEnd(e) {
				this.eleft = 0;
				if(this.distance > 0) {
					if(this.itemIndex == 0) {
						return;
					}
					//向左滑动
					if(Math.abs(this.distance) > (this.obj.offsetWidth) / 2) {
						this.moveAnimation('1');
					} else {
						this.moveAnimation('2');
					}
				} else {
					if(this.itemIndex >= (this.itemNum - 1)) {
						return;
					}
					//向右滑动
					if(Math.abs(this.distance) > (this.obj.offsetWidth) / 2) {
						this.moveAnimation('3');
					} else {
						this.moveAnimation('4');
					}
				}
			}
		}
	}
</script>

<style scoped>
	.main {
		position: relative;
	}
	
	.gridview {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		height: 1.5rem;
		font-size: 0;
		letter-spaceing: -4px;
	}
	
	.gridview-item {
		display: inline-block;
		width: 100%;
		height: 1.5rem;
		position: relative;
		letter-spacing: 0 !important;
		font-size: .12rem;
		padding: 0 0 .15rem 0;
	}
	
	.gridvie-dotlist {
		width: 100%;
		height: .2rem;
		line-height: .2rem;
		text-align: center;
	}
	
	.gridvie-dot {
		display: inline-block;
		border-radius: 50%;
		height: .08rem;
		width: .08rem;
		background-color: #AAAAAA;
		margin: 0 .05rem;
	}
	
	.dot-active {
		background-color: #333333 !important;
	}
</style>