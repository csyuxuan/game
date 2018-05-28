/**
 * Created by web-01 on 2018/5/24.
 */
//fruit.js 保存所有食物
//1：食物有两种颜色：蓝色、橙色
//2：食物：30个 15个可见 15不可见
//3：食物生长：由小到大、向上漂浮
//4：食物漂浮出画布，变为不可见/食物被大鱼吃掉，变为不可见

// 1：创建食物类
var fruitObj=function(){
    this.alive=[];//是否可见
    this.orange=new Image();
    this.blue=new Image();
    this.x=[];
    this.y=[];
    this.l=[];//食物长度
    this.spd=[];//食物速度
    this.fruitType=[];//食物类型
    this.aneNo=[];//所在海葵的坐标
}
// 2：创建食物数量
fruitObj.prototype.num=30;
// 3：创建食物初始化方法
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.l[i]=0;
        this.spd[i]=Math.random()*0.17+0.003;
    }
    //console.log(this.alive,this.x,this.y,this.l,this.spd,this.fruitType);
    this.orange.src="src/fruit.png";
    this.blue.src="src/blue.png";
}
// 4：创建食物绘制方法
fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++) {
        if (this.alive[i]) {
            if(this.l[i]<14){
                //由小变大
                this.l[i]+=this.spd[i]*deltaTime/2;
            }else{
                //向上漂浮
                this.y[i]-=this.spd[i]*deltaTime;
            }
            if (this.fruitType[i] == "blue") {
                var pic = this.blue;
            } else {
                var pic = this.orange;
            }
            ctx2.drawImage(pic,
                this.x[i]-this.l[i]*0.5,
                this.y[i]-this.l[i]*0.5,
                this.l[i],
                this.l[i]);

            //如果漂浮出画布
            if(this.y[i]<10){
               this.alive[i]=false;
            }
        }
    }
}
// 5：挂载到index.html中，并且main.js创建对象调用相应方法

//监听画布中活动状态的果实数量，如果不足15个，就创建一个活动食物
function fruitMonitor(){
   var num=0;
   for(var i=0;i<fruit.num;i++){
       if(fruit.alive[i]){
           num++;
       }
   }
   if(num<15){
       sendFruit();
       return;
   }
}
//从状态为不活动食物中挑一个出生
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}
//食物出生
fruitObj.prototype.born=function(i){
    // 随机获取海葵下标
    var aneID=Math.floor(Math.random()*ane.num);
    // 获取海葵x坐标给食物
    this.x[i]=ane.x[aneID];
    // 获取海葵高度计算食物坐标y
    this.y[i]=canHeight-ane.len[i];
    // 修改状态为true
    this.alive[i]=true;
    this.fruitType[i]=Math.random()<0.9?"blue":"orange";

}
//食物状态改变为不活动
fruitObj.prototype.dead=function(){

}