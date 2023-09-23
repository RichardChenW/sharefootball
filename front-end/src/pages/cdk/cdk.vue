<script setup>
  import { ref } from 'vue';
  
	const cdk = ref(null);
	
	const handleCdk = ()=>{
		console.log(cdk.value)
	}
</script>

<template>
  <view class="cdk-box">
    <view class="input-box">
      <input
        type="number"
        placeholder="请输入您的cdk"
        :maxlength="10" 
				v-model.lazy="cdk"
				/>
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
