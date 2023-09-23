<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';
</script>

<template>
  <view class="order-box" v-for="each in 5">
    <view class="order-item">场馆名称：虹桥足球场</view>
    <view class="order-item">订单编号：dadasdad</view>
    <view class="order-item">消费金额：100.00 元</view>
    <view class="order-item">订单状态：已完成</view>
    <view class="order-item">订单时长：00.00.00</view>
    <view class="order-item">开始时间：2023-01-01 00：00：00</view>
    <view class="order-item">结束时间：2023-01-01 00:00:00</view>
  </view>
</template>

<style lang="scss" scoped>
  .order-box {
    background-color: white;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30rpx;
		padding: 30rpx;
		border-radius: 30rpx;
		box-shadow: 0 0 15rpx grey;
		.order-item{
			height: 50rpx;
			line-height: 50rpx;
		}
  }
</style>

<style lang="scss">
  Page {
    background-color: #f1f1ff;
		padding: 30rpx 0;
  }
</style>
