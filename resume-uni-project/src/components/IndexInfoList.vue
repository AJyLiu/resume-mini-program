<template>
	<view v-for="item in props.infoList" :key="item.id" class="info-item">{{ $t(item.text) }}</view>
</template>

<script setup lang="ts">
import type { InfoType } from '../interface/types'
type Props = {
	infoList: InfoType[]
}
const props = defineProps<Props>()
</script>

<style>
.info-item {
	margin-bottom: 16rpx;
}
</style>