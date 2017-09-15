var images = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png','images/14.png','images/15.png','images/16.png','images/17.png','images/18.png','images/19.png','images/20.png','images/21.png','images/22.png','images/23.png','images/24.png','images/25.png','images/26.png','images/27.gif','images/28.png','images/29.png','images/30.png','images/31.png','images/32.png','images/33.png','images/34.gif','images/35.png','images/36.png','images/37.png','images/38.png','images/39.png','images/40.png','images/41.png','images/42.png','images/43.png','images/44.png','images/45.png','images/45.png','images/46.png','images/47.png','images/48.png','images/49.png','images/50.png','images/51.png','images/52.png','images/53.png','images/54.png','images/55.png','images/56.png','images/57.png','images/58.png','images/59.png','images/60.png','images/61.png','images/62.png','images/63.png','images/64.png','images/65.png','images/66.png','images/67.png','images/68.png','images/69.png','images/70.png','images/71.png','images/72.png','images/73.png','images/74.png','images/75.png','images/76.png','images/77.png','images/78.png','images/79.png','images/80.png','images/81.png','images/82.png','images/83.png','images/84.png','images/85.png','images/86.png','images/87.png','images/88.png','images/89.png','images/90.png','images/91.png','images/92.png','images/93.png','images/94.png','images/95.png','images/96.png','images/97.png','images/98.png','images/99.png','images/100.png','images/101.png','images/music.png','images/music_off.png','images/Z.jpg','images/Z1.jpg'];
        function loadAllImage(images,callBack){
            var index = 0;
            for(var i = 0 ; i < images.length ; i++){
                var img = new Image();
                img.src = images[i];
                img.onload = function(){
                    index++;

                    if (index == images.length) {
                        callBack(images);
                    };
                }
            }
        }


        loadAllImage(images,function(images){
            var d1 = document.querySelector(".upload");
            d1.style.display='none';
            var d2 = document.querySelector(".content");
            d2.style.display = 'block';
            var swiper = new Swiper('.swiper-container', {
                 onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                    swiperAnimateCache(swiper); //隐藏动画元素 
                    swiperAnimate(swiper); //初始化完成开始动画
                  }, 
                  onSlideChangeEnd: function(swiper){ 
                    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                  },
                pagination: '.swiper-pagination',
                direction: 'vertical'
            });
            $('.slide1 .pic4').click(function(){
                swiper.unlockSwipeToNext();
                swiper.slideTo(1, 1, true);
            })
            
        });


        var audio = document.querySelector("audio");
        audio.src = 'http://j.h5.wps.cn/userMusic/0.13914411374762903_Dancing%20Butterflies%20-%20PM%20Artist%20Sessions%20Project.mp3';
        $('.music').on('click',function(){
            $('.music').hide();
            $('.music_off').show();
            if(audio!==null){             
              if(audio.paused){                 
                  audio.play();//audio.play();// 这个就是播放  
              }else{
               audio.pause();// 这个就是暂停
              }
             }
            }); 

        $('.music_off').on('click',function(){
            $('.music').show();
            $('.music_off').hide();
            if(audio!==null){             
              if(audio.paused){                 
                  audio.play();//audio.play();// 这个就是播放  
              }else{
               audio.pause();// 这个就是暂停
              }
             }      
            });
