<!-- 底部组件 -->
<template>
  <div class="in">
    <div class="top">
      <div class="top_title_bg">Common Links</div>
      <div class="title">常用·链接</div>
      <div class="heng"></div>
      <div class="common_links">
        <div class="link">
          <div class="name">学院首页</div>
          <div class="heng"></div>
        </div>
        <div class="link">
          <div class="name">学院首页</div>
          <div class="heng"></div>
        </div>
        <div class="link">
          <div class="name">学院首页</div>
          <div class="heng"></div>
        </div>
      </div>
    </div>
    <div class="boot">
      <div class="code">
        <img class="code_img" src="http://img.sdlb.cc/web/code.png" alt="" />
        <div class="t">欢迎关注鲁班学院公众号</div>
      </div>
      <div class="logo"></div>
      <div class="frend_link">
        <div class="tip">友情链接：</div>
        <div class="links">
          <div class="link">山东省教育厅</div>
          <div class="link">枣庄市教育局</div>
        </div>
      </div>
      <div class="heng"></div>
      <div class="icps">
        <div class="icp1">
          版权所有@鲁班学院
          <div class="shu"></div>
          地址：山东省枣庄市薛城区大学城
        </div>
        <div class="icp1">
          邮编：277000
          <div class="shu"></div>
          反馈意见：lbxy@sdlb.cc
          <div class="shu"></div>
          鲁ICP备2023030516号
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { getCommonLink, getFriendLink } from '@/api/common';
</script>
<style lang="scss" scoped>
.in {
  .top {
    padding: 36px 0 253px 26px;
    .top_title_bg {
      width: 364px;
      height: 40px;
      font-family: Source Han Sans CN;
      font-weight: 800;
      font-size: 46px;
      color: #062742;
      background: linear-gradient(0deg, #062742 0%, #f2f2f2 94.3603515625%);
      opacity: 0.22;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .title {
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 48px;
      color: #062742;
      margin-top: -12px;
    }
    .heng {
      width: 134px;
      height: 4px;
      background: #062742;
      margin-top: 14px;
    }
    .common_links {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 31px;
      .link {
        width: 286px;
        margin-top: 49px;
        .name {
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 26px;
          color: #444444;
          text-align: left;
        }
        .heng {
          width: 286px;
          height: 2px;
          background: #d2d2d2;
        }
      }
    }
  }
  .boot {
    width: 750px;
    // height: 664px;
    background: #062742;
    position: relative;
    padding-top: 170px;
    .code {
      width: 270px;
      background-color: #fff;
      position: absolute;
      left: 50%;
      top: -6px;
      transform: translate(-50%, -50%);
      .code_img {
        width: 248px;
        height: 249px;
        margin-left: 11px;
      }
      .t {
        font-family: Source Han Sans CN;
        font-weight: 500;
        font-size: 20px;
        color: #000000;
        padding-bottom: 17px;
        padding-top: 8px;
        text-align: center;
      }
    }
    .logo {
      width: 296px;
      height: 128px;
      background: url(http://file.sdlb.cc/publicPng/footLog.png) no-repeat;
      background-size: cover;
      margin: 0 auto 0;
    }
    .frend_link {
      padding-bottom: 39px;
      .tip {
        font-family: Source Han Sans CN;
        font-weight: 300;
        font-size: 26px;
        color: #d2d2d2;
        line-height: 100px;
        text-align: center;
      }
      .links {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 190px;
        .link {
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 22px;
          color: #d2d2d2;
          height: 23px;
        }
        .link:nth-child(2n-1) {
          border-right: 1px solid #fff;
          padding-right: 45px;
        }
      }
    }
    .icps {
      display: flex;
      flex-wrap: wrap;
      width: 679px;
      margin: 0 auto;
      padding-bottom: 71px;
      border-top: 1px solid #f2f3f9;
      padding-top: 39px;
      .icp1 {
        font-family: Source Han Sans CN;
        font-weight: 500;
        font-size: 18px;
        color: #d2d2d2;
        line-height: 34px;
        display: flex;
        align-items: center;
        .shu {
          width: 1px;
          height: 16px;
          background: #ffffff;
          margin: 0 24px;
        }
      }
    }
  }
}
</style>
