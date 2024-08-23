$(document).ready(function(){

    // 달력
    $( function() {
        $( "#datepicker" ).datepicker({

            onSelect: function(dateText, inst){
                alert('선택한 날짜: '+dateText)
            }
        });
    } );




    // 스크롤
    ScrollOut({
        onShown: function (el) {
            // use the web animation API
            el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
        },
        onHidden: function (el) {
            // hide the element initially
            el.style.opacity = 1;
        }
    });




    // 예약하기 버튼을 클릭했을 때,
    // 변수로 지정한 내용을 저장하기
    // 예약 알림 팝업이 나타난다.
    $('.section3 .reserBox').find('button').click(function(e){
        e.preventDefault()

        
        // 프로그램 불러오기
        let pro = $('.program option:selected').text()
        console.log(pro)

        // 날짜 불러오기
        let selectDate = $('#datepicker').datepicker('getDate');
        let selectMon = selectDate.getMonth()
        let selectDay = selectDate.getDate()
        console.log(selectMon+1)
        console.log(selectDay)

        // 시간 불러오기
        let time = $('.time option:selected').text()
        console.log(time)

        // 인원 불러오기
        let people = $('.people').val()
        console.log(people)


        $('.fixed').show()
        $('.fixed li').eq(0).find('span').text(pro)
        $('.fixed li').eq(1).find('span').text((selectMon+1)+'월'+selectDay+'일')
        $('.fixed li').eq(2).find('span').text(time)
        $('.fixed li').eq(3).find('span').text(people+'명')
    })


    // x버튼을 클릭했을 때, 예약 알림 팝업이 사라진다.
    $('.fixed p').click(function(){

        $('.fixed').hide()
    })




    // .slideBtn li를 클릭했을 때,
    // 1. 순번을 찾고,
    // 2. 나 자신에게 addClass on
    // 3. 순번에 맞게 li가 오른쪽에서 온다.
    $('.slideBtn li').click(function(){

        var i = $(this).index()
        console.log(i)

        $('.slideBtn li').removeClass('on')
        $(this).addClass('on')

        $('.slide li').eq(i-1).css({'left':0}).stop().animate({'left':'-100%'},1000)
        $('.slide li').eq(i).css({'left':'100%'}).stop().animate({'left':0},1000)
    })


    // 일정시간마다 튕겨주는 기능 만들기(클릭)
    var a = 0;

    function timer(){

        a++;
        if(a==3)a=0;

        $('.slideBtn li').eq(a).trigger('click')
    }
    
    var slide = setInterval(timer,2400)

    
    // .hero .slideBtn div를 클릭했을 때,
    // 슬라이드가 멈추고
    // .hero .slideBtn div와 .hero .slideBtn p에 addClass
    $('.hero .slideBtn div').click(function(){

        clearInterval(slide)
        $('.hero .slideBtn div').addClass('on')
        $('.hero .slideBtn p').addClass('on')
    })


    // .hero .slideBtn p를 클릭했을 때,
    // 슬라이드가 재생되고
    // .hero .slideBtn div와 .hero .slideBtn p에 removeClass
    $('.hero .slideBtn p').click(function(){

        var slide = setInterval(timer,2400)
        $('.hero .slideBtn div').removeClass('on')
        $('.hero .slideBtn p').removeClass('on')
    })




    // .nextBtn2를 클릭했을 때,
    // 자손자를 생성해내고
    // 왼쪽으로 -310씩 이동한다.
    var b = 0;

    $('.nextBtn2').click(function(){

        b++;
        
        $('.section5 .gallery li').eq(b-1).clone().appendTo('.section5 .gallery ul')
        $('.section5 .gallery ul').css({'left':-330*b})
    })

    // 자동으로 버튼을 클릭한 효과를 내라.
    var slide2 = setInterval(function(){

        $('.nextBtn2').trigger('click')
    },2000)

    // .section5 .gallery에 마우스가 들어갔을 때, clearInterval
    $('.section5 .gallery').mouseenter(function(){

        clearInterval(slide2)
    })

    // .section5 .gallery에서 마우스가 떠났을 때, setInterval
    $('.section5 .gallery').mouseleave(function(){

        slide2 = setInterval(function(){

            $('.nextBtn2').trigger('click')
        },2000)
    })




    // .section3 .imgBox .thumb li를 클릭했을 때,
    // 순번을 구하고
    // 순번에 맞게 .section3 .imgBox .big p에 addClass
    $('.section3 .imgBox .thumb li').click(function(){

        var c = $(this).index()

        $('.section3 .imgBox .big p').removeClass('on')
        $('.section3 .imgBox .big p').eq(c).addClass('on')
    })




    // .mobile .ham을 클릭했을 때, .navigation에 addClass
    $('.mobile .ham').click(function(){

        $('.navigation').addClass('on')
    })

    // .navigation>p i를 클릭했을 때, .navigation에 removeClass
    $('.navigation>p i').click(function(){

        $('.navigation').removeClass('on')
    })

    // .navigation em img를 클릭했을 때, .navigation에 removeClass
    $('.navigation em img').click(function(){

        $('.navigation').removeClass('on')
    })


})