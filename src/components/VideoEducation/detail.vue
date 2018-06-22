<template>
    <div class="contain-3-1">
        <div class="head">
            <div class="return"><img src="../../assets/ArticleUnscramble/return.png" alt=""></div>
            <router-link to="/VideoEducation">
                <div class="clear"><img src="../../assets/ArticleUnscramble/clear.png" alt=""></div>
            </router-link>
            <div class="clear-text"><p>廉洁石岩</p></div>
        </div>
        <div class="head-head"><img src="../../assets/VideoEducation/head-head.png" alt=""></div>
        <div class="context-0">
            <video src="static/1.mp4" alt=""></video>
        </div>
        <div class="context-1">
            <div class="title"><p>监察机关采察序查措机关采察序查机关采察序查机关采察序查施的程序性规定</p></div>
        </div>
        <div class="time"><p class="left">来源:中国纪检监察报</p><p class="right">发布时间：2018-6-22</p></div>
        <!-- <div class="context-5">
            <p>来源<span>|</span>中央纪委国家监委网站</p>
            <div class="qr"><img src="../../assets/ArticleUnscramble/qr.png" alt=""></div>
            <div class="bottom-img"><img src="../../assets/ArticleUnscramble/bottom.png" alt=""></div>
        </div> -->
        <div class="lib-context">
            <ul>
                <router-link to="/VideoEducationDetail">
                    <li>
                        <img class="left-img" src="../../assets/ArticleUnscramble/1.png" alt="">
                        <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                        <p class="time-text"><img class="time" src="../../assets/ArticleUnscramble/time.png" alt="">1:12</p>
                    </li>
                </router-link>
                <li>
                    <img class="left-img" src="../../assets/ArticleUnscramble/1.png" alt="">
                    <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                    <p class="time-text"><img class="time" src="../../assets/ArticleUnscramble/time.png" alt="">1:12</p>
                </li>
                <li>
                    <img class="left-img" src="../../assets/ArticleUnscramble/1.png" alt="">
                    <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                    <p class="time-text"><img class="time" src="../../assets/ArticleUnscramble/time.png" alt="">1:12</p>
                </li>
                <li>
                    <img class="left-img" src="../../assets/ArticleUnscramble/1.png" alt="">
                    <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                    <p class="time-text"><img class="time" src="../../assets/ArticleUnscramble/time.png" alt="">1:12</p>
                </li>
                <li>
                    <img class="left-img" src="../../assets/ArticleUnscramble/1.png" alt="">
                    <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                    <p class="time-text"><img class="time" src="../../assets/ArticleUnscramble/time.png" alt="">1:12</p>
                </li>
                <li>
                    <img class="left-img" src="../../assets/ArticleUnscramble/1.png" alt="">
                    <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                    <p class="time-text"><img class="time" src="../../assets/ArticleUnscramble/time.png" alt="">1:12</p>
                </li>
                <li>
                    <img class="left-img" src="../../assets/ArticleUnscramble/1.png" alt="">
                    <h3 class="context-title">(四十一)监察机关采取调查措施的程序性规定</h3>
                    <p class="time-text"><img class="time" src="../../assets/ArticleUnscramble/time.png" alt="">1:12</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                headShow:true,
                detailShow:false
            }
        },
        mounted(){

        },
        methods:{
        }
    }
</script>
<style scoped lang="less">
@import '../../css/index.less';
.contain-3-1{
    min-width: 100%;
    .head{
        height: 45px;
        background-color:#3c3c3d;
        position: relative;
        .return{
            width: 22px;
            height: 45px;
            position: absolute;
            top: 0px;
            left: 0px;
            img{
                width: 12px;
                height: 12px;
                position: absolute;
                top: 16px;
            }
        }
        .clear{
            width: 30px;
            height: 45px;
            position: absolute;
            top: 0px;
            left: 22px;
            img{
                width: 30px;
                height: 30px;
                position: absolute;
                top: 6px;
            }
        }
        .clear-text{
            width: 150px;
            height: 45px;
            margin: 0 auto;
            color: @head-color;
            font-size: @middle-size;
            position: relative;
            p{
                position: absolute;
                left: 25%;
                top: 10px;
                vertical-align: middle;
            }
        }
    }
    .head-head{
        margin: 10px;
    }
    .context-0{
        min-width:100%;
        height: auto; 
        video{
            width: 100%;
            height: 100%;
        }
    }
    .context-1{
        position: relative;
        .title{
            margin: 0px;
            padding: 0px;
            position: relative;
            min-height: auto;
            top: 24px;
            margin-left: 16px;
            margin-right: 16px;
            overflow: hidden;
            p{
                margin: 0px;
                padding: 0px;
                color:@title-color;
                height: 58px;
                font-size: @lg-size;
            }
        }
    }
    .time{
        margin: 0px;
        padding: 0px;
        color: @time-color;
        height: 17px;
        font-size: @middle-size;
        height: 20px;
        position: relative;
        top: 30px;
        border-bottom: 1px solid #f2f3f5;
        margin-left: 15px;
        margin-right: 15px;
        .left{
            height: 18px;
            position: absolute;
            bottom: 0px;
            right: 166px;
            font-size: @sm-size;
        }
        .right{
            height: 18px;
            position: absolute;
            bottom: 0px;
            right: 16px;
            font-size: @sm-size;
        }
    }
    .lib-context{
        margin: 10px;
        margin-top: 40px;
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
                    right: -10px;
                    }
                }
            }
        }
    }
}
</style>

