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
}
// 2：创建食物数量
fruitObj.prototype.num=30;
// 3：创建食物初始化方法
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=true;
        this.x[i]=i*16+Math.random()*20;
        this.y[i]=canHeight-Math.random()*100;
        this.l[i]=0;
        this.spd[i]=Math.random()*0.17+0.003;
        this.fruitType[i]=Math.random()<0.9?"blue":"orange";
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
                this.l[i]+=this.spd[i];
            }else{
                //向上漂浮
                this.y[i]-=this.spd[i]*5;
            }
            if (this.fruitType[i] == "blue") {
                var pic = this.blue;
            } else {
                var pic = this.orange;
            }
            ctx2.drawImage(pic, this.x[i], this.y[i], this.l[i], this.l[i]);
        }
    }
}
// 5：挂载到index.html中，并且main.js创建对象调用相应方法