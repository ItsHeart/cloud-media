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
      <div class="good-count">
        <Icon name="good-job-o" class="good" />
        <small>{{ result.count }}</small>
      </div>
    </div>
    <span>{{ result.describe }}</span>
    <div class="reply">
      <span>回复</span>
      <span @click="toReply" v-if="result.replyCount"
        >{{ result.replyCount }}条回复</span
      >
    </div>
  </div>
</template>

<script>
import { Image, Icon } from "vant";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "AnonymousComment",
  components: {
    Image,
    Icon,
  },
  props: {
    result: {
      userName: String,
      publishTime: String,
      describe: String,
      count: Number,
      replyCount: Number,
    },
  },
  setup(props) {
    const router = useRouter();
    function toReply() {
      router.push({path:"/submission/comment-reply",query:{replyCount:props.result.replyCount}});
    }
    return {
      toReply,
    };
  },
};
</script>

<style lang="less">
@import "@/assets/common.less";
.anonymous-comment {
  display: flex;
  flex-direction: column;
  padding: 8px;
  min-height: 64px;
  border-bottom: #eaeaea 1px solid;
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
  & > :first-child {
    margin-bottom: 0;
    display: flex;
    min-height: 35px;
    position: relative;
  }
  .reply {
    margin-bottom: 0;
    display: flex;
    & > :nth-child(2) {
      padding-left: 15px;
    }
  }
  .good-count {
    position: absolute;
    right: 10px;
    .good {
      margin-right: 5px;
    }
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  span {
    font-size: 12px;
    text-align: left;
    padding-left: 40px;
    display: block;
  }
}
</style>
