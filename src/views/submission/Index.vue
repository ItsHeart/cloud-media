<template>
  <Tabs class="tabs" v-model:active="active" swipeable>
    <Tab title="匿名投稿"><Anonymous /></Tab>
    <Tab title="寻物启事">寻物启事</Tab>
  </Tabs>
</template>

<script>
import { Tab, Tabs } from "vant";
import { ref } from "vue";
import Anonymous from "@/views/submission/Anonymous.vue";

export default {
  name: "Submission",
  components: {
    Tab,
    Tabs,
    Anonymous,
  },
  setup() {
    const active = ref(0);
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
