var str = '';
dataList.navs.forEach(function(item){
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
// 获取商品的分类的参数
var listClass = getQueryString('class');
var data1 = dataList[listClass];
$1('#center .big_img').style.backgroundImage = 'url('+data1.banner.bgimg+')'
$1('#center .big_img .img_word').innerText = data1.banner.title
$1('#center .center_goods .top_goods h2').innerText = data1.title
$1('#center .conter_goods a').href = '../view/product.html?id='+data1.main.id
$1('#center .center_goods .conter_goods .cnt_left').style.backgroundImage = 'url('+data1.main.imgurl+')'
$1('#center .center_goods .conter_goods .cnt_left').style.backgroundRepeat = 'no-repeat'
$1('#center .center_goods .conter_goods .cnt_right h3').innerText = data1.main.title
$1('#center .center_goods .conter_goods .cnt_right p').innerText = data1.main.description
$1('#center .center_goods .conter_goods .cnt_right .cnt_right_price').innerText = '￥'+data1.main.price
$1('#center .center_goods .conter_goods .conter-right').style.backgroundImage = 'url('+data1.main.poster+')'
// 获取商品列表
var listStr = '';
data1.list.forEach(function(item){
    var listString = `
    <li>
    <a href="../view/product.html?id=${item.id}">
        <div class="li_left" style="background-image: url(${item.imgurl});"></div>
        <div class="li_right">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="li_right_price">￥${item.price}</div>
        </div>
    </a>
    </li>
    `
    listStr += listString
})
$1('.bottom_goods>ul').innerHTML = listStr