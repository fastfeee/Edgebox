var str = '';
dataIndex.navs.forEach(function(item){
    var domStr = `
    <li>
    <a href="../view/Mavic.html?class=${item.class}">
        <div><img
                src="${item.icon}"
                alt="没有找到图片" /></div>
        <div>${item.title}</div>
    </a>
    </li>
    `
    str+=domStr
})
$1('.goods_ul').innerHTML = str

// 渲染三个新品
var newgoods = '';
dataIndex.Mavic.new.forEach(function(item){
    var newStr = `
    <div class="main_top_left" style="background-image: url(${item.imgbg1});">
            <a href="../view/product.html?id=${item.id}">
                <div class="main_img">
                    <img src="${item.imgbg2}"
                        alt="">
                </div>
                <img src="${item.imghover}"
                    alt="">
                <div class="item-info">
                    <h2>${item.title}</h2>
                    <div class="item-top">${item.cnt}</div>
                    <div class="item-center">${item.description}</div>
                    <div class="item-bottom">
                        <span>￥<i>=${item.price}</i></span>
                    </div>
                </div>
            </a>
    </div>
    `
    newgoods+=newStr
})
$1('.main_top').innerHTML = newgoods
// 渲染两个单品
$1('#main>.main_min_bottom>.main-cnt>a').href= '../view/product.html?id='+dataIndex.Mavic.main.id
$1('.main-cnt>a .a_left').style.backgroundImage = 'url('+dataIndex.Mavic.main.imgurl+')'
$1('.main-cnt>a h3').innerText = dataIndex.Mavic.main.title
$1('.main-cnt>a p').innerText = dataIndex.Mavic.main.description
$1('.main-cnt>a .a_right_price').innerText = '￥'+dataIndex.Mavic.main.price
// for(var i = 0;len = )
// 渲染商品列表
var goodsClass = '';
dataIndex.Mavic.list.forEach(function(item){
    var listGood = `
        <li>
            <a href="../view/product.html?id=${item.id}">
                <div class="li_img">
                    <img src="${item.imgbg}"
                    alt="">
                    <div>
                        <img src="${item.imghover}"alt="">
                        <p>${item.description}</p>
                    </div>
                </div>
                <div class="li_text">${item.title}</div>
                <div class="li_text_two">￥${item.price}</div>
            </a>
        </li>
    `
    goodsClass += listGood
})
$1('.ft-ul').innerHTML = goodsClass
//渲染轮播图
var bannerImg = '';
dataIndex.banner.forEach(function(item){
    var bannervlu = `
    <div>
    <a href="../view/product.html?id=${item.id}">
    <div class="box_top">${item.codeTitle}</div>
    <div class="box_bottom">${item.title}</div>
    </a>
    </div>
    `
    bannerImg += bannervlu
})
$1('#img_box').innerHTML = bannerImg