<script setup>
  const aboutList = [
    {
      id: 1,
      name: '公众号',
      content: '共享足球',
      src: '/static/gzh.png',
    },
    {
      id: 2,
      name: '邮箱',
      content: 'footerball@000.com',
      src: '/static/email.png',
    },
    {
      id: 3,
      name: '客服电话',
      content: '000-00000000',
      src: '/static/phone.png',
    },
    {
      id: 4,
      name: '了解更多',
      content: '000-00000000',
      src: '/static/more.png',
    },
  ];
  const handleItem = item => {
    switch (item.id) {
      case 1:
				break
      case 2:
        uni.setClipboardData({
          data: item.content,
          success(res) {
            console.log(res);
          },
        });
				break
      case 3:
        uni.makePhoneCall({
          phoneNumber: item.content,
          success(res) {
            console.log(res);
          },
        });
				break
      case 4:
				break
    }
  };
</script>

<template>
  <view class="about-box">
    <view class="about-top">
      <image
        src="../../static/footerball.png"
        mode=""></image>
      <view class="about-slogen">强身健体，从我做起</view>
    </view>
    <view class="about-bottom">
      <view
        class="about-item"
        v-for="item in aboutList"
        :key="item.id"
        @click="handleItem(item)">
        <image
          :src="item.src"
          mode="widthFix"></image>
        <view class="item-name">{{ item.name }}</view>
        <view class="item-content">{{ item.content }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  @import '../../styles/global.scss';

  .about-box {
    width: 80%;
    background-color: white;
    text-align: center;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%,-50%);
		border-radius: 5%;
		box-shadow: 0 0 10rpx gray;
		padding: 40rpx;
    .about-top {
      image {
        height: 150rpx;
        width: 150rpx;
        margin-top: 100rpx;
      }

      .about-slogen {
        height: 100rpx;
        line-height: 100rpx;
        font-weight: 700;
      }
    }
    .about-bottom {
      .about-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2rpx solid #f1f1ff;
        padding-bottom: 20rpx;
        &:last-child {
          border-bottom: none;
        }
        image {
          width: 60rpx;
          height: 60rpx;
          margin: 0 20rpx;
        }
        .item-name {
          text-align: left;
          flex: 1;
        }
        .item-content {
          color: $my-color;
          margin: 0 20rpx;
        }
      }
    }
  }
</style>

<style>
  page {
    background-color: #f1f1ff;
  }
</style>
