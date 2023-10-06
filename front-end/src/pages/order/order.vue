<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  import {  ref } from 'vue';
  import api from '@/api';
  import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration'
	dayjs.extend(duration)
	
  const orderList = ref([]);
  // 定义时间格式化
  const timeFormat = time => {
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss');
  };
	const timediff = (after,before)=>{
		const day1 = dayjs(after);
		const day2 = dayjs(before);
		const res = dayjs.duration(day1.diff(day2)).format("HH:mm:ss");
		return res
	}

  onLoad(() => {
    api.getOrder().then(res => {
      if (res.code === -1) {
        return uni.showToast({
          title: '获取信息失败',
          mask: true,
          icon: 'none',
        });
      }
      orderList.value = res.data;
    });
  });
</script>

<template>
  <view
    class="order-box"
    v-for="item in orderList"
    :key="item.id">
    <view class="order-item">场馆名称：{{ item.stadium_info.name }}</view>
    <view
      class="order-item"
      style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
      >订单编号：{{ item.order_number }}</view
    >
    <view class="order-item">消费金额：{{ item.amount }} 元</view>
    <view class="order-item">订单状态：{{ item.status ? '未完成' : '已完成' }}</view>
    <view class="order-item">订单时长：{{timediff(item.update_at,item.create_at)}}</view>
    <view class="order-item">开始时间：{{ timeFormat(item.create_at) }}</view>
    <view class="order-item">结束时间：{{ timeFormat(item.update_at) }}</view>
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
    .order-item {
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
