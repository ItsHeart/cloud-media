<template>
  <div class="title">
    <Icon name="wap-home" />
    <span>个人信息</span>
  </div>
  <div class="info">
    <div class="person">
      <Image
        round
        fit="cover"
        width="10vw"
        height="10vw"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <span>老婆就一个很好起名字</span>
      <Badge content="未认证" />
      <Badge content="HZNU" color="#f08a5d" />
    </div>
    <Image
      fit="cover"
      width="100%"
      height="140px"
      src="./hznu.jpg"
      class="imageCard"
    />
  </div>
  <div class="title">
    <Icon name="friends" />
    <span>我的关注</span>
  </div>
  <div class="follow">
    <Grid direction="horizontal" :column-num="3">
      <GridItem icon="chat-o" text="帖子" />
      <GridItem icon="description" text="课程" />
      <GridItem icon="friends-o" text="用户" to="/self/users"/>
    </Grid>
  </div>
</template>

<script>
import { Icon, Image, Grid, GridItem } from "vant";
import Badge from "@/components/Badge.vue";

export default {
  name: "Self",
  components: {
    Icon,
    Image,
    Badge,
    Grid,
    GridItem,
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/common.less";

.title {
  padding: 3px @border-padding;
  font-size: 14px;
  * {
    margin-right: 5px;
  }
}
.info {
  width: calc(100vw - 2 * @border-padding);
  background-color: #fff;
  overflow: hidden;
  padding: @border-padding;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > *:not(:last-child) {
    display: flex;
    align-items: center;
    margin-bottom: @border-padding;
  }
}
.person {
  font-size: 14px;
  > * {
    margin-right: @border-padding;
  }
}
.imageCard {
  * {
    border-radius: 5px;
  }
}
.follow {
  width: calc(100vw - 2 * @border-padding);
  background-color: #fff;
  padding: 0 @border-padding;
}
</style>
