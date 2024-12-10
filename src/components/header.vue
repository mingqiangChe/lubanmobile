<!-- 头部组件 -->
<template>
  <div class="in">
    <div class="logo"></div>
    <div class="menu"></div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.in {
  height: 107px;
  background-color: pink;
  padding: 17px 31px 0 37px;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 236px;
    height: 66px;
    // background: url(http://img.sdlb.cc/web/logoimgyinying1.png);
    background-color: red;
    background-size: cover;
  }
  .menu {
    width: 30px;
    height: 24px;
    background-color: blue;
    margin-top: 15px;
  }
}
</style>
