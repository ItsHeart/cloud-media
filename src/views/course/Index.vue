<template>
  <Search
    v-model="searchValue"
    round
    placeholder="请输入搜索关键词"
    input-align="center"
  />
  <List
    v-model:loading="state.loading"
    :finished="state.finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <Cell
      class="course"
      v-for="item in state.list"
      :key="item"
      :title="item"
      center
      value="张佳"
      label="信息技术与工程学院"
    />
  </List>
</template>

<style lang="less" scoped>
@import "@/assets/common.less";
.course {
  .van-cell__title {
    text-align: left;
  }
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}
.van-search {
  width: 100%;
}
.van-list {
  width: 100%;
}
</style>

<script>
import { Search, List, Cell, Divider } from "vant";
import { ref, reactive, onMounted } from "vue";

export default {
  name: "course",
  components: {
    Search,
    List,
    Cell,
    Divider,
  },
  setup() {
    const searchValue = ref("");
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
    return { searchValue, state, onLoad };
  },
};
</script>