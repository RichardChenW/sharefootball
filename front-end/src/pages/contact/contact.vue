<script setup>
  import { contactQuestion } from '../../pages-data/index.js';

  // 每个常见问题，绑定不同的事件
  const handleItem = item => {
    uni.navigateTo({
    	url:`/pages/question/question?type=${item.type}&title=${item.name}`
    });
  };

  // 当在H5页面的时候触发的事件
  const handleContact = () => {
    alert('H5页面触发');
  };
</script>

<template>
  <view class="contact-box">
    <view class="contact-top">
      <view class="contact-top-title">24H 在线为您答疑解惑</view>
      <!-- #ifdef MP-WEIXIN -->
      <button
        class="contact-top-btn"
        open-type="contact"
        >在线客服</button
      >
      <!-- #endif -->
      <!-- #ifdef H5 -->
      <button
        class="contact-top-btn"
        @click="handleContact"
        >在线客服H5</button
      >
      <!-- #endif -->
    </view>
    <view class="contact-bottom">
      <view class="contact-bottom-title">常见问题</view>
      <view class="contact-bottom-list">
        <view
          class="list-item"
          v-for="item in contactQuestion"
          :key="item.id"
          @click="handleItem(item)">
          <img :src="item.src" />
          <view class="text">{{ item.name }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  // page{
  // 	background-color: #f1f1ff;
  // }
  .contact-box {
    width: 100vw;
    height: 100vh;
    background-color: #f1f1ff;
    .contact-top {
      height: 300rpx;
      text-align: center;
      padding: 20rpx 0;
      background-color: white;
      .contact-top-btn {
        width: 368rpx;
        color: white;
        background-color: #1296db;
        letter-spacing: 2rpx;
      }
      .contact-top-title {
        height: 150rpx;
        line-height: 150rpx;
        font-weight: 700;
      }
    }
    .contact-bottom {
      margin-top: 20rpx;
      background-color: white;
      height: 460rpx;
      .contact-bottom-title {
        height: 100rpx;
        line-height: 100rpx;
        font-weight: 700;
        padding-left: 20rpx;
        border-bottom: 2rpx solid #f1f1f1;
      }
      .contact-bottom-list {
        display: flex;
        flex-wrap: wrap;
        .list-item {
          width: 50%;
          height: 120rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;

          &:nth-child(odd) {
            border-right: 2rpx solid #f1f1f1;
          }
          &:not(:nth-last-child(-n + 2)) {
            border-bottom: 2rpx solid #f1f1f1;
          }
          image {
            width: 50rpx;
            height: 50rpx;
            margin-right: 20rpx;
          }
        }
      }
    }
  }
</style>
