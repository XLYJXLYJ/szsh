<template>
  <div id="app">
    <router-link to="/LawsRegulations">党纪法规模块</router-link>
    <router-link to="/ArticleUnscramble">条文解读模块</router-link>
    <router-link to="/StudyAnswer">学习问答模块</router-link>
    <router-link to="/WarningExposure">警示曝光模块</router-link>
    <router-link to="/VideoEducation">视频教育模块</router-link>
    <router-link to="/CleanCulture">廉洁文化模块</router-link>
    <router-link to="/ReportOffense">我要举报模块</router-link>
    <router-link to="/ReportInquiries">举报查询模块</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,pre,form,input,textarea,p,hr,thead,tbody,tfoot,th,td{
  margin:0;
  padding:0;
}
ul,ol{
  list-style:none;
}
a{
  text-decoration:none;
}
html{
  -ms-text-size-adjust:none;
  -webkit-text-size-adjust:none;
  font-size: 100px;
}
body{
  line-height:1.5;
  font-size:16px;
}
body,button,input,select,textarea{
  font-family:'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',\5FAE\8F6F\96C5\9ED1,\5B8B\4F53,sans-serif;
}
b,strong{
  font-weight:bold;
}
i,em{
  font-style:normal;
}
table{
  border-collapse:collapse;border-spacing:0;
}
table th,table td{
  border:1px solid #ddd;
  padding:5px;
}
table th{
  font-weight:inherit;
  border-bottom-width:2px;
  border-bottom-color:#ccc;
}
img{
  border:0 none;
  width:auto\9;
  max-width:100%;
  vertical-align:top;
}
button,input,select,textarea{
  font-family:inherit;
  font-size:100%;
  margin:0;
  vertical-align:baseline;
}
button,html input[type="button"],input[type="reset"],input[type="submit"]{
  -webkit-appearance:button;
  cursor:pointer;
}
button[disabled],input[disabled]{
  cursor:default;
}
input[type="checkbox"],input[type="radio"]{
  box-sizing:border-box;
  padding:0;
}
input[type="search"]{
  -webkit-appearance:textfield;
  -moz-box-sizing:content-box;
  -webkit-box-sizing:content-box;
  box-sizing:content-box;
}
input[type="search"]::-webkit-search-decoration{
  -webkit-appearance:none;
}
@media screen and (-webkit-min-device-pixel-ratio:0){
input{
  line-height:normal!important;
}
}
select[size],select[multiple],select[size][multiple]{
  border:1px solid #AAA;padding:0;
}
article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{
  display:block;
}
audio,canvas,video,progress{
  display:inline-block;
}
</style>
