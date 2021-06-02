<template>
  <Tabs class="tabs" v-model:active="active" swipeable>
    <Tab title="关注">内容 1</Tab>
    <Tab title="热点"><HotPoint /></Tab>
    <Tab title="社区">
      <Community />
    </Tab>
  </Tabs>
</template>

<script>
import { Tab, Tabs } from "vant";
import { ref } from "vue";
import Community from "@/views/home/Community.vue";
import HotPoint from "@/views/home/HotPoint.vue";

export default {
  name: "Home",
  components: {
    Tab,
    Tabs,
    Community,
    HotPoint,
  },
  setup() {
    const active = ref(1);
    return {
      active,
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/common.less";
.tabs {
  width: 100%;
}
</style>