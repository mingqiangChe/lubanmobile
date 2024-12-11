<!-- 头部组件 -->
<template>
  <div class="in">
    <div class="logo"></div>
    <div class="menu" @click="openMenu(true)"></div>
    <!-- 里面的头部 -->
    <div class="in_head" v-show="openStatus">
      <div class="logo">qq</div>
      <div class="shut" @click="openMenu(false)">x</div>
    </div>
    <div class="mark" v-show="openStatus"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const openStatus = ref(false);
const openMenu = (st) => {
  openStatus.value = st;
};
</script>
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
  .in_head {
    width: 100vw;
    height: 117px;
    background-color: pink;
    padding: 17px 31px 0px 37px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    animation: heightdistance linear 0.5s;
    .logo {
      width: 236px;
      height: 66px;
      // background: url(http://img.sdlb.cc/web/logoimgyinying1.png);
      background-color: red;
      background-size: cover;
    }
    .shut {
      width: 30px;
      height: 24px;
      // background-color: blue;
      margin-top: 15px;
    }
  }
  .mark {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    animation: backopa linear 0.2s;
  }
}
@keyframes heightdistance {
  0% {
    height: 0;
  }

  100% {
    height: 118px;
  }
}
@keyframes backopa {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>
