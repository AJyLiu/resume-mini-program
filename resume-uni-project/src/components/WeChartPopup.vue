<template>
	<uni-icons type="weixin" size="26" class="add-person" color="#1aad19" @click="openDetail"></uni-icons>
	<uni-popup ref="detailProp" class="self-popup" background-color="#fff" :is-mask-click="false" type='center' border-radius="10rpx">
		<image class="we-chart-img" src="../../static/weChart.jpg" mode="widthFix" :show-menu-by-longpress="true"></image>
		<view class="we-chart-desc">
			<text>长按识别二维码</text>
		</view>
		<button class="close-btn" @click="closeDetail">取消</button>
	</uni-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const detailProp = ref()

const openDetail = () => {
	detailProp.value.open()
}
const closeDetail = () => {
	detailProp.value.close()
}
</script>

<style scoped lang="scss">
.add-person {
	margin-left: 12rpx;
}
.self-popup {
	.we-chart-img {
		width: 600rpx;
		border-radius: 10rpx;
		margin: 40rpx 20rpx 0rpx 20rpx;
	}
	.we-chart-desc {
		color: $uni-text-color-grey;
		text-align: center;
		font-size: 28rpx;
	}
	.close-btn {
		margin: 40rpx;
	}
}
</style>