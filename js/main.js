!function(){
    var duration = 50

    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if (n < code.length){
                setTimeout(run, duration)
            }else{
                fn && fn.call()
            }
        },30)
    }
    var css = `
/*
* 首先，给皮卡丘一个黄皮
*/
#preview {
    height: 100%;
    display: flex;
    background: #FEE433;
    justify-content: center;
    align-items: center;
    
}

.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
    /* 水平居中 */
}
/*
* 其次，给皮卡丘一个鼻子
*/
.nose {
    width: 0px;
    height: 0px;
    border: 12px solid red;
    /* border-width: 10px 12px; */
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}
/*
* 接着，给皮卡丘一双眼睛
*/
.eye {
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
}
/*
* 给眼睛加上个眼珠子
*/
.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid black;
}
/*
* 左眼在这里，
*/
.eye.left {
    right: 50%;
    margin-right: 90px;
}
/*
* 右眼在这里，
*/
.eye.right {
    left: 50%;
    margin-left: 90px;
}
/*
* 然后，给皮卡丘的脸两个腮红
*/
.face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

.face.left {
    right: 50%;
    margin-right: 116px;
}

.face.right {
    left: 50%;
    margin-left: 116px;
}
/*
* 最后，给皮卡丘加上小嘴巴和舌头
*/
.upperLip {
    height: 25px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 52px;
    border-top: none;
    background: #FEE433;
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 50px 25px;
    border-right: none;
    transform: rotate(-20deg);
}

.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 50px 25px;
    border-left: none;
    transform: rotate(20deg);
}

.lowerLip-wrapper {
    /* border: 1px solid red; */
    width: 300px;
    height: 130px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    bottom: -25px;
    overflow: hidden;
}

.lowerLip {
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/1800px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

.lowerLip::after {
    content: '';
    width: 120px;
    height: 120px;
    /* border: 1px solid blue; */
    position: absolute;
    bottom: -15px;
    background: #FC4A62;
    left: 50%;
    margin-left: -60px;
    border-radius: 50%;
}
/*
* 这就完成一个皮卡丘了
*/`

    writeCode('',css)

    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active')
            .siblings().removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}.call()