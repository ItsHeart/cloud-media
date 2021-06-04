<template>
  <div class="course-index">
    <Search
      v-model="searchValue"
      round
      placeholder="请输入搜索关键词"
      input-align="center"
    >
    </Search>
    <DropdownMenu>
      <DropdownItem
        title="所有学院"
        v-model="state.filterCollege"
        :options="colleges"
      />
      <DropdownItem
        title="所有老师"
        v-model="state.filterTeacher"
        :options="teachers"
      />
    </DropdownMenu>
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
        is-link
        to="/course/detail"
      />
    </List>
  </div>
</template>

<script>
import {
  Search,
  List,
  Cell,
  Divider,
  Icon,
  DropdownMenu,
  DropdownItem,
} from "vant";
import { ref, reactive } from "vue";

export default {
  name: "Course",
  components: {
    Search,
    List,
    Cell,
    Divider,
    Icon,
    DropdownMenu,
    DropdownItem,
  },
  setup() {
    const searchValue = ref("");
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      filterCollege: "",
      filterTeacher: "",
    });
    const colleges = [
      { text: "信息技术与工程学院", value: 0 },
      { text: "教育学院", value: 1 },
    ];
    const teachers = [
      { text: "张佳", value: 0 },
      { text: "Double-chen", value: 1 },
    ];
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
    return { searchValue, state, onLoad, colleges, teachers };
  },
};
</script>

<style lang="less">
@import "@/assets/common.less";
.course-index {
  width: 100%;
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
  .van-dropdown-menu__item {
    width: 50%;
  }
}
</style>