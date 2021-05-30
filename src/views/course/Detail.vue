<template>
  <NavBar title="课程详情" left-text="返回" left-arrow @click-left="goBack" />
  <Skeleton title avatar :row="3" :loading="loading">
    <div class="info">
      <div class="person">
        <Image
          round
          fit="cover"
          width="32px"
          height="32px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <strong>老婆就一个很好起名字</strong>
        <Badge content="未认证" />
        <Badge content="HZNU" color="#f08a5d" />
      </div>
      <div class="describe">
        <p>
          <Icon name="bar-chart-o" />
          发起了<strong> WEB程序设计 </strong>的课程投票
        </p>
        <p>
          <Icon name="manager-o" /> 张佳老师 <small> 信息技术与工程学院</small>
        </p>
        <p><Icon name="flag-o" /> 累计<strong> 99 </strong>个人发起</p>
      </div>
    </div>
  </Skeleton>
  <Divider>评论</Divider>
  <List
    v-model:loading="state.loading"
    :finished="state.finished"
    finished-text="没有更多了"
    @load="onLoad"
    ><Cell
      class="vote"
      v-for="item in state.list"
      :key="item"
      :title="item"
      center
      value="张佳"
      label="信息技术与工程学院"
    />
  </List>
</template>



<script>
import { NavBar, Skeleton, Image, Divider, Icon, List, Cell } from "vant";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
export default {
  name: "courseDetail",
  components: {
    NavBar,
    Skeleton,
    Icon,
    Image,
    Divider,
    List,
    Cell,
  },
  setup() {
    const _router = useRouter();
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1000);
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
          state.list.push("多媒体技术");
        }
        state.loading = false;
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };
    return {
      goBack,
      loading,
      state,
      onLoad,
    };
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  margin-bottom: 10px;
}
.info {
  width: calc(100vw - 2 * 16px);
  background-color: #fff;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  p {
    margin: 0;
  }
}
.person {
  line-height: 32px;

  display: flex;
  align-items: flex-start;
  .van-image {
    margin-right: 16px;
  }
}
.describe {
  margin-left: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  * {
    line-height: 32px;
  }
}
.vote {
  .van-cell__title {
    text-align: left;
  }
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}
</style>