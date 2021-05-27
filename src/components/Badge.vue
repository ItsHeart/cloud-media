<template>
  <div class="badge" :style="{ backgroundColor: color }">
    <span>{{ content }}</span>
  </div>
</template>

<style lang="less">
@import "@/assets/theme/vant.theme.less";

.badge {
  display: inline-block;
  box-sizing: border-box;
  min-width: 16px;
  padding: 2px 5px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  font-family: Roboto, Noto, Helvetica, Arial, sans-serif;
  line-height: 1.2;
  text-align: center;
  background-color: @accent-color1;
  border: 1px solid #fff;
  border-radius: 10px;
}
</style>

<script>
export default {
  name: "Badge",
  props: {
    content: String,
    color: String,
  },
};
</script>