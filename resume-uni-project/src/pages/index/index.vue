<template>
	<StartPage v-if="showTransition"></StartPage>
	<LangComponent v-if="!showTransition" class="lang-component" :is-disabled="true"></LangComponent>
	<view v-if="!showTransition" class="content" :style="{ '--top': marginTop, '--bottom': marginBottom }" >
		<image class="logo-img" src="/static/avatar.png" :fade-show="true" :mode="imageMode"/>
		<view class="text-area">
			<text>{{ $t('page.index.name') }}</text>
		</view>
		<view class="text-list">
			<InfoList :info-list="infoList" ></InfoList>
		</view>
		<view class="btn-box">
			<button type="primary" class="btn-more" @click="jumpTo">{{ $t('page.index.more') }}</button>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LangComponent from '../../components/LangComponent.vue'
import InfoList from '../../components/IndexInfoList.vue'
import StartPage from './StartPage.vue'
import { getInfoList } from './config'
import { onShareAppMessage, onShareTimeline, onShow } from '@dcloudio/uni-app'
import { useShareApp } from '@/components/commonHooks'

const imageMode = ref<string>('widthFix')
const infoList = getInfoList()
const showTransition = ref<boolean>(true)
const marginTop = ref('80rpx')
const marginBottom = ref('50rpx')

uni.hideTabBar()

onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})

const getSystemInfo = () => {
	uni.getSystemInfo({
		success: function (info) {
			if (info.windowHeight > 630) {
				marginTop.value = '160rpx'
				marginBottom.value = '50rpx'
			} else {
				marginTop.value = '100rpx'
				marginBottom.value = '30rpx'
			}
			
		}
	})
}

getSystemInfo()

const jumpTo = () => {
	uni.switchTab({
		url: '/pages/home/index'
	})
}

onShow(() => {
	setTimeout(() => {
		uni.showTabBar()
		showTransition.value = false
	}, 3300)
})
</script>

<style scoped lang="scss">
$margin-bottom: var(--bottom);
.lang-component {
	position: absolute;
	right: 30rpx;
	margin-top: 20rpx;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  .logo-img {
    width: 200rpx;
    margin-top: var(--top);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: $margin-bottom;
	position: relative;
	padding: 6rpx;
	border-radius: 6rpx;
	&::before {
		content: '';
		width: 500rpx;
		height: 500rpx;
		position: absolute;
		top: -100rpx;
		left: -145rpx;
		z-index: -1;
		background-image: conic-gradient(#EEEEEE22, #02eded, #fc97e9, 	#cca9fd, #D89C7A, #F0c237, #fec900, #EEEEEE22 60%);
		animation: ramotea 6s linear infinite;
		border-radius: 12rpx;
	}
  }
  
  .text-area {
    display: flex;
    justify-content: center;
    margin-bottom: $margin-bottom;
    font-size: 36rpx;
  }
  
  .text-list {
    width: 600rpx;
    display: flex;
    flex-direction: column;
    color: #8f8f94;
    font-size: 32rpx;
  }
  
  .btn-box {
    width: 100%;
    position: absolute;
    bottom: 24px;
	.btn-more {
	  margin: 0 24px;
	}
  }
}

@keyframes ramotea {
	100% {
		transform: rotate(360deg);
	}
}
</style>