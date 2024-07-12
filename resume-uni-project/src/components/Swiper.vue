<template>
	<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		<swiper-item>
			<image style="width: 100%; height: 100%;" src="../../static/school1.jpg" :mode="imageMode"></image>
		</swiper-item>
		<swiper-item>
			<image style="width: 100%; height: 100%;" src="../../static/school2.jpg" :mode="imageMode"></image>
		</swiper-item>
		<swiper-item>
			<image style="width: 100%; height: 100%;" src="../../static/school3.png" :mode="imageMode"></image>
		</swiper-item>
		<swiper-item>
			<image style="width: 100%; height: 100%;" src="../../static/school4.jpg" :mode="imageMode"></image>
		</swiper-item>
	</swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const indicatorDots = ref<boolean>(true)
const autoplay = ref<boolean>(true)
const interval = ref<number>(2000)
const duration = ref<number>(500)
const imageMode = ref<string>('aspectFill')
</script>

<style scoped lang="scss">
.swiper {
	height: 300rpx;
	width: 690px;
	width: 100%;
}
</style>