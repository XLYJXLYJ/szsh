<template>
    <div class="contain-4-1">
        <div class="head">
            <div class="return"><img src="../../assets/ArticleUnscramble/return.png" alt=""></div>
            <router-link to="/CleanCulture">
                <div class="clear"><img src="../../assets/ArticleUnscramble/clear.png" alt=""></div>
            </router-link>
            <div class="clear-text"><p>廉洁石岩</p></div>
        </div>
        <ul>
            <li>
                <p>游戏</p>
                <img src="../../assets/CleanCulture/1.jpg" alt="">
            </li>
            <li>
                <p>游戏</p>
                <img src="../../assets/CleanCulture/1.jpg" alt="">
            </li>
            <li>
                <p>游戏</p>
                <img src="../../assets/CleanCulture/1.jpg" alt="">
            </li>
            <li>
                <p>游戏</p>
                <img src="../../assets/CleanCulture/1.jpg" alt="">
            </li>
            <li>
                <p>游戏</p>
                <img src="../../assets/CleanCulture/1.jpg" alt="">
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
@import '../../css/index.less';
.contain-4-1{
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
    ul{
        margin: 15px;
        min-width: 90%;
        li{
            margin-bottom: 30px;
            border-bottom: 1px solid @border-color;
            p{
                font-size: @lg-size;
            }
            img{
                min-width: 100%;
            }
        }
    }
}
</style>

