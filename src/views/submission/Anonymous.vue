<template>
  <Search
    v-model="searchValue"
    round
    placeholder="请输入搜索关键词"
    input-align="center"
  />
  <PullRefresh
    v-model="state.loading"
    success-text="刷新成功"
    @refresh="onRefresh"
  >
    <AnonymousCell />
    <AnonymousCell />

    <UnderEmpty />
  </PullRefresh>
</template>

<script>
import { Search, PullRefresh } from "vant";
import { ref, reactive } from "vue";
import AnonymousCell from "@/components/AnonymousCell.vue";
import UnderEmpty from "@/components/UnderEmpty.vue";

export default {
  name: "Anonymous",
  components: { Search, AnonymousCell, PullRefresh, UnderEmpty },
  setup() {
    const searchValue = ref("");
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
    return {
      searchValue,
      state,
      onRefresh,
    };
  },
};
</script>
