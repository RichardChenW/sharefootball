<script setup>
  import { onPullDownRefresh } from '@dcloudio/uni-app';
  import { ref } from 'vue';

  const itemlist = [
    {
      id: 1,
      type: 1,
      name: '我的钱包',
      src: '/static/wallet.png',
      path: '/pages/wallet/wallet',
    },
    {
      id: 2,
      type: 2,
      name: '会员充值',
      src: '/static/vip.png',
      path: '/pages/recharge/recharge',
    },
    {
      id: 3,
      type: 3,
      name: '我的订单',
      src: '/static/order.png',
      path: '/pages/order/order',
    },
    {
      id: 4,
      type: 4,
      name: '奖品兑换',
      src: '/static/change.png',
      path: '/pages/cdk/cdk',
    },
    {
      id: 5,
      type: 5,
      name: '客服中心',
      src: '/static/support.png',
      path: '/pages/contact/contact',
    },
    {
      id: 6,
      type: 6,
      name: '关于我们',
      src: '/static/about.png',
      path: '/pages/aboutUs/aboutUs',
    },
  ];
  const handleItem = item => {
    switch (item.id) {
      case 1:
        uni.navigateTo({
          url: item.path,
        });
        break;
      case 2:
        uni.navigateTo({
          url: item.path,
        });
        break;
      case 3:
        uni.navigateTo({
          url: item.path,
        });
        break;
      case 4:
        uni.navigateTo({
          url: item.path,
        });
        break;
      case 5:
        uni.navigateTo({
          url: item.path,
        });
        break;
      case 6:
        uni.navigateTo({
          url: item.path,
        });
    }
  };
  const app = getApp();
  const avatarUrl = ref(app.globalData.userInfo.avatar);
  const handleModifyAvatar = () => {
    uni.navigateTo({
      url: '/pages/login/login?from=profile',
    });
  };

  onPullDownRefresh(() => {
		uni.reLaunch({
			url: '/pages/profile/profile'
		})
    uni.stopPullDownRefresh();
  });
</script>

<template>
  <view class="root-container">
    <view class="profile-box">
      <view class="profile-top">
        <view class="profile-info">
          <image
            :src="avatarUrl"
            mode="widthFix"
            class="user-avatar"
            @click="handleModifyAvatar"></image>
          <view class="user-name">{{ app.globalData.userInfo.name || '未显示' }}</view>
        </view>
      </view>
      <view class="profile-bottom">
        <view
          class="item"
          v-for="item in itemlist"
          :key="item.id"
          @click="handleItem(item)">
          <image
            :src="item.src"
            class="item-left"></image>
          <view class="item-center">{{ item.name }}</view>
          <image
            src="../../static/forward.png"
            mode=""
            class="item-right"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .root-container {
    width: 100vw;
    height: 100vh;
    background-color: #f1f1ff;
    padding-top: 40rpx;
    .profile-box {
      width: 90%;
      margin: 0 auto;
      .profile-top {
        height: 200rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20rpx;
        background-color: white;
        box-shadow: 0rpx 0rpx 10rpx grey;
        margin-bottom: 40rpx;
        button {
          width: 368rpx;
          color: white;
          background-color: #1296db;
          letter-spacing: 2rpx;
        }
        .profile-info {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .user-avatar {
            width: 120rpx;
            height: 120rpx;
            border-radius: 50%;
            margin: 0 40rpx;
            box-shadow: 0 0 10rpx grey;
          }
          .user-name {
            width: 475rpx;
            font-weight: 700;
            font-size: 50rpx;
            margin-right: 40rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .profile-bottom {
        background-color: white;
        border-radius: 20rpx;
        height: 600rpx;
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #f1f1ff;
          height: 100rpx;
          box-sizing: border-box;
          &:last-child {
            border-bottom: none;
          }
          .item-center {
            flex: 1;
            font-size: 30rpx;
          }
          .item-left,
          .item-right {
            padding: 20rpx;
            width: 50rpx;
            height: 50rpx;
          }
        }
      }
    }
  }
</style>
