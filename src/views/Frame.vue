<template>
  <NavBar title="Cloud Media" />
  <div class="container">
    <router-view />
  </div>
  <div style="height: 50px"></div>
  <Tabbar v-model="active" active-color="#222831" inactive-color="#B4B6B5">
    <TabbarItem :icon="active == 0 ? 'wap-home' : 'wap-home-o'" to="/"
      >首页</TabbarItem
    >
    <TabbarItem
      :icon="active == 1 ? 'thumb-circle' : 'thumb-circle-o'"
      to="/course"
      >课程</TabbarItem
    >
    <TabbarItem
      :icon="active == 2 ? 'comment-circle' : 'comment-circle-o'"
      to="/submission"
      >投稿</TabbarItem
    >
    <TabbarItem :icon="active == 3 ? 'manager' : 'manager-o'" to="/self"
      >我的</TabbarItem
    >
  </Tabbar>
</template>



<style lang="less" scoped>
@import "@/assets/common.less";
.container {
  width: 100vw;
  min-height: calc(100vh - 96px);
  background-color: @container-background-color;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import { Tabbar, TabbarItem, NavBar } from "vant";

export default {
  name: "Frame",
  components: {
    Tabbar,
    TabbarItem,
    NavBar,
  },
  setup() {
    onMounted(() => {
      const { ctx } = getCurrentInstance();
      switch (ctx.$router.currentRoute.value.fullPath) {
        case "/course":
          choiceActive(1);
          break;
        case "/submission":
          choiceActive(2);
          break;
        case "/self":
          choiceActive(3);
          break;
      }
    });
    const active = ref(0);
    const choiceActive = function (newV) {
      active.value = newV;
    };
    return {
      active,
      choiceActive,
    };
  },
};
</script>
