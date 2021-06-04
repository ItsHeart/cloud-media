<template>
  <div class="anonymous-cell">
    <p class="time">2021/6/2 10:59</p>
    <p><strong class="name">笔名eeeeeeeeeeee</strong></p>
    <div class="sex">
      <Icon class="icon" name="certificate" />
      <span>女</span>
    </div>
    <div class="topic">#分享美食</div>
    <div class="div-text" ref="divRef">
      <p class="text" :class="!btnFold ? 'over' : ''" ref="textRef">
        {{ text }}
      </p>
      <p class="btn" v-if="data.textOver" @click="btnFold = !btnFold">
        {{ btnFold ? "收起" : "展开" }}
      </p>
    </div>
    <div class="comments">
      <Icon class="icon" name="comment-o" />
      <span @click="toDetail">10条评论回复</span>
    </div>

    <Divider :style="{ borderColor: '#888888', margin: '0px 0 0 0' }" />
  </div>
</template>

<script>
import { ActionBar, ActionBarIcon, Divider, Icon } from "vant";
import { useRouter } from 'vue-router';
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount, // 在组件挂载之前执行的函数
  onMounted,
  onBeforeUpdate, // 在组件修改之前执行的函数
  onUpdated,
  onBeforeUnmount, // 在组件卸载之前执行的函数
  onUnmounted,
  computed,
} from "vue";

export default {
  name: "AnonymousCell",
  props: {},
  components: {
    ActionBar,
    ActionBarIcon,
    Divider,
    Icon,
  },
  setup() {

    const btnFold = ref(false);
    const text = ref(
      "这是一段文字这是一段字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字"
    );
    let data = reactive({
      textOver: false,
    });
    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        state.loading = false;
        state.count++;
      }, 1000);
    };
    const router = useRouter();
    function toDetail(){
      console.log("路由跳转");
      router.push("/submission/anonymous-detail");
    };
    let divRef = ref(null);
    let textRef = ref(null);
    onMounted(() => {
      let lineHeight = 20;
      data.textOver = textRef.value.offsetHeight > lineHeight * 3;
    });
    return {
      btnFold,
      text,
      data,
      state,
      onRefresh,
      divRef,
      textRef,
      toDetail,
    };
  },
};
</script>

<style lang="less">
@import "@/assets/common.less";
.anonymous-cell {
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
  .over {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .btn {
    text-align: right;
    color: #1989fa;
    height: 20px;
  }
}
</style>
