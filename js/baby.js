/**
 * Created by web-01 on 2018/5/31.
 */
// 小鱼类中所需所有数据与行为
// 1：创建小鱼类
var babyObj=function(){
    // 1.1:创建属性保存小鱼坐标
    this.x=0;
    this.y=0;
    //1.2：创建属性保存小鱼角度
    this.angle=0;
    //1.3：创建属性保存小鱼眼睛数组
    this.babyEye=[];
    //1.4：创建属性保存小鱼身体数组
    this.babyBody=[];
    //1.5：创建属性保存小鱼尾巴数组
    this.babyTail=[];

    this.babyTailIndex=0;
    this.babyTailStart=1;
    this.babyTailEnd=50;

    this.babyEyeIndex=0;
    this.babyEyeStart=1;
    this.babyEyeEnd=2000;

    this.babyBodyIndex=0;
    this.babyBodyStart=1;
    this.babyBodyEnd=3000;
};
// 2：为小鱼类添加初始化方法
babyObj.prototype.init=function(){
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;
    for(var i=0;i<2;i++){
        this.babyEye[i]=new Image();
        this.babyEye[i].src="src/babyEye"+i+".png";
    }
    for(var i=0;i<20;i++){
        this.babyBody[i]=new Image();
        this.babyBody[i].src="src/babyFade"+i+".png";
    }
    for(var i=0;i<8;i++){
        this.babyTail[i]=new Image();
        this.babyTail[i].src="src/babyTail"+i+".png";
    }
    //console.log(this.babyEye,this.babyBody,this.babyTail);
}
// 3：为小鱼类添加绘制方法
babyObj.prototype.draw=function(){
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);

    var deltaY=mom.y-this.y;
    var deltaX=mom.x-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpAngle(beta,this.angle,0.9);

    this.babyTailStart+=deltaTime;
    if(this.babyTailStart>this.babyTailEnd){
        this.babyTailStart=1;
        this.babyTailIndex=(this.babyTailIndex+1)%8;
    }
    this.babyEyeStart+=deltaTime;
    if(this.babyEyeStart>this.babyEyeEnd){
        this.babyEyeStart=1;
        this.babyEyeIndex=(this.babyEyeIndex+1)%2;
        if(this.babyEyeIndex==0){
            this.babyEyeEnd=2000;
        }
        if(this.babyEyeIndex==1){
            this.babyEyeEnd=200;
        }
    }
    this.babyBodyStart+=deltaTime;
    if(this.babyBodyStart>this.babyBodyEnd){
        this.babyBodyStart=1;
        this.babyBodyIndex=(this.babyBodyIndex+1)%8;
        if(this.babyBodyIndex>18){
            this.babyBodyIndex=18;
        }
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var body=this.babyBody[this.babyBodyIndex];
    var tail=this.babyTail[this.babyTailIndex];
    var eye=this.babyEye[this.babyEyeIndex];
    ctx1.drawImage(body,-body.width*0.5,-body.height*0.5);
    ctx1.drawImage(tail,-tail.width*0.5+30,-tail.height*0.5);
    ctx1.drawImage(eye,-eye.width*0.5,-eye.height*0.5);
    ctx1.restore();
}
// 4：将baby.js挂载到index.html
// 5：在main.js 中创建对象并且调用初始化方法和绘制方法