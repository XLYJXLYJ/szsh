<template>
    <div class="contain-2-1">
        <div class="head">
            <div class="return"><img src="../../assets/ArticleUnscramble/return.png" alt=""></div>
            <router-link to="/WarningExposure">
                <div class="clear"><img src="../../assets/ArticleUnscramble/clear.png" alt=""></div>
            </router-link>
            <div class="clear-text"><p>廉洁石岩</p></div>
        </div>
        <div class="context-0">
            <img src="../../assets/WarningExposure/head.png" alt="">
        </div>
        <div class="context-1">
            <div class="title"><p>监察机关采察序查措机关采察序查机关采察序查机关采察序查施的程序性规定</p></div>
        </div>
        <div class="time"><p class="left">来源:中国纪检监察报</p><p class="right">发布时间：2018-6-22</p></div>


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
        <!-- <div class="context-5">
            <p>来源<span>|</span>中央纪委国家监委网站</p>
            <div class="qr"><img src="../../assets/ArticleUnscramble/qr.png" alt=""></div>
            <div class="bottom-img"><img src="../../assets/ArticleUnscramble/bottom.png" alt=""></div>
        </div> -->
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
.contain-2-1{
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
    .context-0{
        min-width:100%;
        height: auto; 
        img{
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
    .context-4{
        min-width: 90%;
        height:auto;
        margin-top: 40px;
        ul{
            li{
                margin-left: 15px;
                margin-right: 15px;
                margin-top: 20px;
                margin-bottom: 20px;
                p{
                    text-indent: 2em;
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

