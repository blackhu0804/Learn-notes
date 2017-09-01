var curPage = 1
var perPageCount = 10


start()

function start(){
  getData(function(newsList){
  console.log(newsList)

  $.each(newsList,function(idx,news){
    var $node = getNode(news)
    $node.find('img').on('load',function(){
      $('#pic-ct').append($node)
      console.log($node, 'loaded...')
      waterFallPlace($node)
      })
    })
  })
}

$('#load').on('click',function(){
  start();
})


function getData(callback){
  $.ajax({
    url: 'http://platform.sina.com.cn/slide/album_tech',
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    data: {
      app_key: '1271687855',
      num: perPageCount,
      page: curPage
    }
  }).done(function(ret){
    if(ret && ret.status && ret.status.code === '0'){
      callback(ret.data) //生成Dom结构
      curPage++
    }else {
      console.log('get error data')
    }
  })
}

function getNode(item){
  var html = ''
  html += '<li class="item">'
  html +=   '<a href="' + item.url + '" class="link">'
  html +=     '<img src="' + item.img_url + '" alt="">'
  html +=     '<h4 class="header">' + item.short_name + '</h4>'
  html +=     '<p class="desp">' + item.short_intro + '</p>'
  html += '</a></li>'

  return $(html)
}

function waterFallPlace($node){
  var colSumHeight = []
  var colNum = parseInt($('#pic-ct').width()/$('.item').outerWidth(true))
  for(var i = 0;i < colNum;i++){
    colSumHeight[i] = 0
  }

  $('.item').each(function(){
    var minValue = Math.min.apply(null,colSumHeight)
    var minIndex = colSumHeight.indexOf(minValue)

    $(this).css({
      top:colSumHeight[minIndex],
      left: $(this).outerWidth(true) * minIndex
    })

    colSumHeight[minIndex] += $(this).outerHeight(true)
    $('#pic-ct').height(Math.max.apply(null,colSumHeight)) //获取最大高度，用于判断滚动到底部
  })
}
$(window).resize(function(){
      waterFallPlace('.item')
})

