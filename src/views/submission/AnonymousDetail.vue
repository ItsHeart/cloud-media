<template>
  <NavBar
    title="详情"
    left-text="返回"
    left-arrow
    @click-left="goBack"
    fixed
    placeholder
  />
</template>

<script>
import { NavBar, UnderEmpty } from "vant";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "AnonymousDetail",
  components: {
    NavBar,
    UnderEmpty,
  },
  setup() {
    const _router = useRouter();
    const text = ref(
      "这是一段文字这是一段字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字"
    );
    const goBack = () => {
      _router.back();
    };
    return {
      goBack,
    };
  },
};
</script>

<style lang="less">
@import "@/assets/common.less";
</style>
