<template>
  <NavBar left-text="返回" left-arrow @click-left="goBack" fixed placeholder>
    <template #title> {{ replyCount }}条回复 </template>
  </NavBar>
  <List
    v-model:loading="state.loading"
    :finished="state.finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="comment-reply" v-for="item in state.list" :key="item">
      <div>
        <Image
          round
          fit="cover"
          width="32px"
          height="32px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="personInfo">
          <p>{{ item.userName }}</p>
          <small>{{ item.publishTime }}</small>
        </div>
        <div class="good-count">
          <Icon name="good-job-o" class="good" />
          <small>{{ item.count }}</small>
        </div>
      </div>
      <span>{{ item.describe }}</span>
    </div>
  </List>
</template>

<script>
import { Image, Icon, NavBar, List } from "vant";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { getCurrentInstance } from "vue"; //当前组件实例
export default {
  name: "CommentReply",
  components: {
    Image,
    Icon,
    NavBar,
    List,
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
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
            publishTime: "2021/05/31 15:30",
            count: 3,
            describe: "杭师大杭师大杭师大杭师大杭师大杭师大杭师大杭师大杭师大杭师大",
          });
        }
        state.loading = false;
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };

    const { ctx } = getCurrentInstance();
    const replyCount = ctx.$router.currentRoute.value.query.replyCount;

    return {
      goBack,
      onLoad,
      state,
      replyCount,
    };
  },
};
</script>

<style lang="less">
@import "@/assets/common.less";
.comment-reply {
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
