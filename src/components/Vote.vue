<template>
  <div class="vote">
    <div>
      <Image
        round
        fit="cover"
        width="32px"
        height="32px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="personInfo">
        <p>{{ result.userName }}</p>
        <small>{{ result.publishTime }}</small>
      </div>
      <strong class="rate">
        {{ result.interesting }} + {{ result.strict }} + {{ result.homework }}
      </strong>
    </div>
    <span>
      {{ result.describe }}
    </span>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  name: "Vote",
  components: {
    Image,
  },
  props: {
    result: {
      userName: String,
      publishTime: String,
      interesting: [String, Number],
      strict: [String, Number],
      homework: [String, Number],
      describe: String,
    },
  },
};
</script>

<style lang="less">
@import "@/assets/theme/vant.theme.less";
.vote {
  display: flex;
  flex-direction: column;
  padding: 8px;
  min-height: 64px;
  box-shadow: 0px 1px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 1px 0px rgb(0 0 0 / 12%);
  .personInfo {
    text-align: left;
    small {
      font-size: 12px;
      color: #808080;
    }
  }
  .rate {
    line-height: 32px;
    font-size: 24px;
    margin-left: 16px;
  }
  .van-image {
    margin-right: 8px;
  }
  > div {
    display: flex;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  span {
    margin-top: 4px;
    text-indent: 2em;
    font-size: 12px;
    text-align: left;
    display: block;
  }
}
</style>