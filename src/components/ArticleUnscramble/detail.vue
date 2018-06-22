<template>
    <div class="contain-1-1">
        <div class="head">
            <div class="return"><img src="../../assets/ArticleUnscramble/return.png" alt=""></div>
            <router-link to="/ArticleUnscramble">
                <div class="clear"><img src="../../assets/ArticleUnscramble/clear.png" alt=""></div>
            </router-link>
            <div class="clear-text"><p>廉洁石岩</p></div>
        </div>
        <div class="context-1">
            <div class="title"><p>（四十一）监察机关采取调查措施的程序性规定</p></div>
            <div class="time"><p>2018-6-22</p></div>
        </div>
        <div class="context-2">
            <div class="swipe">
                <img src="../../assets/ArticleUnscramble/swipe.gif" alt="">
            </div>
        </div>
        <div class="context-3">
            <div class="brief">
                <img class="book" src="../../assets/ArticleUnscramble/book.png" alt="">
                <div class="brier-text">
                    <p>调查人员进行讯问以及搜查、查封、扣押等重要取证工作，应当对全过程进行录音录像，留存备查。</p>
                    <p><span class="laws">————《中华人民共和国监察法》</span></p> 
                    <span class="num-laws">第四十一条</span>
                </div>
            </div>
        </div>
        <div class="context-4">
            <div class="explain">
                <ul>
                    <li><p>调查人员进行讯问以及搜查、查封、扣押等重要取证工作，调查人员进行讯问以及搜查、查封、扣押等重要取证工作，调查人员进行讯问以及搜查、查封、扣押等重要取证工作，应当对全过程进行录音录像，留存备查。</p></li>
                    <li><p>调查人员进行讯问以及搜查、查封、扣押等重要取证工作，应当对全过程进行录音录像，留存备查。</p></li>
                    <li><p>调查人员进行讯问以及调查人员进行讯问以及搜查、查封、扣押等重要取证工作，调查人员进行讯问以及搜查、查封、扣押等重要取证工作，调查人员进行讯问以及搜查、查封、扣押等重要取证工作，搜查、查封、扣押等重要取证工作，应当对全过程进行录音录像，留存备查。</p></li>
                    <li><p>调查人员进行讯问以及搜查、查封、扣押等重要取证工作，应当对全过程进行录音录像，留存备查。</p></li>
                    <li><p>调查人员进行讯问以及调查人员进行讯问以及搜查、查封、扣押等重要取证工作，调查人员进行讯问以及搜查、查封、扣押等重要取证工作，调查人员进行讯问以及搜查、查封、扣押等重要取证工作，搜查、查封、扣押等重要取证工作，应当对全过程进行录音录像，留存备查。</p></li>
                    <li><p>调查人员进行讯问以及搜查、查封、扣押等重要取证工作，应当对全过程进行录音录像，留存备查。</p></li>
                </ul>
            </div>
        </div>
        <div class="context-5">
            <p>来源<span>|</span>中央纪委国家监委网站</p>
            <div class="qr"><img src="../../assets/ArticleUnscramble/qr.png" alt=""></div>
            <div class="bottom-img"><img src="../../assets/ArticleUnscramble/bottom.png" alt=""></div>
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
.contain-1-1{
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
    .context-1{
        position: relative;
        height: 113px;
        .title{
            margin: 0px;
            padding: 0px;
            position: absolute;
            height: 48px;
            top: 24px;
            margin-left: 16px;
            margin-right: 16px;
            p{
                margin: 0px;
                padding: 0px;
                color: @detail-color;
                height: 58px;
                font-size: @lg-size;
            }
        }
        .time{
            margin: 0px;
            padding: 0px;
            color: @time-color;
            height: 17px;
            font-size: @middle-size;
            p{
                height: 18px;
                position: absolute;
                bottom: 0px;
                left: 16px;
                font-size: @sm-size;
            }
        }
    }
    .context-2{
        .swipe{
            height: auto;
            background-color: @main-color;
            margin-top: 28px;
            margin-left: 14px;
            margin-right: 14px;
            text-align: center;
            p{
                color:@head-color;
                font-size: @lg-size;
                padding-top: 2px;
            }
        }
    }
    .context-3{
        min-width: 90%;
        height:auto;
        .brief{
            min-width: 90%;
            height:auto;
            border: 1px solid @book-border;
            margin-top: 40px;
            margin-left: 24px;
            margin-right: 24px;
            position: relative;
            .book{
                position: absolute;
                top:-15px;
                left:-15px;
                width: 35px;
                height: 24px;
            }
            .brier-text{
                min-width: 90%;
                height:auto;
                margin: 8px;
                background-color: @book-border;
                color: @head-color;
                font-size: @middle-size;
                // position: relative;
                p{
                    line-height: 28px;
                    padding-top: 20px;
                    padding-left: 15px;
                    padding-right: 15px;
                    padding-bottom: 30px;
                    display: block;
                    // position: relative;
                }
                .laws{
                    padding: 0px;
                    position: absolute;
                    right: 24px;
                    bottom: 35px;
                    display: block;
                }
                .num-laws{
                    padding: 0px;
                    position:absolute;
                    right: 24px;
                    bottom: 10px;  
                }
            }
        }
    }
    .context-4{
        min-width: 90%;
        height:auto;
        ul{
            li{
                margin-left: 15px;
                margin-right: 15px;
                margin-top: 20px;
                margin-bottom: 20px;
                p{
                    color: @detail-color;
                    font-size: @middle-size;
                    line-height: 28px;
                }
            }
        }
    }
    .context-5{
        min-width: 90%;
        height:auto;
        p{
            font-size: @xm-size;
            color: @detail-color;
            margin-bottom: 20px;
            margin-left: 15px;
            span{
                margin: 2px;
            }
        }
        .qr{
            min-width: 90%;
            height: 200px;
            text-align: center;
            img{
                height: 200px;
                width: 200px;
            }
        }
        .bottom-img{
            min-width: 90%;
            height: 100px;
            text-align: center;
            img{
                height: 56px;
                width: 213px;
            }
        }
    }
}
</style>

