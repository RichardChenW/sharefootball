<script setup>
  import { ref } from 'vue';
  import api from '@/api';

  const app = getApp();
  const cdk = ref('');

  const handleCdk = () => {
    if (!cdk.value) {
      uni.showToast({
        title: '请填写cdk',
				icon:'none'
      });
			return
    }
    const header = {
      authorization: `Bearer ${app.globalData.token}`,
    };
    const data = {
      cdkCode: cdk.value,
    };
    console.log(data);
    api.cdkeyExchange(data, header).then(res => {
      if (res.data.code === -1) {
        uni.showToast({
          title: res.data.message,
          mask: true,
          icon: 'none',
        });
        return;
      }
      uni.showToast({
        title: '兑换成功',
        mask: true,
        icon: 'none',
      });
    });
  };
</script>

<template>
  <view class="cdk-box">
    <view class="input-box">
      <input
        type="number"
        placeholder="请输入您的cdk"
        v-model.lazy="cdk" />
    </view>
    <button
      @click="handleCdk"
      class="my-button"
      >立即兑换</button
    >
  </view>
</template>

<style lang="scss" scoped>
  .cdk-box {
    width: 100vw;
    height: 100vh;
    .input-box {
      width: 90%;
      margin: 45% auto 100rpx auto;
      input {
        height: 100rpx;
        border-bottom: 1px solid black;
        box-sizing: border-box;
      }
    }
  }
</style>
