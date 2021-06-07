<template>
  <NavBar
    title="详情"
    left-text="返回"
    left-arrow
    @click-left="goBack"
    fixed
    placeholder
  />

  <div class="anonymous-detail">
    <p class="time">2021/6/2 10:59</p>
    <p><strong class="name">笔名eeeeeeeeeeee</strong></p>
    <div class="sex">
      <Icon class="icon" name="certificate" />
      <span>女</span>
    </div>
    <div class="topic">#分享美食</div>
    <div class="div-text" ref="divRef">
      <p class="text" ref="textRef">{{ text }}</p>
    </div>

    <List
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <AnonymousComment v-for="item in state.list" :key="item" :result="item" />
    </List>
  </div>
</template>

<script>
import { NavBar, Icon, List, Cell, Image } from "vant";
import UnderEmpty from "@/components/UnderEmpty.vue";
import AnonymousComment from "@/components/AnonymousComment.vue";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";

export default {
  name: "AnonymousDetail",
  components: {
    NavBar,
    Icon,
    List,
    Cell,
    Image,
    AnonymousComment,
  },
  setup() {
    const _router = useRouter();
    const text = ref(
      "这是一段文字这是一段字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字"
    );
    const goBack = () => {
      _router.back();
    };
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
    });
    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push({
            userName: "Double Chen",
            publishTime: "2021/05/31",
            describe: "评论评论评论评论评论评论评论评论评论评论评论评论评论评论",
          });
        }
        state.loading = false;
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };

    return {
      text,
      goBack,
      state,
      onLoad,
    };
  },
};
</script>

<style lang="less">
@import "@/assets/common.less";
.anonymous-detail {
  background-color: white;
  text-align: left;
  padding: 12px;
  * {
    margin: 0 0 10px 0;
  }
  .sex {
    height: 20px;
  }
  .icon {
    margin-right: 5px;
  }
}
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
