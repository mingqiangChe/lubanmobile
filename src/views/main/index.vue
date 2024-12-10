<!-- 主页 -->
<template>
  <div class="in">
    <div class="banner"></div>
    <div class="yaowen">
      <div class="title_bg">College News</div>
      <div class="title">学院·要闻</div>
      <div class="heng"></div>
      <div class="pg">
        <div class="pg_l"></div>
        <div class="pg_r">
          <div class="pg_r1"></div>
          <div class="pg_r2"></div>
        </div>
      </div>
      <div class="list">
        <div class="iu">
          <div class="iu_l">
            <div class="day">18</div>
            <div class="date">2023.10</div>
          </div>
          <div class="shu"></div>
          <div class="iu_c">万科与微软你banner合作落地致力提升客户服务体验</div>
          <div class="iu_r">
            <el-icon><i-ep-arrow-right /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.in {
  .banner {
    height: 424px;
    background-color: green;
  }
  .yaowen {
    padding-top: 91px;
    .title_bg {
      font-weight: 800;
      font-size: 46px;
      color: #062742;
      background: linear-gradient(0deg, #062742 0%, #f2f2f2 94.3603515625%);
      opacity: 0.22;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }
    .title {
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 48px;
      color: #000000;
      text-align: center;
      margin-top: -16px;
    }
    .heng {
      width: 134px;
      height: 4px;
      background: #062742;
      margin: 0 auto;
      margin-top: 14px;
      margin-bottom: 63px;
    }
    .pg {
      display: flex;
      padding: 0 17px;
      justify-content: space-between;
      .pg_l {
        width: 309px;
        height: 553px;
        background-color: #394140;
      }
      .pg_r {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .pg_r1 {
          width: 395px;
          height: 240px;
          background-color: #d7d7d9;
        }
        .pg_r2 {
          width: 395px;
          height: 304px;
          background-color: #7db6a8;
        }
      }
    }
    .list {
      .iu {
        border-bottom: 3px solid #f6f0e8;
      }
    }
  }
}
</style>
