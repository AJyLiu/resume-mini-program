<template>
	<text class="picker-text" @click="open">{{ $t(pickerText) }}</text>
	<uni-popup ref="popup" type="bottom" :isMaskClick="false" class="self-uni-popup">
		<view class="popup-content">
			<picker-view v-if="isVisible" :indicator-style="indicatorStyle" :value="pickerValue" class="picker-view" :immediateChange="true" 
				@change="bindPickerChange">
				<picker-view-column>
					<view class="picker-item" v-for="item in props.pickerList" :key="item.value">
						{{ $t(item.text) }}
					</view>
				</picker-view-column>
			</picker-view>
			<view class="picker-btn-box">
				<button class="picker-btn" @tap="cancel">{{ $t('page.common.cancel') }}</button>
				<button class="picker-btn" type="primary" @tap="confirm">{{ $t('page.common.confirm') }}</button>
			</view>
		</view>
	</uni-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { OptionsType } from '@/interface/types'

const props = defineProps<{
	pickerList: OptionsType[],
	defaultValue?: number,
	isDisabled?: boolean
}>() 

const emits = defineEmits(['confirm'])

const popup = ref()
const indicatorStyle = ref<string>('height: 50px;')
const isVisible = ref<boolean>(false)
const pickerText = ref<string>(props.defaultValue || props.defaultValue === 0 ? props.pickerList[0].text : '')
const pickerValue = ref<number[]>([props.defaultValue as number])

const open = () => {
	if (props.isDisabled) {
		uni.showToast({
			title: '敬请期待',
			icon: 'none'
		})
		return
	}
	isVisible.value = true
	popup.value.open('bottom')
}

const cancel = () => {
	isVisible.value = false
	popup.value.close()
}

const confirm = () => {
	emits('confirm', pickerValue.value)
	pickerText.value = props.pickerList[pickerValue.value[0]].text
	cancel()
	
}

const bindPickerChange = (e: { detail: { value: number[] } }) => {
	pickerValue.value = e.detail.value
}

defineExpose({
	open
})
</script>

<style scoped lang="scss">
.popup-content {
	width: 100%;
	background-color: #ffffff;
	.picker-view {
		width: 100%;
		max-height: 600rpx;
		min-height: 300rpx;
		.picker-item {
			text-align: center;
			line-height: 50px;
		}
	}

	.picker-btn-box {
		height: 180rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.picker-btn {
			margin: 0 25rpx;
			width: 250rpx;
		}
	}
}
.self-uni-popup {
	:deep(uni-transition:nth-child(2) > view) {
		padding-bottom: 0 !important;
	}
}
</style>