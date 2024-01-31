var getId = getQuereyString ('id');
var data = ''
for(var i = 0,len = detail.length;i < len;i++){
    if(detail[i].id === getId){
        data = detail[i];
        break;
    }
}
$1('#product .pro-nav').innerHTML = `
<a href="../view/index.html">商城首页</a><span>/</span>
<a href="../view/Mavic.html?class=${data.class}">${data.titleparent[0]}系列</a><span>/</span>
<span>${data.title}</span>
`
$1('#product .pro-cnt .cnt-left-top').style.backgroundImage = 'url('+data.imggood[0]+')'
var smallImg = ''
data.imggood.forEach(function(item){
    var ImgStr = `
    <div style=" background-image: url(${item});">
    <a href="javascript:;"></a>
    </div>
    `
    smallImg += ImgStr
})
$1('.cnt-left-bottom').innerHTML = smallImg
$1('.cnt-right-top div:nth-child(1)').innerText = data.title
$1('.cnt-right-top div:nth-child(2)').innerText = data.price
var liStr = ''
data.description.forEach(function(item){
    var listliStr = `
    <li>${item}</li>
    `
    liStr += listliStr
})
$1('.cnt-right-ul').innerHTML = liStr
$1('.say-detail img').src = data.imgds[0]