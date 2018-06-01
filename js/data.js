/**
 * Created by web-01 on 2018/6/1.
 */
var dataObj=function(){
    this.fruitNum=0;
    this.double=1;
    this.score=0;
    this.gameOver=false;
    this.alpha=0;
}
dataObj.prototype.init=function(){

}
dataObj.prototype.draw=function(){
    ctx1.save();
    var str="得分:"+this.score;
    ctx1.textBaseline="top";
    ctx1.beginPath();
    ctx1.font="35px Verdana";
    ctx1.textAlign="center";
    ctx1.fillStyle="rgba(255,255,255)";
    ctx1.fillText(str,canWidth*0.5,canHeight*0.8);
    ctx1.closePath();
    ctx1.fill();

    if(this.gameOver){
        this.alpha+=deltaTime*0.0001;
        if(this.alpha>1){
            this.alpha=1;
        }
        ctx1.beginPath();
        ctx1.font="55px Verdana";
        ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
        ctx1.fillText("游戏结束",canWidth*0.5,canHeight*0.4);
        ctx1.closePath();
        ctx1.fill();
    }
    ctx1.restore();
}
dataObj.prototype.addScore=function(){
    this.score+=this.double*100;
    this.double=1;
}