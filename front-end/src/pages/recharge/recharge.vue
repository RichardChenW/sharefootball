<script setup>
  import { ref } from 'vue';

  const amountList = [
    { id: 1, amount: 10 },
    { id: 2, amount: 20 },
    { id: 3, amount: 50 },
    { id: 4, amount: 100 },
  ];
  const activeIndex = ref(1);
  const handleactiveIndex = item => {
    activeIndex.value = item.id;
		const { amount: selectAmount } = amountList.find(each => {
		  return each.id === activeIndex.value;
		});
		uni.showToast({
		  title: `当前充值金额${selectAmount}元`,
		  mask: true,
		  icon: 'none',
		});
  };
  const handleRecharge = () => {
    const { amount: selectAmount } = amountList.find(each => {
      return each.id === activeIndex.value;
    });
  };
</script>

<template>
  <view class="recharge-box">
    <view class="recharge-desc"> 当前账户余额:<text class="recharge-amount">100.00 </text>元 </view>
    <view class="recharge-amount-list">
      <view
        class="amount-item"
        v-for="item in amountList"
        :key="item.id"
        :class="{ 'amount-selected': item.id === activeIndex }"
        @click="handleactiveIndex(item)"
        >￥{{ item.amount }}</view
      >
    </view>
    <button
      class="my-button"
      @click="handleRecharge"
      >立刻充值</button
    >
  </view>
</template>

<style lang="scss" scoped>
  @import '../../styles/global.scss';

  .recharge-box {
    width: 80%;
    margin: 0 auto;
    .recharge-desc {
      height: 100rpx;
      line-height: 100rpx;
      font-size: 40rpx;
      font-weight: 700;
      margin: 40rpx 0;
      .recharge-amount {
        color: $my-color;
      }
    }
    .recharge-amount-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 100rpx;
      .amount-item {
        width: 45%;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        box-sizing: border-box;
        margin-bottom: 50rpx;
        border: 2px solid #d1d1d1;
      }
      .amount-selected {
        color: $my-color;
        border: 2px solid $my-color;
      }
    }
  }
</style>
