// 获取单个元素
function $1(selector){
    return document.querySelector(selector)
}

// 获取多个元素
function $2(selector){
    return document.querySelectorAll(selector)
}

// 获取元素距离页面左侧及顶部的距离
function offset(dom){
    var ofl = 0 - dom.clientLeft
    var oft = 0 - dom.clientTop
    while(dom){
        ofl += dom.offsetLeft + dom.clientLeft
        oft += dom.offsetTop + dom.clientTop
        dom = dom.offsetParent
    }
    // return [ofl,oft]
    return {left: ofl,top: oft}
}

// 生成指定区间的随机整数
function randomInt(min,max){
    return Math.round( Math.random()*(max-min)+min )
}

// 随机生成十六进制颜色字符串 '#3e3e3e'
function randomColor(){
    var color = '#'
    var str = '0123456789abcdef' // 0-15
    for (var i = 0; i < 6; i++){
        var index = randomInt(0,15)
        color += str[index]
    }
    return color
}

// 随机生成x位验证码（字母数字组合）'2L3mn5'
function randomCode(x){
    x = x || 6 // 设置默认值
    var code = ''
    for (var i = 0; i < x; i++){
        do {
            var ascii = randomInt(48,122)// 生成随机的ascii码
        } while ((ascii >= 58 && ascii <= 64) || (ascii >= 91&&ascii <= 96))
        code += String.fromCharCode(ascii)
    }
    return code
}

// 根据传入的key获取url参数值
function getQuereyString(key){
    var searchStr = location.search
    if (searchStr) {
        var reg = new RegExp('[\?&]'+key+'=([^&]*)[&]?')
        reg.test(searchStr) // 执行匹配
        return RegExp.$1 // 返回第一组匹配的内容
    } else {
        return ''
    }
}

/* 
*   animate 动画函数
*   参数：
*       dom 要运动的元素
*       options 要运动的属性集合
*       callback 动画执行完成后调用的函数（回调函数）,可选
*   功能：
*       1.支持向任意方向缓冲运动
*       2.支持带px单位的属性（top left width height marginLeft fontSzie...）
*       3.支持透明度opacity属性
*       4.支持滚动条scrollLeft和scrollTop属性
*       5.支持同一个元素同时多个属性运动
*/
function animate(dom,options,callback){
    // 格式化options
    for (var attr in options){
        // 获取元素当前的值
        if (attr === 'opacity') {
            // 透明度 目标值和当前值都放大100倍
            var current = getComputedStyle(dom)[attr] * 100
            var target = options[attr] * 100
        } else if (attr.indexOf('scroll')!==-1){
            // 滚动条
            var current = dom[attr]
            var target = options[attr]
        } else {
            // 带px单位的属性
            var current = parseInt( getComputedStyle(dom)[attr] )
            var target = options[attr]
        }
        options[attr] = {
            'current': current,
            'target': target
        }
    }

    clearInterval(dom.timer) // 先清除再启动计时器
    dom.timer = setInterval(function (){
        for (var attr in options){
            // 从options中取出当前属性attr的当前值和目标值
            var current = options[attr].current
            var target = options[attr].target

            // 缓冲运动（持续变化的速度）
            var speed = (target - current) / 10 // 57.8  52.02 ...

            // 整数向上取整，负数向下取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
            
            // 当前的值累加速度
            options[attr].current += speed

            // 临界值判断（停止条件：剩余运动量<=每次的运动量）
            if ( Math.abs(target-current)<=Math.abs(speed) ) {
                // 到达目标位置
                if (attr === 'opacity') {
                    // 透明度
                    dom.style[attr] = target/100
                } else if (attr.indexOf('scroll')!==-1){
                    // 滚动条
                    dom[attr] = target
                } else {
                    // 带px单位的属性
                    dom.style[attr] = target + 'px'
                }

                // 当前attr属性运动完成时从options中删除
                delete options[attr]

                for (var key in options){
                    // for/in遍历，对象必须有属性才会执行到这里
                    return false // 结束当前函数
                }

                // 清除计时器(所有属性运动完成才清除)
                clearInterval(dom.timer)
                // console.log( '到达目标位置。。。' )
                typeof callback === 'function' ? callback() : ''
            } else {
                if (attr === 'opacity') {
                    // 透明度
                    dom.style[attr] = options[attr].current/100
                } else if (attr.indexOf('scroll')!==-1){
                    // 滚动条
                    dom[attr] = options[attr].current
                } else {
                    // 带px单位的属性
                    dom.style[attr] = options[attr].current + 'px'
                }
            }
        }
    },20)
}
