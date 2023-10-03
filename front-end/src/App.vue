<script>
  export default {
    globalData: {
      markers: [],
      questionList: [],
      token: uni.getStorageSync('token') || null,
      // 用户信息的初始值
      userInfo: uni.getStorageSync('userInfo') || { name: '', avatar: '', amount: '' },
    },
    onLaunch: function () {
      console.log('App Launch');
    },
    onShow: function () {
      console.log('App Show');
    },
    onHide: function () {
      console.log('App Hide');
    },
  };
</script>

<style>
  /*每个页面公共css */
</style>
