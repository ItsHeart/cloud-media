<template>
  <div class="userItem">
    <Image
        round
        fit="cover"
        width="32px"
        height="32px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <p class="userName">{{ result.userName }}</p>
    <Button class="followBtn" color="#c9d6df" type="default">已关注</Button>
  </div>
</template>

<script>
import { 
    Image,
    Button,
 } from "vant";
export default {
  name: "FollowUsers",
  components: {
    Image,
    Button,
  },
  props: {
    result: {
      userName: String,
    },
  },
};
</script>

<style lang="less">
@import "@/assets/theme/vant.theme.less";
.userItem {
  display: flex;
  flex-direction: column;
  padding: 8px;
  min-height: 40px;
  box-shadow: 0px 1px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 1px 0px rgb(0 0 0 / 12%);
  position: relative;
  > div {
    display: flex;
  }
  .userItem {
    position: relative;
  }
  .van-image, .userName, .followBtn {
    position: absolute;
    top: 50%;
	transform: translateY(-50%);
  }
  .van-image {
    left: 8px;
  }
  .userName {
    display: inline-block;
    margin: 0;
    left: 50px;
  }
  .followBtn {
    display: inline-block;
    height: 35px;
    right: 8px;
  }
}
</style>