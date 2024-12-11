<!-- 主页 -->
<template>
  <div class="in">
    <el-carousel
      class="banner"
      @change="bannerChange"
      indicator-position="none"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
      <div class="dots">
        <div class="dot"></div>
        <div class="dot active"></div>
        <div class="dot"></div>
      </div>
    </el-carousel>
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
            <el-icon><i-ep-arrow-right style="color: #b4a48a" /></el-icon>
          </div>
        </div>
        <div class="iu">
          <div class="iu_l">
            <div class="day">18</div>
            <div class="date">2023.10</div>
          </div>
          <div class="shu"></div>
          <div class="iu_c">万科与微软你banner合作落地致力提升客户服务体验</div>
          <div class="iu_r">
            <el-icon><i-ep-arrow-right style="color: #b4a48a" /></el-icon>
          </div>
        </div>
        <div class="iu">
          <div class="iu_l">
            <div class="day">18</div>
            <div class="date">2023.10</div>
          </div>
          <div class="shu"></div>
          <div class="iu_c">万科与微软你banner合作落地致力提升客户服务体验</div>
          <div class="iu_r">
            <el-icon><i-ep-arrow-right style="color: #b4a48a" /></el-icon>
          </div>
        </div>
        <div class="iu">
          <div class="iu_l">
            <div class="day">18</div>
            <div class="date">2023.10</div>
          </div>
          <div class="shu"></div>
          <div class="iu_c">万科与微软你banner合作落地致力提升客户服务体验</div>
          <div class="iu_r">
            <el-icon><i-ep-arrow-right style="color: #b4a48a" /></el-icon>
          </div>
        </div>
        <div class="iu_b">
          <div class="iu_b1">新闻</div>
          <div class="shu"></div>
          <div class="iu_b1">校内通知</div>
          <div class="shu"></div>
          <div class="iu_b1">更多</div>
          <el-icon><i-ep-arrow-right style="color: #b4a48a" /></el-icon>
        </div>
      </div>
    </div>
    <div class="jujiao">
      <div class="title_bg">College Focus</div>
      <div class="title">学院·聚焦</div>
      <div class="heng"></div>
      <div class="main">
        <div class="main_l">交流合作</div>
        <div class="main_r">
          <div class="titles">
            世界职业院校与技术大学联盟教师专业发展 委员会揭牌仪式在我校举行
          </div>

          <img
            class="jujiao_right"
            src="http://file.sdlb.cc/publicPng/rightRow1.png"
            alt=""
          />
        </div>
        <div class="jujiao_swipers">
          <el-carousel
            @change="swiperChange"
            class="ins"
            indicator-position="none"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
          <div class="dots">
            <div class="dot"></div>
            <div class="dot active"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="lanmu">
      <div class="lanmu_title_bg">Special Columns</div>
      <div class="lanmu_title">专题·栏目</div>
      <div class="lanmu_main">
        <div class="iuss">
          <img
            class="poimg"
            src="http://file.sdlb.cc/866528b68e39496b8b4ee8b9f8c1dba8.jpg"
            alt=""
          />
          <div class="potitle">聚焦两会2023</div>
          <div class="pomore">
            查看更多
            <div class="shu"></div>
          </div>
        </div>
        <div class="iuss">
          <img
            class="poimg"
            src="http://file.sdlb.cc/866528b68e39496b8b4ee8b9f8c1dba8.jpg"
            alt=""
          />
        </div>
        <div class="iuss">
          <img
            class="poimg"
            src="http://file.sdlb.cc/866528b68e39496b8b4ee8b9f8c1dba8.jpg"
            alt=""
          />
        </div>
        <div class="iuss">
          <img
            class="poimg"
            src="http://file.sdlb.cc/866528b68e39496b8b4ee8b9f8c1dba8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="daolan">
      <div class="daolan_title_bg">Tour Guide</div>
      <div class="daolan_title">参观·导览</div>
      <div class="daolan_heng"></div>
      <div class="daolan_pg">
        <img class="daolan_im" src="http://img.sdlb.cc/home/visit.jpg" alt="" />
      </div>
      <img
        class="daolan_dp"
        src="http://file.sdlb.cc/c00a00a4ff8a4ded86f35817407af17a.png"
        alt=""
      />
      <div class="daolanjj">
        <div class="tt">校园简介</div>
        /
      </div>
      <div class="daolandes">Campus Introduction</div>
      <div class="daolanshu"></div>
      <div class="daolanmore">查看更多>></div>
      <div class="daolans">
        <div class="ius"></div>
        <div class="ius"></div>
        <div class="ius"></div>
        <div class="ius"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const bannerChange = (cur, prev) => {
  console.log(cur, prev, 'banner'); //1,2,3,0
};
const swiperChange = (cur, prev) => {
  console.log(cur, prev, 'jj'); //1,2,3,0
};
</script>
<style lang="scss" scoped>
.in {
  .banner {
    height: 424px;
    background-color: green;
    position: relative;
    .dots {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 308px;
      left: 50%;
      transform: translate(-50%, -50%);
      .dot {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        margin: 10px;
      }
      .active {
        background: #ffffff;
        border-radius: 50%;
        border: 2px solid #ffffff;
      }
    }
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
      padding: 43px 49px 0;
      .iu {
        border-bottom: 3px solid #f6f0e8;
        display: flex;
        align-items: center;
        width: 100%;
        padding-bottom: 38px;
        padding-top: 29px;
        .iu_l {
          .day {
            font-family: HYk2gj;
            font-weight: 400;
            font-size: 63px;
            color: #b4a48a;
          }
          .date {
            font-family: HYk2gj;
            font-weight: 400;
            font-size: 25px;
            color: #e34645;
          }
        }
        .shu {
          width: 3px;
          height: 63px;
          background: #dacdb8;
          margin: 0 47px 0 27px;
        }
        .iu_c {
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 23px;
          color: #666666;
          line-height: 38px;
        }
        .iu_r {
          margin-left: 91px;
        }
      }
      .iu_b {
        display: flex;
        justify-content: center;
        margin: 50px 0 57px;
        .iu_b1 {
          font-weight: 500;
          font-size: 26px;
          color: #b4a48a;
        }
        .shu {
          width: 3px;
          height: 30px;
          background: #dacdb8;
          margin: 0 24px;
        }
      }
    }
  }
  .jujiao {
    background: #f2f2f2;
    padding: 61px 0 0 0;
    .title_bg {
      font-family: Source Han Sans CN;
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
      line-height: 28px;
      text-align: center;
      margin-top: -12px;
    }
    .heng {
      width: 134px;
      height: 4px;
      background: #062742;
      margin: 13px auto 56px;
    }
    .main {
      padding: 0 24px;
      display: flex;
      position: relative;
      .main_l {
        width: 102px;
        height: 451px;
        background: #062742;
        font-family: Source Han Sans CN;
        font-weight: 500;
        font-size: 24px;
        color: #ffffff;
        line-height: 33px;
        padding: 17px 26px;
        box-sizing: border-box;
        // margin-bottom: 143px;
        margin-bottom: 183px;
      }
      .main_r {
        .titles {
          width: 551px;
          font-weight: 500;
          font-size: 28px;
          color: #000000;
          line-height: 41px;
          margin-left: 20px;
        }
        .jujiao_right {
          float: right;
          width: 37px;
          height: 13px;
          margin-top: -12px;
        }
      }
      .jujiao_swipers {
        position: absolute;
        right: 24px;
        top: 91px;
        .ins {
          width: 658px;
          height: 402px;
          background-color: #4072c4;
        }
        .dots {
          display: flex;
          justify-content: center;
          margin-top: 33px;
          .dot {
            width: 11px;
            height: 11px;
            border-radius: 50%;
            border: 2px solid #000000;
            margin: 10px;
          }
          .active {
            background: #000000;
            border-radius: 50%;
            border: 2px solid #000000;
          }
        }
      }
    }
  }
  .lanmu {
    padding: 87px 0 0 0;
    .lanmu_title_bg {
      font-weight: 800;
      font-size: 46px;
      color: #062742;
      background: linear-gradient(0deg, #062742 0%, #f2f2f2 94.3603515625%);
      opacity: 0.22;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }
    .lanmu_title {
      font-weight: 400;
      font-size: 48px;
      color: #000000;
      line-height: 28px;
      text-align: center;
      margin-top: -14px;
    }
    .lanmu_main {
      display: flex;
      width: 650px;
      margin: 75px auto 51px;
      overflow-x: auto; /* 仅启用横向滚动 */
      overflow-y: hidden; /* 禁用纵向滚动 */
      white-space: nowrap;

      .iuss {
        width: 281px;
        height: 608px;
        background-color: red;
        border-radius: 12px;
        margin: 0 46px 0 0;
        flex-shrink: 0;
        position: relative;
        .poimg {
          width: 281px;
          height: 608px;
        }
        .potitle {
          writing-mode: vertical-rl;
          letter-spacing: 5px;
          width: 30px;
          font-weight: 400;
          font-size: 32px;
          color: #ffffff;
          position: absolute;
          left: 43px;
          top: 49px;
        }
        .pomore {
          font-weight: 400;
          font-size: 30px;
          color: #ffffff;
          writing-mode: vertical-rl;
          position: absolute;
          right: 35px;
          top: 419px;
          display: flex;
          align-items: center;
          .shu {
            width: 2px;
            height: 50px;
            background: #ffffff;
            margin-top: 12px;
          }
        }
      }
    }
  }
  .daolan {
    // width: 750px;
    background: #f2f2f2;
    padding: 60px 18px 20px;
    .daolan_title_bg {
      font-weight: 800;
      font-size: 46px;
      color: #062742;
      background: linear-gradient(0deg, #062742 0%, #f2f2f2 94.3603515625%);
      opacity: 0.22;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }
    .daolan_title {
      font-weight: 400;
      font-size: 48px;
      color: #000000;
      text-align: center;
      margin-top: -24px;
    }
    .daolan_heng {
      width: 134px;
      height: 4px;
      background: #062742;
      margin: 14px auto 51px;
    }
    .daolan_pg {
      width: 715px;
      height: 244px;
      .daolan_im {
        width: 715px;
        height: 244px;
      }
    }
    .daolan_dp {
      width: 21px;
      height: 31px;
      margin: 148px 0 0 19px;
    }
    .daolanjj {
      font-weight: 500;
      font-size: 24px;
      color: #999999;
      display: flex;
      align-items: center;
      margin: 16px 0 16px 19px;
      .tt {
        font-weight: 500;
        font-size: 36px;
        color: #b33422;
      }
    }
    .daolandes {
      font-weight: 500;
      font-size: 18px;
      color: #999999;
      font-style: italic;
      margin: 0 0 22px 19px;
    }
    .daolanshu {
      width: 272px;
      height: 1px;
      background: #b33422;
    }
    .daolanmore {
      font-weight: 500;
      font-size: 16px;
      color: #444444;
      width: 272px;
      text-align: right;
      margin: 32px 0 80px 0;
    }
    .daolans {
      padding: 0 12px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .ius {
        width: 324px;
        height: 324px;
        background: #ffffff;
        box-shadow: 0px 1px 9px 0px rgba(196, 191, 191, 0.3);
        border-radius: 10px;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
