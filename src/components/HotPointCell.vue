<template>
  <div value="内容" is-link class="hot-point-cell">
    <div class="text">
      <Tag
        v-if="rank < 4"
        :color="rank == 1 ? '#f38181' : rank == 2 ? '#fce38a' : '#95e1d3'"
        >{{ rank }}</Tag
      >
      <strong v-else class="number">{{ rank }}</strong>
      {{ title }}
    </div>
    <Image
      width="30%"
      height="60px"
      fit="contain"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
  </div>
</template>

<script>
import { Tag, Image } from "vant";

export default {
  name: "HotPointCell",
  props: {
    rank: Number,
    title: String,
  },
  components: {
    Tag,
    Image,
  },
};
</script>

<style lang="less">
.hot-point-cell {
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  text-align: left;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  text-align: left;
  line-height: 24px;
  .van-tag {
    margin-right: 6px;
  }
  .number {
    margin: 0 10px 0 4px;
  }
  .text {
    float: left;
    width: 66%;
  }
  .van-image {
    float: left;
    width: 30%;
  }
}
</style>