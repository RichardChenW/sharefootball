<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  // const QQmap = require('../../static/qqmap/qqmap-wx-jssdk.js');
  // const qqmapsdk = new QQmap({
  //   key: 'JMXBZ-5Z5CA-63TKA-CVLYS-QXX3F-KCB6B',
  // });
  const handleBackEnd = () => {
    uni.request({
      url: 'http://127.0.0.1:8000/index/',
      success: res => {
        console.log(res);
      },
      fail: e => {
        console.log(e);
      },
    });
  };
  const handleQQsdk = () => {
    qqmapsdk.search({
      keyword: '宠物店',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      },
    });
  };
</script>

<template>
  <button @click="handleQQsdk">测试qqSDK</button>
  <button @click="handleBackEnd">测试后端接口</button>
</template>

<style></style>
