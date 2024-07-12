<template>
	<view class="transitionIn">
		<view class="transition-text">
			<text>刘先生</text>
			<text>Web前端开发工程师</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
.transitionIn {
	position: absolute;
	width: 100%;
	height: 100vh;
	background: linear-gradient(to bottom, #33ccff 0%, #a3bbdb 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	font-weight: bold;
	cursor: pointer;
	.transition-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: transparent;
		padding-bottom: 280rpx;
		background-image: linear-gradient(to right, #f6e58d, #eb4b4b, #ffffff, #D4BAAD);
		background-size: 300% 100%;
		background-clip: text;
		animation-name: identifier;
		animation-iteration-count: infinite;
		animation-duration: 2s;
		animation-direction: alternate;
	}
	&::before,
	&::after {
		position: absolute;
		content: "";
		width: 20%;
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 25px;
		font-weight: bold;
		background-color: #fff;
		transition: all 1.5s;
	}
	&::before {
		top: 0;
		right: 0;
		border-radius: 0 0 0 15px;
	}
	&::after {
		bottom: 0;
		left: 0;
		border-radius: 0 15px 0 0;
	}
	&::before,
	&::after {
		width: 100%;
		height: 100%;
		animation: expand 3s;
	}
	&::before {
		border-radius: 0 0 0 15px;
	}
	&::after {
		border-radius: 0 15px 0 0;
	}
	&::after {
		content: "欢迎进入";
	}
}
@keyframes expand {
	0% {
		width: 5%;
		height: 5%;
	}
	100% {
		width: 100%;
		height: 100%;
	}
}


@keyframes identifier {
	from {
		background-position: left top;
	}
	to {
		background-position: right bottom;
	}
}	
</style>