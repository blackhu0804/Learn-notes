
    function carousel($ct) {
      this.$ct = $ct;
      this.init();
      this.bind();
    
    }
    carousel.prototype.init = function(){
      var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
          $preBtn = this.$preBtn = this.$ct.find('.btn-pre'),
          $nextBtn = this.$nextBtn = this.$ct.find('.btn-next'),
          $bullet = this.$bullet = this.$ct.find('.bullet');
    
      var $firstImg = this.$firstImg = $imgCt.find('li').first();
      var $lastImg = this.$lastImg = $imgCt.find('li').last();
      
      this.curPageIndex = 0;
      this.imgLength = $imgCt.children().length;
      this.isAnimate = false;
    
      $imgCt.prepend($lastImg.clone());
      $imgCt.append($firstImg.clone());
    
      $imgCt.width($firstImg.width() * ($imgCt.children().length + 2));
      $imgCt.css({
        'left' : '-1900px'
      })
    }
    carousel.prototype.bind = function(){
      var _this = this;
      this.$preBtn.on('click',function(e){
        e.preventDefault();
        _this.playPre();
      })
    
      this.$nextBtn.on('click',function(e){
        e.preventDefault();
        _this.playNext();
      })
    }
    
    carousel.prototype.playPre = function(){
      var _this = this;
      if(this.isAnimate) return ;
      this.$imgCt.animate({
        left : '+=1900px'
      },function(){
        _this.curPageIndex--;
        if(_this.curPageIndex < 0){
          
          _this.$imgCt.css('left', -(_this.imgLength * _this.$firstImg.width() ));
          _this.curPageIndex = _this.imgLength - 1;
        }
      })
      this.isAnimate = false;
      this.setBullet();
    }
    carousel.prototype.playNext = function(){
      var _this = this;
      if(this.isAnimate)  return;
      this.isAnimate = true;
      this.$imgCt.animate({
        left: '-=1900px'
      },function(){
        _this.curPageIndex++;
        if(_this.curPageIndex === _this.imgLength){
          _this.$imgCt.css({
            'left': '-1900px'
          })
          _this.curPageIndex = 0;
        }
      })
      this.isAnimate = false;
      this.setBullet();
    }
    carousel.prototype.setBullet = function(){
      this.$bullet.children()
        .removeClass('active')
        .eq(this.curPageIndex)
        .addClass('active')
    }

  new carousel($('.carousel'));
