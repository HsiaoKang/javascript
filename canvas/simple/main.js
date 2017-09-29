(function (window) {

    let myCanvas = document.getElementById("canvas");
    console.log(canvas);
    let ctx = null;
    if (myCanvas.getContext) {
        ctx = myCanvas.getContext('2d');
        console.log(ctx)

        // 开始绘图
        // ctx.fillRect(25, 25, 100,100);

        // ctx.clearRect(45,45,60,60);
        // ctx.strokeRect(50,50,50,50);

        // 三角形

        // ctx.beginPath();
        // ctx.moveTo(75,50);
        // ctx.lineTo(100,75);
        // ctx.lineTo(100,25);
        // ctx.fill()

        // 画脸

        // ctx.beginPath();
        // ctx.arc(75,75,50,0,,true);
        // ctx.moveTo(110,75);
        // ctx.arc(75,75,35,0,Math.PI, false);
        // ctx.moveTo(65,65);
        // ctx.arc(60,65,5,0,Math.PI * 2, true);
        // ctx.moveTo(95,65);
        // ctx.arc(90,65,5,0,Math.PI * 2,true);
        // ctx.stroke();

        // 画一堆圆

        // for(let i =0; i<4; i++){
        //     for(let j=0; j<3;j++){
        //         ctx.beginPath();
        //         var x = 25 + j *50;
        //         var y = 25 + i *50;
        //         var redius = 20;
        //         var startAngle = 0;
        //         var endAngle = Math.PI + (Math.PI * j) /2;
        //         var anticlockwise = i % 2 == 1;

        //         ctx.arc(x,y,redius,startAngle,endAngle,anticlockwise);

        //         if(i>1){
        //             ctx.fill();
        //         }else{
        //             ctx.stroke();
        //         }
        //     }
        // }

        // 画一堆有颜色的方块

        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6   ; j++) {
                ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                    Math.floor(255 - 42.5 * j) + ', 0)';
                ctx.fillRect(j * 25, i * 25, 25, 25);
            }
        }
    } else {
        console.warn('未能获取canvas上下文')
        return
    }


}())