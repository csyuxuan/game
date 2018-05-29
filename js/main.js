/**
 * Created by web-01 on 2018/5/22.
 */

    //游戏入口程序
    //1：挂载index.html
    //2:声明游戏中使用的变量
    //2.1：创建2个变量保存画布
    var can1;
    var can2;
    //2.2:创建两个变量保存画笔
    var ctx1;
    var ctx2;
    //2.3：创建一个变量保存背景图片
    var bgPic=new Image();
    //2.4:设置画布的高和宽
    var canWidth=0;
    var canHeight=0;
    //2.5:创建一个变量保存海葵对象
    var ane;
    //2.6:创建一个变量保存食物对象
    var fruit;
    //2.7:创建两个变量保存上一帧执行时间和第二帧的时间差
    var lastTime;
    var deltaTime;
    //2.8:创建一个变量保存大鱼对象
    var mom;
    //3:创建函数game-->启动函数
    function game(){
        init();
        gameloop();
        lastTime=Date.now();//上一帧时间
        deltaTime=0;
    }

    //4:创建函数init,初始化函数，初始化变量和对象值
    function init(){
        //4.1初始化两个画布
        can1=document.getElementById("canvas1");
        can2=document.getElementById("canvas2");
        //4.2初始化两个画笔
        ctx1=can1.getContext("2d");
        ctx2=can2.getContext("2d");
        //4.3 加载图片
        bgPic.src="src/background.jpg";
        //4.4：初始化画布宽度和高度
        canWidth=can1.width;
        canHeight=can1.height;
        //4.5:创建海葵对象并且调用初始化方法；
        ane=new aneObj();//aneObj构造函数在js/ane.js中定义了
        ane.init();//aneObj的原型对象的方法在js/ane.js中定义了
        //4.6:创建食物对象并且调用初始化方法
        fruit=new fruitObj();//js/fruit.js
        fruit.init();//js/fruit.js
        //4.7:创建大鱼对象并且调用初始化方法
        mom=new momObj();//js/mom.js
        mom.init();
    }
    //5:创建函数gameloop,通过智能定时器调用绘制游戏中不同角色功能
    function gameloop(){
        //5.1:创建一个智能定时器调用gameloop
        requestAnimFrame(gameloop);//js/commonFunction.js
        //5.11:两帧之间的时间差；
        var now=Date.now();
        deltaTime=now-lastTime;
        lastTime=now;
        if(deltaTime>40){
            deltaTime=40;
        }
        //5.2:绘制背景图片
        ctx2.clearRect(0,0,canWidth,canHeight);
        drawBackground();//js/background.js
        //5.3:监听画布上食物的数量
        fruitMonitor();
        //5.4:清空画布上的所有元素
        ctx1.clearRect(0,0,canWidth,canHeight);
        //5.8:绘制海葵
        ane.draw();//js/ane.js
        //5.9:绘制食物
        fruit.draw();//js/fruit.js
        //5.10:绘制大鱼
        mom.draw();//js/mom.js
    }
    //6：页面加载成功后调用game函数
    document.body.onload=game;