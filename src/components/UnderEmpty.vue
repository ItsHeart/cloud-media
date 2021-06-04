<template>
  <div class="under-empty">
    <Image
      height="20px"
      width="20px"
      fit="contain"
      src="https://img.yzcdn.cn/vant/custom-empty-image.png"
    />
    <span>我也是有底线的</span>
  </div>
</template>

<script>
import { Image } from "vant";

export default {
  name: "UnderEmpty",
  components: {
    Image,
  },
};
</script>

<style lang="less">
.under-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 0 !important;
  font-size: 14px;
  span {
    margin-top: 5px;
  }
}
</style>