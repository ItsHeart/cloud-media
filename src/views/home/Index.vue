<template>
  <Tabs class="tabs" v-model:active="active" swipeable>
    <Tab title="关注">内容 1</Tab>
    <Tab title="热点">内容 2</Tab>
    <Tab title="社区">内容 3</Tab>
  </Tabs>
</template>

<script>
import { Tab, Tabs } from "vant";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const active = ref(2);
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