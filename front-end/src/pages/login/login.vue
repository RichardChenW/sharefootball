<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';
	
	const userAvatarUrl = ref("");
	const nickName = ref("")
	
	const handleChooseAvatar = (e)=>{
		userAvatarUrl.value = e.detail.avatarUrl
	}
	const handleNickName =(e)=>{
		console.log("event");
		console.log(e);
		nickName.value = e.detail.value
	}
	const handleLogin = ()=>{
		console.log("submit",{
			avatarUrl:userAvatarUrl.value,
			userNickName:nickName.value
		})
	}
</script>

<template>
  <view class="login-box">
    <button class="login-btn" open-type="chooseAvatar" @chooseavatar="handleChooseAvatar">
      <image
        class="login-avatar"
        :src="userAvatarUrl || '/static/logo.png'"
        mode="widthFix"></image>
    </button>
    <view class="login-info">
      <view class="login-label"> 用户昵称 </view>
      <input
				class="login-input"
        placeholder="请输入昵称" 
				type="nickname"
				@change="handleNickName"
				/>
    </view>
		<button @click="handleLogin" class="my-button submit-btn">注册登录</button>
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
			height: 120rpx;
			align-items: center;
			.login-label{
				margin: 0 50rpx;
			}
			.login-input{
				flex:1;
				margin-right:50rpx;
			}
		}
		.submit-btn{
			margin-top: 50rpx;
		}
  }
</style>
