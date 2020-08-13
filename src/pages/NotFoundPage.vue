<template>
	<div>
		<h2>Not Found Page</h2>
		<ul class="set">
			<li class="white b" :class="{ active: isActive1 }">
				<span class="text">페</span>
			</li>
			<li class="black as"></li>
			<li class="white a" :class="{ active: isActive2 }">
				<span class="text">이</span>
			</li>
			<li class="black gs"></li>
			<li class="white g" :class="{ active: isActive3 }">
				<span class="text">지</span>
			</li>
			<li class="black fs"></li>
			<li class="white f" :class="{ active: isActive4 }">
				<span class="text">가</span>
			</li>
			<li class="white e" :class="{ active: isActive5 }">
				<span class="text">없</span>
			</li>
			<li class="black ds"></li>
			<li class="white d" :class="{ active: isActive6 }">
				<span class="text">어</span>
			</li>
			<li class="black cs"></li>
			<li class="white c" :class="{ active: isActive7 }">
				<span class="text">용</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive1: false,
			isActive2: false,
			isActive3: false,
			isActive4: false,
			isActive5: false,
			isActive6: false,
			isActive7: false,
		};
	},
	created() {
		this.playPiano();
	},
	methods: {
		playPiano() {
			// keyboard.forEach(v => {
			// 	v.classList.add('active');
			// });
			this.active(800);
			// class 에 속성을 추가하는 v-bind를 만들고
			setInterval(() => {
				this.active();
			}, 5000);
		},
		active() {
			setTimeout(() => {
				this.isActive1 = true;
			}, 800);
			setTimeout(() => {
				this.isActive1 = false;
				this.isActive2 = true;
			}, 1500);
			setTimeout(() => {
				this.isActive2 = false;
				this.isActive3 = true;
			}, 2000);
			setTimeout(() => {
				this.isActive3 = false;
				this.isActive4 = true;
			}, 2500);
			setTimeout(() => {
				this.isActive4 = false;
				this.isActive5 = true;
			}, 3000);
			setTimeout(() => {
				this.isActive5 = false;
				this.isActive6 = true;
			}, 3500);
			setTimeout(() => {
				this.isActive6 = false;
				this.isActive7 = true;
			}, 4000);
			setTimeout(() => {
				this.isActive7 = false;
			}, 5000);
		},
	},
};
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
}

body {
	margin: 0;
	background: #222;
}

ul {
	height: 18.875rem;
	width: 34em;
	// width: 39em;
	margin: 5rem auto;
	padding: 3rem 0 0 3em;
	position: relative;
	border: 1px solid #160801;
	border-radius: 1rem;
	background: linear-gradient(
			to bottom right,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0)
		),
		url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png);
	box-shadow: 0 0 50px rgba(0, 0, 0, 0.5) inset,
		0 1px rgba(212, 152, 125, 0.2) inset, 0 5px 15px rgba(0, 0, 0, 0.5);
}

li {
	margin: 0;
	padding: 0;
	list-style: none;
	position: relative;
	float: left;

	text-align: center;

	display: flex;
	align-items: flex-end;
	justify-content: center;
	text-align: center;
	// margin-bottom: 10px;
	padding-bottom: 10px;

	.text {
		font-weight: bold;
		font-size: $font-size-md;
	}
}

ul .white {
	height: 16em;
	width: 4em;
	z-index: 1;
	border-left: 1px solid #bbb;
	border-bottom: 1px solid #bbb;
	border-radius: 0 0 5px 5px;
	box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
		0 0 3px rgba(0, 0, 0, 0.2);
	background: linear-gradient(to bottom, #eee 0%, #fff 100%);
}

ul .white:active {
	border-top: 1px solid #777;
	border-left: 1px solid #999;
	border-bottom: 1px solid #999;
	box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
		-5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
	background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
}

ul .white.active {
	border-top: 1px solid #777;
	border-left: 1px solid #999;
	border-bottom: 1px solid #999;
	box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
		-5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
	background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
}

.black {
	height: 8em;
	width: 2em;
	margin: 0 0 0 -1em;
	z-index: 2;
	border: 1px solid #000;
	border-radius: 0 0 3px 3px;
	box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
		0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);
	background: linear-gradient(45deg, #222 0%, #555 100%);
}

.black:active {
	box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
		0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
	background: linear-gradient(to right, #444 0%, #222 100%);
}

.a,
.g,
.f,
.d,
.c {
	margin: 0 0 0 -1em;
}

ul li:first-child {
	border-radius: 5px 0 5px 5px;
}

ul li:last-child {
	border-radius: 0 5px 5px 5px;
}
</style>
