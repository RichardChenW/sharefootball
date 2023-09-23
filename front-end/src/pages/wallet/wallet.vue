<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';
  const name = ref('richard');
  onLoad(options => {});
</script>

<template>
  <view class="wallet-box">
		<image src="../../static/money.png" mode="widthFix" class="wallet-icon"></image>
		<view class="wallet-title">我的钱包</view>
		<view class="wallet-amount">
			<text>$</text>
			<text>100.00</text>
		</view>
		<button class="my-button">立即充值</button>
	</view>
</template>

<style lang="scss" scoped>
	.wallet-box{
		text-align:center;
		.wallet-icon{
			width: 120rpx;
			height: 120rpx;
			background-color: #1296db;
			border-radius: 50%;
			margin: 50rpx auto;
		}
		.wallet-amount{
			height: 200rpx;
			line-height: 200rpx;
			font-size: 100rpx;
			font-weight: 700;
		}
		
	}
</style>
