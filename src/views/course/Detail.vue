<template>
  <NavBar
    title="课程详情"
    left-text="返回"
    left-arrow
    @click-left="goBack"
    fixed
    placeholder
  />
  <div class="title">
    <Icon name="contact" />
    <span>投票信息</span>
  </div>
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
      </div>
      <div class="describe">
        <p>
          <Icon name="bar-chart-o" />
          发起了<strong> WEB程序设计 </strong>的课程投票
        </p>
        <p>
          <Icon name="manager-o" /> 张佳老师
          <small> 信息技术与工程学院</small>
        </p>
        <p><Icon name="flag-o" /> 累计<strong> 99 </strong>个人发起</p>
      </div>
    </div>
  </Skeleton>

  <div class="title">
    <Icon name="bar-chart-o" />
    <span>平均结果</span>
  </div>
  <div class="result">
    <p>
      有趣程度：<Rate v-model="result.interesting" readonly allow-half />
      <strong> 3.3</strong>
    </p>
    <p>
      严格程度：<Rate v-model="result.strict" readonly allow-half />
      <strong> 4.1</strong>
    </p>
    <p>
      作业数量：<Rate v-model="result.homework" readonly allow-half />
      <strong> 4.5</strong>
    </p>
  </div>

  <div class="title">
    <Icon name="comment-o" />
    <span>评论</span>
  </div>
  <List
    v-model:loading="state.loading"
    :finished="state.finished"
    finished-text="没有更多了"
    @load="onLoad"
    ><VoteComment
      class="vote"
      v-for="item in state.list"
      :key="item"
      :result="item"
    />
  </List>

  <div style="height: 50px"></div>
  <ActionBar>
    <ActionBarIcon icon="star-o" text="收藏" />
    <ActionBarIcon icon="bulb-o" text="举报" />
    <ActionBarButton color="#222831" text="参与" @click="comment" />
  </ActionBar>
  <ActionSheet v-model:show="commentShow" title="标题">
    <div class="voteContent">
      <p>有趣程度：<Rate v-model="myVote.interesting" /></p>
      <p>严格程度：<Rate v-model="myVote.strict" /></p>
      <p>作业数量：<Rate v-model="myVote.homework" /></p>
      <Cell>
        <Field
          v-model="myVote.describe"
          rows="1"
          autosize
          label="描述"
          type="textarea"
          placeholder="请输入描述"
          maxlength="50"
          show-word-limit
        />
      </Cell>
      <Button type="primary" block>提交</Button>
    </div>
  </ActionSheet>
</template>



<script>
import {
  NavBar,
  Skeleton,
  Image,
  Divider,
  Icon,
  List,
  Cell,
  Rate,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  ActionSheet,
  Field,
  Button,
} from "vant";
import { useRouter } from "vue-router";
import VoteComment from "@/components/VoteComment.vue";
import { ref, reactive } from "vue";
export default {
  name: "CourseDetail",
  components: {
    NavBar,
    Skeleton,
    Icon,
    Image,
    Divider,
    List,
    Cell,
    Rate,
    VoteComment,
    ActionBar,
    ActionBarIcon,
    ActionBarButton,
    ActionSheet,
    Field,
    Button,
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
    const result = reactive({
      interesting: 3.3,
      strict: 4.1,
      homework: 4.5,
    });
    const myVote = reactive({
      interesting: 0,
      strict: 0,
      homework: 0,
      describe: "",
    });
    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push({
            userName: "Double Chen",
            publishTime: "2021/05/31",
            interesting: 3.3,
            strict: 4.1,
            homework: 4.5,
            describe: "zjvivi好啊好，好啊好，好啊好，好啊好，好啊好，好啊好",
          });
        }
        state.loading = false;
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };
    const commentShow = ref(false);
    const comment = () => {
      commentShow.value = true;
    };
    return {
      goBack,
      loading,
      state,
      onLoad,
      result,
      commentShow,
      comment,
      myVote,
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/common.less";
.title {
  background-color: @container-background-color;
  padding: 3px 8px;
  font-size: 14px;
  width: calc(100vw - 2 * 8px);
  text-align: left;
  * {
    margin-right: 5px;
  }
}
.van-skeleton {
  margin: 5px 0 12px 0;
}
.info {
  width: calc(100vw - 2 * 16px);
  background-color: #fff;
  margin-top: 5px;
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
.result {
  text-align: left;
  padding-left: 64px;
  p {
    margin: 12px 0;
    font-size: 14px;
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
.voteContent {
  padding: 16px 16px 10px;
  p {
    color: #646566;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 24px;
    margin: 6px 0;
  }
}
</style>