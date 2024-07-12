<template>
	<view class="self-info">
		<view class="img-box">
			<image src="/static/info-photo.png" class="self-info-img" :fade-show="true" mode="widthFix"></image>
		</view>
		<view class="info-box">
			<view class="into-title">基本信息</view>
			<view class="info-item">
				<label>姓名:</label>
				<text>{{ infoData.name }}</text>
			</view>
			<view class="info-item">
				<label>职业:</label>
				<text>{{ infoData.occupation }}</text>
			</view>
			<view class="info-item">
				<label>年龄:</label>
				<text>{{ infoData.age }}</text>
			</view>
			<view class="info-item">
				<label>名族:</label>
				<text>{{ infoData.famousEthnicGroup }}</text>
			</view>
			<view class="info-item">
				<label>婚姻状况:</label>
				<text>{{ infoData.maritalStatus }}</text>
			</view>
			<view class="info-item">
				<label>毕业院校:</label>
				<text>{{ infoData.university }}</text>
			</view>
			<view class="info-item">
				<label>专业:</label>
				<text>{{ `${infoData.major} | ${infoData.majorType}` }}</text>
			</view>
			<view class="info-item">
				<label>学历:</label>
				<text>{{ infoData.education }}</text>
			</view>
			<view class="into-title">联系方式</view>
			<view class="info-item">
				<label>电话:</label>
				<view>
					<text>{{ handlePhoneHide(infoData.phone) }}</text>
					<uni-icons type="phone" size="26" class="phone" :color="isDisabled ? '#cccccc' : '#1aad19'" @click="callPhone(infoData.phone)"></uni-icons>
				</view>
			</view>
			<view class="info-item">
				<label>微信:</label>
				<view>
					<text>{{ infoData.weChat }}</text>
					<WeChartPopup></WeChartPopup>
				</view>
			</view>
			<view class="info-item">
				<label>邮箱:</label>
				<text>{{ handleEmailHide(infoData.email) }}</text>
			</view>
			<view class="info-item">
				<label>居住地址:</label>
				<text>{{ infoData.address }}</text>
			</view>
		</view>
	</view>
	<uni-popup ref="dialogMessageRef" type="dialog">
		<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="确认" title="通知" :content="dialogMessageText"></uni-popup-dialog>
	</uni-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeChartPopup from '@/components/WeChartPopup.vue'
import { handlePhoneHide, handleEmailHide } from '@/util/commonUtil'
import { useGetInfoData } from './config'
import { useShareApp } from '@/components/commonHooks'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { useStore } from 'vuex'
import { key } from '@/store'
const store = useStore(key)

const infoData = useGetInfoData()
const dialogMessageRef = ref()
const msgType = ref<string>('error')
const dialogMessageText = ref<string>('拨打电话失败！')
const isDisabled = ref<boolean>(store.state.isOnDutyStatus)

onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})

const callPhone = (phone: string) => {
	if (isDisabled.value) {
		return
	}
	const res = uni.getSystemInfoSync();
	// ios系统默认有个模态框
	if (res.platform == 'ios') {
		uni.makePhoneCall({
			phoneNumber: phone,
			success() {

			},
			fail() {
				dialogMessageRef.value.open()
			}
		})
	} else {
		//安卓手机手动设置一个showActionSheet
		uni.showActionSheet({
			itemList: [phone, '呼叫'],
			success: function(res) {
				if (res.tapIndex == 1) {
					uni.makePhoneCall({
						phoneNumber: phone,
						success() {
							
						},
						fail() {
							dialogMessageRef.value.open()
						}
					})
				}
			}
		})
	}
}
</script>

<style scoped lang="scss">
.self-info {
	width: 100%;
	height: 100vh;
	background: linear-gradient(to bottom, #848484, #ffffff);
	.img-box {
		display: flex;
	}
	.self-info-img {
		width: 340rpx;
		margin-top: 40rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10rpx;
		border-radius: 6px;
		box-shadow: 0rpx 0rpx 12rpx -1rpx #ffffff;
	}
	.info-box {
		font-size: 30rpx;
		margin: 0 45rpx;
		.into-title {
			font-size: 34rpx;
			margin: 20rpx 0;
		}
		.info-item {
			margin-bottom: 12rpx;
			padding-bottom: 12rpx;
			border-bottom: 1px solid;
			border-image: linear-gradient(to right, #fff, #848484) 60 10;
			display: flex;
			justify-content: space-between;
			color: #202020;
			label {
				margin-right: 8rpx;
			}
			.phone {
				margin-left: 12rpx;
			}
		}
	}
}
</style>
