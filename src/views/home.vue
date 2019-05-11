<template>
    <div class="home">
        <div class="banner"></div>
        <h2>上次预习语文课中的第三课，工费时30分30秒</h2>
        <div class="container demoList">
            <ul class="clearfix">
                <li>
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    >
                    <p>练习模式</p>
                </li>
                <li>
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    >
                    <p>练习模式</p>
                </li>
                <li>
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    >
                    <p>练习模式</p>
                </li>
                <li>
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    >
                    <p>练习模式</p>
                </li>
            </ul>
            <div class="benTit clearfix">
                错题本
                <a href>更多>></a>
            </div>
            <el-row class="f-tac f-fwb f-fs20 p25">
                <el-col :span="8">课堂名称</el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">题目</div>
                </el-col>
                <el-col :span="8">做题时间</el-col>
            </el-row>
            <div class="benList-box">
                <el-row class="f-tac f-fs16 benList">
                    <a href="javascript:#;">
                    <el-col :span="8" class="f-tal">课堂名称</el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">题目</div>
                    </el-col>
                    <el-col :span="8">做题时间</el-col>
                    </a>
                </el-row>
                <el-row class="f-tac f-fs16 benList">
                    <a href="javascript:#;">
                    <el-col :span="8" class="f-tal">课堂名称</el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">题目</div>
                    </el-col>
                    <el-col :span="8">做题时间</el-col>
                    </a>
                </el-row>
                <el-row class="f-tac f-fs16 benList">
                    <a href="javascript:#;">
                    <el-col :span="8" class="f-tal">课堂名称</el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">题目</div>
                    </el-col>
                    <el-col :span="8">做题时间</el-col>
                    </a>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            currentDate: new Date()
        };
    }
};
</script>

<style scoped>
.benList-box {
    margin-bottom: 55px;
}
.benList-box .el-row a {
    color: #000;
}
.benList-box .el-row a:focus {
    color: #409EFF;
}
.benList div {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #f1f1f1;
}
.p25 {
    padding: 25px 0;
}
.banner {
    background: url(/static/image/banner.jpg) center top no-repeat;
    height: 604px;
}
h2 {
    color: #fc7502;
    font-size: 30px;
    text-align: center;
    margin: 40px 0;
    font-weight: normal;
}
.demoList ul {
    margin-bottom: 100px;
}
.demoList li {
    width: 260px;
    height: 260px;
    float: left;
    margin-right: 50px;
    border-left: 1px solid #eaeceb;
    border-right: 1px solid #eaeceb;
    box-shadow: 0 2px 3px #b2b2b2;
}
.demoList li:last-child {
    margin-right: -50px;
}
.demoList li p {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    text-align: center;
}
.demoList li img {
    height: 200px;
    width: 260px;
    display: block;
}
.benTit {
    height: 70px;
    line-height: 70px;
    padding: 0 25px;
    background-color: #efefef;
    font-size: 18px;
    color: #23794a;
}
.benTit a {
    float: right;
    color: #fc7502;
    text-decoration: none;
}
</style>
