<template>
  <PullRefresh
    v-model="state.loading"
    success-text="刷新成功"
    @refresh="onRefresh"
  >
    <HotPointCell
      :rank="1"
      title="Popular Schemes for Designers and Artists?Popular Schemes for Designers and Artists"
    />
    <HotPointCell :rank="2" />
    <HotPointCell :rank="3" />
    <HotPointCell :rank="4" />
    <HotPointCell :rank="5" />
    <HotPointCell :rank="6" />
    <HotPointCell :rank="7" />
    <HotPointCell :rank="8" />
    <HotPointCell :rank="9" />
    <HotPointCell :rank="10" />
    <UnderEmpty />
  </PullRefresh>
</template>

<script>
import { PullRefresh } from "vant";
import HotPointCell from "@/components/HotPointCell.vue";
import UnderEmpty from "@/components/UnderEmpty.vue";
import { reactive } from "vue";

export default {
  name: "HotPoint",
  components: {
    PullRefresh,
    HotPointCell,
    UnderEmpty,
  },
  setup() {
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
      state,
      onRefresh,
    };
  },
};
</script>