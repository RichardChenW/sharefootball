<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';
  // import { getContactQuestionByType } from '../../pages-data/index.js';
  const questionList = ref([]);
	const app = getApp()

  onLoad(options => {
    console.log(options);
    // questionList.value = getContactQuestionByType(parseInt(options.id));
		if(options.id){
			const tempList = app.globalData.questionList.find(item => item.id === parseInt(options.id))
			questionList.value = tempList.detail
			console.log(questionList.value)
		}
    uni.setNavigationBarTitle({
      title: options.title,
    });
  });
</script>

<template>
  <view class="container">
    <view class="question-box">
      <view
        v-for="(item, index) in questionList"
        :key="item.id">
        <view class="question-title">{{ index + 1 }}. {{ item.title }}</view>
        <view class="question-content">{{ item.answer }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background-color: #f1f1ff;
    .question-box {
      width: 80%;
      margin: 0 auto;
      background-color: white;
      padding: 20rpx 5%;
      .question-title {
        height: 100rpx;
        line-height: 100rpx;
        font-weight: 700;
        font-size: 40rpx;
      }
      .question-content {
        padding-bottom: 20rpx;
      }
    }
  }
</style>
