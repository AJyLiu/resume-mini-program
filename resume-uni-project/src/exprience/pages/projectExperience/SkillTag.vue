<template>
	<text v-if="typeof skills === 'string'">
		{{ skills }}
	</text>
	<view v-else class="skill-box">
		<view v-for="(item, index) in skills" :key="index" class="skill-tag">
			<text>{{ item }}</text>
		</view>
	</view>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
	skills: string | string[];
}>(), {
	skills: ''
})
</script>

<style scoped lang="scss">
.skill-box {
	display: flex;
	flex-wrap: wrap;
	.skill-tag {
		margin: 6rpx 12rpx;
		border: 1px solid $uni-color-success;
		border-radius: 6rpx;
		color: $uni-color-success;
		padding: 4rpx 8rpx;
	}
}

</style>