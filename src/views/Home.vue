<template>
  <NavBar title="Cloud Media" :safe-area-inset-top="true" />
  <router-view />
  <div style="height: 50px"></div>
  <Tabbar v-model="active" active-color="#222831" inactive-color="#B4B6B5">
    <TabbarItem icon="manager-o" to="/">我</TabbarItem>
    <TabbarItem icon="fire-o" to="/hotPoint">热点</TabbarItem>
    <TabbarItem icon="thumb-circle-o" to="/course">课程</TabbarItem>
    <TabbarItem icon="comment-circle-o" to="/community">社区</TabbarItem>
  </Tabbar>
</template>

<script>
import { ref } from "vue";
import { Tabbar, TabbarItem, NavBar } from "vant";

export default {
  name: "Home",
  components: {
    Tabbar,
    TabbarItem,
    NavBar,
  },
  setup() {
    const active = ref(0);

    return {
      active,
    };
  },
};
</script>