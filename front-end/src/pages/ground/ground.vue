<script setup>
  import { ref } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';
  import { getGroundInfoById } from '/src/pages-data/index.js';

  const currentfootBallInfo = ref(null);
	const app = getApp()

  // 导航去对应的球场
  const handleNavTo = () => {
		console.log(currentfootBallInfo.value)
    uni.openLocation({
    	latitude:currentfootBallInfo.value.marker.latitude,
			longitude:currentfootBallInfo.value.marker.longitude,
			name:currentfootBallInfo.value.marker.title,
			address:currentfootBallInfo.value.marker.address,
			success(res){
				console.log(res)
			},
			fail(e){
				console.log(e)
			}
    })
  };
	
	

  onLoad(options => {
    // 将路由收集的id传入设置查找信息的方法
		const beforeCurrentfootBallInfo = app.globalData.markers.find(i=>i.id===parseInt(options.id))
    currentfootBallInfo.value = {
			...beforeCurrentfootBallInfo,
			imgUrl: 'https://img.qtx.com/asset/ec/7a/63/0a3f99a3392ea8e3cb7a9d151bf92928.jpeg',
			startTime:beforeCurrentfootBallInfo.start_time,
			endTime:beforeCurrentfootBallInfo.end_time,
			isPark:beforeCurrentfootBallInfo.is_parking,
			isToilet:beforeCurrentfootBallInfo.is_toilet,
			isLight:beforeCurrentfootBallInfo.is_light
		}
    console.log(currentfootBallInfo.value);
  });
</script>

<template>
  <view class="ground-box">
    <!-- 足球场照片 -->
    <image
      class="ground-image"
      :src="currentfootBallInfo?.imgUrl"
      mode="widthFix"></image>
    <!-- 足球场名称 -->
    <view class="ground-title">{{ currentfootBallInfo?.title }} </view>
    <!-- 足球场信息 -->
    <view class="ground-detail">
      <view class="ground-detail-left">
        <image
          src="/static/location.png"
          mode="widthFix"></image>
      </view>
      <view class="ground-detail-center">{{ currentfootBallInfo?.address }}</view>
      <view
        class="ground-detail-right"
        @click="handleNavTo">
        <image
          src="/static/navTo.png"
          mode="widthFix"></image>
      </view>
    </view>
    <!-- 场馆热度 -->
    <view class="ground-detail">
      <view class="ground-detail-left">
        <image
          src="/static/hot.png"
          mode="widthFix"></image>
      </view>
      <view class="ground-detail-center">
        <text>场馆热度：{{ currentfootBallInfo?.hot }}</text>
        <text v-show="currentfootBallInfo?.hot === 'SSS'"> (非常高)</text>
      </view>
    </view>
    <!-- 营业时间 -->
    <view class="ground-detail">
      <view class="ground-detail-left">
        <image
          src="/static/time.png"
          mode="widthFix"></image>
      </view>
      <view class="ground-detail-center">
        <text>营业时间：周一到周日{{ currentfootBallInfo?.startTime }} - {{ currentfootBallInfo?.endTime }}</text>
      </view>
    </view>
    <!-- 停车场 -->
    <view class="ground-detail">
      <view class="ground-detail-left">
        <image
          src="/static/parking.png"
          mode="widthFix"></image>
      </view>
      <view class="ground-detail-center">
        <text>停车场: {{ currentfootBallInfo?.isPark ? '有' : '无' }}</text>
      </view>
    </view>
    <!-- 卫生间 -->
    <view class="ground-detail">
      <view class="ground-detail-left">
        <image
          src="/static/toilet.png"
          mode="widthFix"></image>
      </view>
      <view class="ground-detail-center">
        <text>卫生间: {{ currentfootBallInfo?.isToilet ? '有' : '无' }}</text>
      </view>
    </view>
    <!-- 洗浴室 -->
    <view class="ground-detail">
      <view class="ground-detail-left">
        <image
          src="/static/bathroom.png"
          mode="widthFix"></image>
      </view>
      <view class="ground-detail-center">
        <text>洗浴室: {{ currentfootBallInfo?.isBathRoom ? '有' : '无' }}</text>
      </view>
    </view>
    <!-- 夜间灯光 -->
    <view class="ground-detail">
      <view class="ground-detail-left">
        <image
          src="/static/light.png"
          mode="widthFix"></image>
      </view>
      <view class="ground-detail-center">
        <text>灯光: {{ currentfootBallInfo?.isLight ? '有' : '无' }}</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .ground-box {
    width: 90%;
    margin: 0 auto;
    .ground-image {
      width: 100%;
      border-radius: 40rpx;
      margin-top: 20rpx;
    }
    .ground-title {
      height: 80rpx;
      line-height: 80rpx;
      font-size: 30rpx;
      font-weight: 700;
    }
    .ground-detail {
      height: 80rpx;
      width: 100%;
      display: flex;
      border-bottom: 1px solid #1296db;
      margin-bottom: 20rpx;
      .ground-detail-center {
        flex: 1;
        font-size: 30rpx;
        margin-left: 20rpx;
        line-height: 80rpx;
      }
      @mixin left-right {
        width: 80rpx;
        height: 80rpx;
        image {
          margin-top: 15rpx;
          width: 60rpx;
        }
      }
      .ground-detail-left {
        @include left-right;
      }
      .ground-detail-right {
        @include left-right;
        text-align: right;
      }
    }
  }
</style>
