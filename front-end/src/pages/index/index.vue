<script setup>
  import { ref } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';
  // import { markers } from '../../pages-data';
	// 导入统一的api
	import api from "@/api";
	// 测试新的markers
	const markers = ref([])
  const userLongitude = ref(0);
  const userLatitude = ref(0);
  const currentMarker = ref(null);
  const isScan = ref(true);
  // 功能界面
  const actionList = ref([
    {
      id: 1,
      src: '/static/search.png',
      name: '地图搜索',
    },
    {
      id: 2,
      src: '/static/support.png',
      name: '客服中心',
    },
    {
      id: 3,
      src: '/static/origin.png',
      name: '回到原点',
    },
    {
      id: 4,
      src: '/static/profile.png',
      name: '个人中心',
    },
  ]);
	const app = getApp();
  const handleAction = item => {
    switch (item.name) {
      case '地图搜索':
        uni.chooseLocation({
          success(res) {
            // 同时改变地图的中心位置
            userLatitude.value = res.latitude;
            userLongitude.value = res.longitude;
          },
        });
        break;
      case '客服中心':
        uni.navigateTo({
        	url:"/pages/contact/contact"
        })
        break;
      case '回到原点':
        const mapContext = uni.createMapContext('map');
        mapContext.moveToLocation();
        break;
      case '个人中心':
        uni.navigateTo({
        	url:"/pages/proflle/proflle"
        })
        break;
    }
  };

  const handleMarktap = e => {
    // 根据每个点的id找到对应的点
    const currentPoint = e.detail.markerId;
    const currentInfo = markers.value.find(each => {
      return each.id === currentPoint;
    });
    currentMarker.value = currentInfo;
    // 同时改变借还按钮的状态
    isScan.value = false;
  };

  // 扫码事件
  const handleScan = () => {
    uni.scanCode({
      success(res) {
        console.log(res);
      },
    });
  };

  // 点击非marker的区域，展示借还
  const handleIsScan = () => {
    console.log('触发事件');
    isScan.value = false;
  };

  // 点击去场馆
  const handleNav = () => {
    uni.navigateTo({
    	url:`/pages/ground/ground?id=${currentMarker.value.id}`
    })
  };
	
  onLoad(() => {
    console.log('执行onLoad!');
    // 获取用户坐标
    uni.getLocation({
      success(res) {
        userLatitude.value = res.latitude;
        userLongitude.value = res.longitude;
        console.log(res);
      },
      fail(err) {
        console.log(err);
      },
    });
		api.getStadiumList().then((res)=>{
			if(res.data.code ===0){
				app.globalData.markers = markers.value = res.data.data.map((item)=>{
					return {
						...item,
						title:item.name,
						width:40,
						height:40,
						latitude:parseFloat(item.latitude),
						longitude:parseFloat(item.longitude),
						iconPath: "/static/icon.png",
					}
				})
			}
		})
  });
</script>

<template>
  <view class="map-box">
    <map
      class="map"
      id="map"
      :longitude="userLongitude"
      :latitude="userLatitude"
      :show-location="true"
      :markers="markers"
      @click="handleIsScan"
      @markertap="handleMarktap"></map>
  </view>
  <!-- 1.扫码部分 -->
  <view
    class="scan-box scan-title"
    v-show="isScan"
    @click="handleScan"
    >扫码借还</view
  >
  <view
    class="scan-box marker-summary"
    v-if="!isScan">
    <view class="scan-box-left">
      <image
        :src="currentMarker?.iconPath"
        class="image-left"></image>
    </view>
    <view class="scan-box-center">
      <view class="scan-box-center-item top">{{ currentMarker?.title || '无' }}</view>
      <view class="scan-box-center-item bottom">{{ currentMarker?.address || '无' }}</view>
    </view>
    <view
      class="scan-box-right"
      @click="handleNav">
      <image
        src="../../static/nav.png"
        mode="aspectFit"
        class="image-right"></image>
    </view>
  </view>
  <!-- 2.功能部分 -->
  <view class="action-box">
    <image
      :src="item.src"
      v-for="item in actionList"
      :key="item.id"
      mode="widthFix"
      @click="handleAction(item)"></image>
  </view>
</template>

<style lang="scss" scoped>
  .map-box {
    width: 100%;
    height: 100%;
    position: relative;
    .map {
      width: 100vw;
      height: 100vh;
    }
  }
  .scan-box {
    position: absolute;
    width: 80%;
    height: 120rpx;
    border-radius: 10rpx;
    background-color: #1296db;
    box-shadow: 0 0 20rpx #1296db;
    left: 50%;
    bottom: 100rpx;
    transform: translate(-50%, 0);
    display: flex;
  }
  .scan-title {
    font-size: 25px;
    color: white;
    font-weight: 700;
    justify-content: center;
    align-items: center;
  }
  .marker-summary {
    background-color: white;
    .scan-box-left,
    .scan-box-right {
      width: 120rpx;
      margin: 20rpx;
      .image-left {
        width: 100%;
        height: 100%;
      }
      .image-right {
        margin: 10% 0 0 10%;
        width: 80%;
        height: 80%;
      }
    }
    .scan-box-center {
      flex: 1;
      .scan-box-center-item {
        // 设置公共样式
        width: 280rpx;
        height: 60rpx;
        line-height: 60rpx;
      }
      .top {
        font-weight: 700;
      }
      .bottom {
        font-size: 28rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .action-box {
    // height: 200rpx;
    width: 90rpx;
    position: absolute;
    right: 10%;
    bottom: 300rpx;
    image {
      width: 50rpx;
      height: 50rpx;
      padding: 20rpx;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 20rpx #1296db;
      margin-bottom: 40rpx;
    }
  }
</style>
