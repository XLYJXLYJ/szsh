<template>
    <div class="contain-3">
        <div class="head-img">
            <a href=""><img src="../assets/WarningExposure/head.png" alt=""></a>
        </div>
        <div class="article">
            <h2 class="lib-title">视频教育</h2>
            <div class="lib-context">
                <ul>
                    <router-link to="/VideoEducationDetail">
                        <li>
                            <img class="left-img" src="../assets/ArticleUnscramble/1.png" alt="">
                            <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                            <p class="time-text"><img class="time" src="../assets/ArticleUnscramble/time.png" alt="">2018-06-11</p>
                        </li>
                    </router-link>
                    <li>
                        <img class="left-img" src="../assets/ArticleUnscramble/1.png" alt="">
                        <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                        <p class="time-text"><img class="time" src="../assets/ArticleUnscramble/time.png" alt="">2018-06-11</p>
                    </li>
                    <li>
                        <img class="left-img" src="../assets/ArticleUnscramble/1.png" alt="">
                        <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                        <p class="time-text"><img class="time" src="../assets/ArticleUnscramble/time.png" alt="">2018-06-11</p>
                    </li>
                    <li>
                        <img class="left-img" src="../assets/ArticleUnscramble/1.png" alt="">
                        <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                        <p class="time-text"><img class="time" src="../assets/ArticleUnscramble/time.png" alt="">2018-06-11</p>
                    </li>
                    <li>
                        <img class="left-img" src="../assets/ArticleUnscramble/1.png" alt="">
                        <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                        <p class="time-text"><img class="time" src="../assets/ArticleUnscramble/time.png" alt="">2018-06-11</p>
                    </li>
                    <li>
                        <img class="left-img" src="../assets/ArticleUnscramble/1.png" alt="">
                        <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                        <p class="time-text"><img class="time" src="../assets/ArticleUnscramble/time.png" alt="">2018-06-11</p>
                    </li>
                    <li>
                        <img class="left-img" src="../assets/ArticleUnscramble/1.png" alt="">
                        <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                        <p class="time-text"><img class="time" src="../assets/ArticleUnscramble/time.png" alt="">2018-06-11</p>
                    </li>
                </ul>
            </div>
            <div class="download-more">
                <p>点击加载更多<img src="../assets/ArticleUnscramble/download.png" alt=""></p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
@import '../css/index.less';
.contain-3{
    min-width: 100%;
    .head-img{
        min-width: 100%;
    }
    .head-img img{
        min-width: 100%;
    }
    .article{
        min-width: 100%;
        height: 56px;
        position: relative;
        margin-top: 20px;
        .lib-title{
        font-size: @md-size;
        font-weight: bold;
        color: @main-color;
        padding: 6px 10px 20px 10px;
        text-align: left;
            img{
                position: relative;
                left: 4px;
                top: 4px;
            }
        }
        .lib-context{
            margin: 10px;
            ul{
                a{
                    color: @title-color;
                }
                li{ 
                    position: relative;
                    min-width: 100%;
                    min-height: 50px;
                    margin-bottom: 10px;
                    border-bottom: 1px solid @border-color;
                    .left-img{
                        width: 120px;
                        height: 92px;
                    }
                    .context-title{
                        height: 48px;
                        position: absolute;
                        top: 0px;
                        left: 140px;
                        overflow: hidden;
                    }
                    .time-text{
                        width: 89px;
                        height: 18px;
                        position: absolute;
                        bottom: 10px;
                        right: 0px;
                        overflow: hidden;
                        color: @text-color;
                        .time{
                        width: 16px;
                        height: 18px;
                        position: relative;
                        top: 0px;
                        right: 0px;
                        }
                    }
                }
            }
        }
        .download-more{
            text-align: center;
            height: 56px;
            margin: 0 auto;
            color: @download-color;
            img{
                position: relative;
                top: 2px;
            }
        }
    }
}
</style>
