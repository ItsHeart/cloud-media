<template>
  <NavBar title="Cloud Media" :safe-area-inset-top="true" />
  <div class="container">
    <router-view />
  </div>
  <div style="height: 50px"></div>
  <Tabbar v-model="active" active-color="#222831" inactive-color="#B4B6B5">
    <TabbarItem icon="contact" to="/">首页</TabbarItem>
    <TabbarItem icon="fire-o" to="/course">课程</TabbarItem>
    <TabbarItem icon="thumb-circle-o" to="/submission">投稿</TabbarItem>
    <TabbarItem icon="comment-circle-o" to="/self">我的</TabbarItem>
  </Tabbar>
</template>


<style lang="less">
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
  name: "Home",
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