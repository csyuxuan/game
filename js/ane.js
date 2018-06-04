/**
 * Created by web-01 on 2018/5/23.
 */

//海葵类
//所有海葵都在此类中50条
var aneObj = function(){
    //start point,control point,end point
    this.rootx = [];//start point   y值固定在最底部
    this.headx = [];//end point
    this.heady = [];
    this.amp = [];//正浮    (-1~1)
    this.alpha = 0;//正弦函数的角度。。
}
aneObj.prototype.num = 50;//50条海葵...
aneObj.prototype.init = function(){

    var h = canHeight;
    for(var i=0;i<this.num;i++){
        //每个海葵，生长的位置随机，比较像自然生长
        this.rootx[i] = i * 16 + Math.random()*20;
        this.headx[i] = this.rootx[i];;//如果结束点在中心，是一条笔直线段
        this.heady[i] = canHeight - 250 + Math.random()*50;
        this.amp[i] = Math.random() * 50 + 50;
    }
}

aneObj.prototype.draw = function(){

    //海葵是随着时间变化的
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
    //console.log(l);
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.globalAlpha = 0.6;
    ctx2.lineCap = "round";
    ctx2.lineWidth = 20;

    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight);
        this.headx[i] = this.rootx[i] + l * this.amp[i];

        ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
        //ctx.strokeStyle();
        ctx2.stroke();
    }
    ctx2.restore();

}
/*//ane.js保存所有的海葵的行为与数据
//海葵版本一：静止
//海葵版本二：摆动
//海葵50条，从画布底端向上绘制直线路径
//紫色，半透明
//1.创建海葵类
var aneObj=function(){
    this.x=[];//海葵x坐标
    this.len=[];//海葵高度
};
//2.创建海葵数量
aneObj.prototype.num=50;
//3.创建海葵初始化方法
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.x[i]=i*16+Math.random()*20;
        this.len[i]=200+Math.random()*50;
    }
    //console.log(this.x);
    //console.log(this.len);
}
//4.创建绘制海葵方法
aneObj.prototype.draw=function(){
    //1:保存画笔的状态
    ctx2.save();
    //2.设置描边样式，透明度，圆角，宽度
    ctx2.lineWidth=20;
    ctx2.strokeStyle="#3b154e";
    ctx2.globalAlpha=0.6;//透明度
    ctx2.lineCap="round";//圆角
    //5：创建循环绘制路径
    for(var i=0;i<this.num;i++){
        //6：开始新路径->移动画布底端->向上画一条直线->描边
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeightt);
        ctx2.lineTo(this.x[i],canHeightt-this.len[i]);
        ctx2.stroke();
    }
    //7：恢复画笔状态
    ctx2.restore();
}
//5.将ane.js加载到index.html文件中
//6.在main.js相应位置创建海葵对象并且调方法*/
