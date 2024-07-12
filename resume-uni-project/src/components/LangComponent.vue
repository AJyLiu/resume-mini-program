<template>
	<view class="lang-box" :class="{ 'disabled': isDisabled }">
		<label class="lang-label" @click="openPicker">{{ $t('page.language.label') }}</label>
		<SelfPicker ref="selfPickerRef" :pickerList="langArr" :isDisabled="isDisabled" :defaultValue="defaultPickerValue" class="lang-text" @confirm="bindPickerChange"></SelfPicker>
	</view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLangOptions } from './commonHooks'
import SelfPicker from './SelfPicker.vue'

const props = withDefaults(defineProps<{
	isDisabled: boolean
}>(), {
	isDisabled: false
}) 


const { locale } = useI18n()
const lang = ref<string>('')
const langArr = useLangOptions()
const selfPickerRef = ref<InstanceType<typeof SelfPicker>>()

const defaultPickerValue = computed(() => locale.value === 'en' ? 1 : 0)

const bindPickerChange = (val: number[]) => {
	lang.value = langArr.value[val[0]].value
	uni.setLocale(lang.value)
	locale.value = lang.value
}

const openPicker = () => {
	if (selfPickerRef.value && !props.isDisabled) {
		selfPickerRef.value.open()
		return
	}
	uni.showToast({
		title: '敬请期待',
		icon: 'none'
	})
}
</script>

<style scoped lang="scss">
	.lang-box {
		display: flex;
		font-size: 32rpx;
	}
	.lang-label {
		margin-right: 10rpx;
	}
	
	.disabled {
		color: $uni-text-color-disable !important;
	}
</style>