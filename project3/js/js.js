$(document).ready(function(){

    // 인트로화면이 나오자마자
    // .intro_txt .intro_txt1,2,3에 addClass
    $('.intro_txt .intro_txt1').addClass('on')
    $('.intro_txt .intro_txt2').addClass('on')
    $('.intro_txt .intro_txt3').addClass('on')





    // video가 플레이 된 후 9.3초 후에 .intro에 addClass fadeout
    $('video').on('play',function(){
        setTimeout(function(){
            $('.intro').addClass('fadeout')
        },9300)
    })




    // .intro_btn을 클릭했을 때, .intro에 addClass fadeout
    $('.intro_btn').click(function(){

        $('.intro').addClass('fadeout')
    })




    // h1을 클릭했을 때,
    // 1. .intro에 addClass fadein
    // 2. .intro_txt .intro_txt1,2,3에 addClass
    // 3. 영상 다시 재생
    // 4. 다시 addClass fadeout
    // 5. .intro_btn을 클릭하면 바로 다시 fadeout
    $('h1').on('click',function(){
     
        $('.intro').removeClass('fadeout')
        $('.intro').addClass('fadein')

        $('.intro_txt .intro_txt1').removeClass('on')
        $('.intro_txt .intro_txt2').removeClass('on')
        $('.intro_txt .intro_txt3').removeClass('on')
        $('.intro_txt .intro_txt1').addClass('on')
        $('.intro_txt .intro_txt2').addClass('on')
        $('.intro_txt .intro_txt3').addClass('on')

        $('video')[0].currentTime = 0
        $('video')[0].play()

        setTimeout(function(){
            $('.intro').removeClass('fadein')
            $('.intro').addClass('fadeout')
        },9300)

        $('.intro_btn').click(function(){
            $('.intro').removeClass('fadein')
            $('.intro').removeClass('fadeout')
            $('.intro').addClass('fadeout')
        })
    })




    // nav li를 클릭했을 때,
    // 1. 순번찾기
    // 2. 클릭한 순번에 맞게 article에게 addClass
    // 3. 클릭한 순번에 맞게 nav li에게 addClass
    $('nav li').click(function(){

        var a = $(this).index()
        // console.log(a)

        $('section article').removeClass('on')
        $('section article').eq(a).addClass('on')

        $('nav li').removeClass('on')
        $('nav li').eq(a).addClass('on')
    })




    // nav 첫 번째 li를 클릭했을 때, h1에게 addClass
    $('nav li').eq(0).click(function(){

        $('h1').addClass('on')
    })

    // // nav 두 번째 li를 클릭했을 때, h1에게 removeClass
    // $('nav li').eq(1).click(function(){

    //     $('h1').removeClass('on')
    // })
    // // nav 세 번째 li를 클릭했을 때, h1에게 removeClass
    // $('nav li').eq(2).click(function(){

    //     $('h1').removeClass('on')
    // })
    // // nav 네 번째 li를 클릭했을 때, h1에게 removeClass
    // $('nav li').eq(3).click(function(){

    //     $('h1').removeClass('on')
    // })
    // // nav 다섯 번째 li를 클릭했을 때, h1에게 removeClass
    // $('nav li').eq(4).click(function(){

    //     $('h1').removeClass('on')
    // })

    // (위 내용 반복문으로)nav 2~5번째 li를 클릭했을 때, h1에게 removeClass
    for(var b=1; b<5; b++){

        $('nav li').eq(b).click(function(){

            $('h1').removeClass('on')
        })
    }




    // .gal_menu li를 클릭했을 때,
    // 1. 순번을 찾고
    // 2. 순번에 맞게 .gal_menu li에 addClass
    // 3. 순번에 맞게 .gal_img>div에 addClass
    $('.gal_menu li').click(function(){

        var c = $(this).index()

        $('.gal_menu li').removeClass('on')
        $('.gal_menu li').removeClass('on2')
        $('.gal_menu li').eq(c).addClass('on')

        $('.gal_inner').addClass('on')

   
        $('.gal_img>div').removeClass('on')
        $('.gal_img>div').eq(c).addClass('on')
    })




    // .gal_menu 두 번째 li를 클릭했을 때,
    $('.gal_menu li').eq(1).click(function(){

        $(this).removeClass('on')
        $(this).addClass('on2')

        $('.gal_inner').removeClass('on')
    })




    // 스크롤값을 찾아서 .filmo_center ul의 left값에 대입한다.
    $(window).scroll(function(){

        var sc = $(this).scrollTop()
        // console.log(sc)
        $('.filmo_center ul').css({'left':-sc})
    })




    // .nav 4번째 li를 클릭했을 때
    // 1. body에 addClass
    // 2. scrollTop이 항상0
    $('nav li').eq(3).click(function(){

        $('body').addClass('on')
        $('html,body').scrollTop(0)
    })




    // nav 2번째 li를 클릭했을 때,
    // 1. body에 removeclass
    // 2. .about1 .profile에 addClass
    // 3. .about의 scrollTop이 항상0
    $('nav li').eq(1).click(function(){
        
        $('body').removeClass('on')
        $('.about1 .profile').addClass('on')
        $('.about').scrollTop(0)
    })
    // nav 1번째 li를 클릭했을 때,
    // 1. .about1 .profile에 removeClass
    // 2. .about2 .awards에 removeClass
    $('nav li').eq(0).click(function(){

        $('.about1 .profile').removeClass('on')
        $('.about2 .awards').removeClass('on')
    })
    // nav 3번째 li를 클릭했을 때,
    // 1. .about1 .profile에 removeClass
    // 2. .about2 .awards에 removeClass
    // 3. .gal_menu 첫 번째 li를 클릭한 것 같은 trigger
    $('nav li').eq(2).click(function(){

        $('.about1 .profile').removeClass('on')
        $('.about2 .awards').removeClass('on')
        $('.gal_menu li').eq(0).trigger('click')
    })
    // nav 4번째 li를 클릭했을 때,
    // 1. .about1 .profile에 removeClass
    // 2. .about2 .awards에 removeClass
    $('nav li').eq(3).click(function(){

        $('.about1 .profile').removeClass('on')
        $('.about2 .awards').removeClass('on')
    })
    // nav 5번째 li를 클릭했을 때,
    // 1. .about1 .profile에 removeClass
    // 2. .about2 .awards에 removeClass
    // 3. .videoBox .video_menu 첫 번째 li를 클릭한 것 같은 trigger
    $('nav li').eq(4).click(function(){

        $('.about1 .profile').removeClass('on')
        $('.about2 .awards').removeClass('on')
        $('.videoBox .video_menu li').eq(0).trigger('click')
    })

    // nav 1,3,4,5번째 li를 클릭했을 때, .about1 .profile에 removeClass
    // for(var g=0; g<5; g++){
    //     if(g=1) {continue;}

    //     $('nav li').eq(g).click(function(){

    //         $('.about .profile').removeClass('on')
    //     })
    // }

    
    //.about에서 스크롤값을 찾아서 .about2 .awards에 addClass 
    $('.about').scroll(function(){
        var asc = $(this).scrollTop()
        // console.log(asc)
        // $('.about>h2').text(asc)

        if(asc>=650){

            // 화면을 내리면 .profile 없애고, .awards 생기게 하고
            $('.about1 .profile').removeClass('on')
            $('.about2 .awards').addClass('on')
        }else{
            // 화면을 올리면 .awards 없애고, .profile 생기게 하고
            $('.about2 .awards').removeClass('on')
            $('.about1 .profile').addClass('on')
        }
    })




    // .filmo_center li를 클릭했을 때,
    // 1. 순번을 찾고
    // 2. 순번에 맞게 .filmo_center li>div에 addClass
    $('.filmo_center li').click(function(){

        var d = $(this).index()

        $('.filmo_center li>div').removeClass('on')
        $('.filmo_center li:nth-child('+(d+1)+')>div').addClass('on')
    })




    // .videoBox .video_menu li를 클릭했을 때,
    // 1. 순번을 찾고
    // 2. 순번에 맞게 .videoBox .video_play iframe에 addClass
    // 3. 순번에 맞게 자신에게 addClass
    $('.videoBox .video_menu li').click(function(){

        var f = $(this).index()

        $('.videoBox .video_play iframe').removeClass('on')
        $('.videoBox .video_play iframe').eq(f).addClass('on')

        $('.videoBox .video_menu li').removeClass('on')
        $(this).addClass('on')
    })




    // 윈도우에서 마우스가 움직일 때, x값과 y값을 찾아라.
    $(window).mousemove(function(e){

        var x = e.pageX;
        var y = e.pageY;
        // console.log(x)

        // x를 .video .mouse의 left값에 적용하고,
        // y를 .video .mouse의 top값에 적용한다.
        // 이 때, 위치값을 잡아준다.
        $('.video .mouse').css({'left':x-20,'top':y-20})
    })
    
    
    
    
    // .chick에 마우스가 들어갔을 때, .video .mouse에 addClass
    $('.chick').mouseenter(function(){

        $('.video .mouse').addClass('style1')
    })

    $('.chick').mouseleave(function(){

        $('.video .mouse').removeClass('style1')
    })

})