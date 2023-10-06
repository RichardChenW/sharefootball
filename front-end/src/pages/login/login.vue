<script setup>
  import { onPullDownRefresh } from '@dcloudio/uni-app';

  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';
  import api from '@/api';
  import { upload } from '@/upload';

  const app = getApp();
  const userAvatarUrl = ref(app.globalData.userInfo.avatar);
  const nickName = ref('');
  const password = ref('');
  const hasLogin = ref(true);

  const handleChooseAvatar = e => {
    // 获取一个暂时的头像url地址
    userAvatarUrl.value = e.detail.avatarUrl;
  };
  const handleNickName = e => {
    nickName.value = e.detail.value;
  };
  const handlePassword = e => {
    password.value = e.detail.value;
  };
  const handleLogin = () => {
    // 如果账户密码没有填写
    if (!nickName.value || !password.value) {
      uni.showToast({
        title: '用户名和密码必填',
        icon: 'none',
      });
      return;
    }
    const data = {
      name: nickName.value,
      password: password.value,
    };
    console.log(data);
    // 判断是登录还是没登录，从而决定事件类型
    // 注册
    if (!hasLogin.value) {
      api.register(data).then(res => {
        if (res.data.data.code === 0) {
          uni.showToast({
            title: '注册成功',
            icon: 'none',
          });
        } else {
          uni.showToast({
            title: res.data.data.message,
            icon: 'none',
          });
        }
      });
      hasLogin.value = true;
      return;
    }
    // 登录
    api.login(data).then(res => {
      if (res.data.code === 0) {
        // 登录成功后的逻辑
        app.globalData.userInfo = res.data.data;
        app.globalData.token = res.data.data.token;
        uni.setStorage({
          key: 'userInfo',
          data: res.data.data,
        });
        uni.setStorage({
          key: 'token',
          data: res.data.data.token,
        });
        uni.showToast({
          title: '登录成功',
        });
        setTimeout(() => {
          uni.navigateBack();
        }, 500);
      } else {
        uni.showToast({
          title: res.data.message,
        });
      }
    });
    return;
  };
  const handleToggle = () => {
    hasLogin.value = !hasLogin.value;
  };

  const handleModifyAvatar = () => {
    if (!userAvatarUrl.value) {
      uni.showToast({
        title: '请上传头像',
        icon: 'none',
      });
      return;
    }
    const headers = {
      authorization: `Bearer ${app.globalData.token}`,
    };
    upload.uploadAvatar('/upload/avatar', 'avatar', userAvatarUrl.value, headers).then(res => {
      console.log(res);
      if (res.code === 0) {
        uni.showToast({
          title: '修改成功',
          icon: 'none',
        });
        // 更新此时的userInfo
        api.getUserInfoByToken().then(res => {
          if (res.data.code == 0) {
            app.globalData.userInfo = res.data.data;
            uni.setStorage({
              key: 'userInfo',
              data: res.data.data,
            });
            uni.reLaunch({
              url: '/pages/proflle/proflle',
            });
          } else {
            uni.showToast({
              title: '修改出现了点问题！',
            });
          }
        });

        return;
      } else {
        uni.showToast({
          title: res.message,
          icon: 'none',
        });
        return;
      }
    });
  };

  onLoad(details => {
    // 用于修改头像
    if (details.from === 'profile') {
      uni.setNavigationBarTitle({
        title: '修改头像',
      });
    }
  });

</script>

<template>
  <view class="login-box">
    <button
      class="login-btn"
      open-type="chooseAvatar"
      @chooseavatar="handleChooseAvatar"
      v-if="app.globalData.token">
      <image
        class="login-avatar"
        :src="userAvatarUrl"
        mode="widthFix"></image>
    </button>
    <view
      class="login-info"
      v-if="!app.globalData.token">
      <view class="login-label"> 姓名 </view>
      <input
        class="login-input"
        placeholder="请输入您的姓名"
        type="nickname"
        @change="handleNickName" />
    </view>
    <view
      class="login-info"
      v-if="!app.globalData.token">
      <view class="login-label"> 密码 </view>
      <input
        class="login-input"
        placeholder="请输入您的密码"
        type="password"
        @change="handlePassword" />
    </view>
    <view
      class="login-toggle"
      @click="handleToggle"
      v-if="!app.globalData.token">
      {{ !hasLogin ? '已有账号，点击登录' : '没有账号，点击注册' }}
    </view>
    <button
      @click="handleLogin"
      class="my-button submit-btn"
      v-if="!app.globalData.token"
      >{{ hasLogin ? '登录' : '注册' }}</button
    >
    <button
      v-if="app.globalData.token"
      class="my-button"
      @click="handleModifyAvatar"
      >确认修改</button
    >
  </view>
</template>

<style lang="scss" scoped>
  .login-box {
    .login-btn {
      width: 120rpx;
      height: 120rpx;
      margin: 50rpx auto;
      padding: 0;
      .login-avatar {
        width: 120rpx;
        height: 120rpx;
      }
    }
    .login-info {
      display: flex;
      height: 100rpx;
      align-items: center;
      .login-label {
        margin: 0 50rpx;
      }
      .login-input {
        flex: 1;
        margin-right: 50rpx;
      }
    }
    .login-toggle {
      color: #1296db;
      font-size: 30rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      text-decoration: underline;
    }
    .submit-btn {
      margin-top: 20rpx;
    }
  }
</style>
