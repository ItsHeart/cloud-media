<template>
  <div class="under-empty">
    <Image
      height="20px"
      width="20px"
      fit="contain"
      src="https://img.yzcdn.cn/vant/custom-empty-image.png"
    />
    <span>下面没有辣</span>
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
  justify-content: center;
  height: 20px;
  padding: 6px 0 !important;
  line-height: 28px;
  font-size: 14px;
  span {
    margin-left: 5px;
  }
}
</style>