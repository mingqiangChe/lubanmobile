import { instance } from './request';
//获取导航目录
export function getNavList() {
  return instance.get('content/directory/getAll');
}
// 获取首页轮播图
export function getIndexBanner(params: any) {
  return instance.get('content/banner/get', { params });
}
// 获取常用链接
export function getCommonLink() {
  return instance.get('content/commonLink/get');
}
// 获取友情链接
export function getFriendLink() {
  return instance.get('content/friendshipLink/get');
}
// 获取组织结构一二级
export function getOrgList() {
  return instance.get('content/organizationStructure/getAll');
}
// 查询媒体社交
export function getMediaSocial(params: any) {
  return instance.get('content/mediumSocialize/get', { params });
}
// 获取校园生活
export function getCampusLife() {
  return instance.get('content/campusLife/get');
}
// 获取校园活动
export function getCampusActivity() {
  return instance.get('content/campusActivity/get');
}
// 获取校园风光
export function getCampusView() {
  return instance.get('content/campusScenery/get');
}
// 查询鲁工大列表全部数据
export function getLudongdaList(params: any) {
  return instance.get('content/lugongda/get', { params });
}
// 获取学院概况列表
export function getAcademyList() {
  return instance.get('content/collegeOverview/get');
}
// 获取学院简介 校训 章程数据详情
export function getAcademyDetail(params: any) {
  return instance.get('content/overviewArticle/getOverviewArticleById', {
    params,
  });
}
// 获取现任领导信息
export function getPresidentInfo() {
  return instance.get('content/currentJob/get');
}
// 获取搜索新闻文章
export function getSearchNews(params: any) {
  return instance.get('content/article/queryNews', { params });
}
// 获取每个板块背景图
export function getBoardBackground() {
  return instance.get('content/backgroundImage/get');
}
// 查询鲁工大精彩推荐
export function getLugongdaRecommend(params: any) {
  return instance.get('content/lugongda/get', { params });
}
