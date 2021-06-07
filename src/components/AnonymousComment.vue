<template>
  <div class="anonymous-comment">
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
        </div>
        <span>
          {{ result.describe }}
        </span>
      </div>
</template>

<script>
import { Image } from "vant";
import { ref, reactive } from "vue";
export default {
  name: "AnonymousComment",
  components: {
    Image,
  },
  props: {
    result: {
      userName: String,
      publishTime: String,
      describe: String,
    },
  },
  setup() {
    return {
    };
  },
};
</script>

<style lang="less">
@import "@/assets/theme/vant.theme.less";
.anonymous-comment {
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
