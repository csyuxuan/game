/**
 * Created by web-01 on 2018/5/29.
 */
/***保存大鱼相关的数据与行为***/
// 1.创建大鱼类
var momObj=function(){
    this.x;//大鱼位置
    this.y;//大鱼位置
    this.angle;//大鱼角度
    this.bigEye=[];//大鱼眼睛
    this.bigBody=[];//大鱼身体
    this.bigTail=[];//大鱼尾巴
}
// 2.为大鱼类添加初始化方法
momObj.prototype.init=function(){
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;
    for(var i=0;i<2;i++){
        this.bigEye[i]=new Image();
        this.bigEye[i].src="src/bigEye"+i+".png";
    }
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image();
        this.bigBody[i].src="src/bigSwim"+i+".png";
    }
    for(var i=0;i<8;i++){
        this.bigTail[i]=new Image();
        this.bigTail[i].src="src/bigTail"+i+".png";
    }
    //console.log(this.bigEye,this.bigBody,this.bigTail);
}
//3.为大鱼添加绘制方法
momObj.prototype.draw=function(){
    // 1:保存画笔状态
    ctx1.save();
    //2:平移原点
    ctx1.translate(this.x,this.y);
    //3:设备旋转角度
    ctx1.rotate(this.angle);
    //4:绘制身体 以下三个图形需要按照顺序绘制
    var body=this.bigBody[0];
    var tail=this.bigTail[0];
    var eye=this.bigEye[0];
    ctx1.drawImage(body,-body.width*0.5,-body.height*0.5);
    //5:绘制尾巴
    ctx1.drawImage(tail,-tail.width*0.5+30,-tail.height*0.5);
    // 6：绘制眼睛
    ctx1.drawImage(eye,-eye.width*0.5,-eye.height*0.5);
    // 9：恢复画笔状态
    ctx1.restore();
}
// 3.挂载index.html
// 4.在main.js创建大鱼对象并且调用相关方法
