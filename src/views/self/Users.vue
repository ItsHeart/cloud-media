<template>
  <NavBar
    title="关注的用户"
    left-text="返回"
    left-arrow
    @click-left="goBack"
    fixed
    placeholder
  />

  <List
    v-model:loading="state.loading"
    :finished="state.finished"
    finished-text="没有更多了"
    @load="onLoad"
    ><FollowUsers v-for="item in state.list" :key="item" :result="item" />
  </List>

</template>



<script>
import {
  NavBar,
  Cell,
  Image,
  Icon,
  List,
  Rate
} from "vant";
import { useRouter } from "vue-router";
import Badge from "@/components/Badge.vue";
import FollowUsers from "@/components/FollowUsers.vue";
import { ref, reactive } from "vue";
export default {
  name: "selfUsers",
  components: {
    NavBar,
    Cell,
    FollowUsers,
    Icon,
    Image,
    List,
    Badge,
    Rate
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
    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push({
            userName: "giegie妹妹向前冲",
          });
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
      result,
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/common.less";

</style>