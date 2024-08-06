$(document).ready(function(){

    // .cart .product .img .bottom li를 클릭했을 때,
    // li의 순번을 찾고
    // 해당 순번에 맞게 .cart .product .img .top p에 addClass
    // 해당 순번에 맞게 .cart .product .img .bottom a에 addClass
    $('.cart .product .img .bottom li').click(function(e){
        e.preventDefault()

        var a = $(this).index();
        // console.log(a)

        $('.cart .product .img .top p').removeClass('on')
        $('.cart .product .img .top p').eq(a).addClass('on')

        $('.cart .product .img .bottom a').removeClass('on')
        $('.cart .product .img .bottom a').eq(a).addClass('on')
    })




    // .menu_img img를 클릭했을 때, sub가 보인다.

    $('.menu_img img').click(function(e){
        e.preventDefault()

        $('.main').fadeOut();
        $('.sub').fadeIn()

        $('html,body').scrollTop(0)
    })




    // .section2_inner .menu_img button을 클릭했을 때, 256px씩 왼쪽으로 움직여라.
    var b = 0;

    $('.section2_inner .menu_img button').click(function(){

        b++;
        // console.log(b)
        $('.section2_inner .menu_img li').eq(b-1).clone().appendTo('.section2_inner .menu_img ul');
        $('.section2_inner .menu_img ul').css({'left':-256*b})
        $('.section2_inner .menu_img li').removeClass('on')
        $('.section2_inner .menu_img li').eq(b+2).addClass('on')
    })

    // 자동으로 버튼을 클릭한 효과를 내라.
    var slide = setInterval(function(){

        $('.section2_inner .menu_img button').trigger('click')
    },2000)

    // 마우스가 올라가면 멈추고 마우스가 떠나면 움직여라.
    $('.section2_inner .menu_img ul').mouseenter(function(){

        clearInterval(slide)
    })

    $('.section2_inner .menu_img ul').mouseleave(function(){

        slide = setInterval(function(){
            $('.section2_inner .menu_img button').trigger('click')
    },2000)
    })




    // scrollTop값을 구하고,
    // 특정위치에서 addClass
    $(window).scroll(function(){

        var sc = $(this).scrollTop()
        // $('.main>p').text(sc)

        if(sc>=1950 && sc<=2800){
            $('.section3_inner .story_history .top1').addClass('on')
            $('.section3_inner .story_history .bottom1').addClass('on')
            $('.section3_inner .story_history .top2').addClass('on')
            $('.section3_inner .story_history .bottom2').addClass('on')
            $('.section3_inner .story_history .top3').addClass('on')
            $('.section3_inner .story_history .bottom3').addClass('on')
            $('.section3_inner .story_history .top4').addClass('on')
            $('.section3_inner .story_history .bottom4').addClass('on')
        }else{
            $('.section3_inner .story_history .top1').removeClass('on')
            $('.section3_inner .story_history .bottom1').removeClass('on')
            $('.section3_inner .story_history .top2').removeClass('on')
            $('.section3_inner .story_history .bottom2').removeClass('on')
            $('.section3_inner .story_history .top3').removeClass('on')
            $('.section3_inner .story_history .bottom3').removeClass('on')
            $('.section3_inner .story_history .top4').removeClass('on')
            $('.section3_inner .story_history .bottom4').removeClass('on')
        }
    })




    // .minus를 클릭하면, .number의 숫자가 감소해라.
    $('.minus').click(function(){

        let numberElement = $(this).siblings('.number')
        let currentNumber = parseInt(numberElement.text())
        if (currentNumber > 1) {
            numberElement.text(currentNumber - 1)
        }
    })

    // .plus를 클릭하면, .number의 숫자가 증가해라.
    $('.plus').click(function(){
        
        let numberElement = $(this).siblings('.number')
        let currentNumber = parseInt(numberElement.text())
        numberElement.text(currentNumber + 1)
    })




    // 투명해지면서 자동으로 변경된다.
    var c = 0;

    setInterval(function(){

        c++;
        if(c==3)c=0

        $('.bg .center .left div').eq(c-1).stop().animate({'opacity':'0'},800)
        $('.bg .center .left div').eq(c).stop().animate({'opacity':'1'},800)
    },2000)




    // .util 세 번째 li를 클릭하면, .popUp_bg가 보여라.
    $('.util li').eq(2).click(function(e){
        e.preventDefault()

        $('.popUp_bg').css({'display':'flex'})
    })

    // .popUp .popUp_top>span을 클릭하면, .popUp_bg가 사라져라.
    $('.popUp .popUp_top>span').click(function(){

        $('.popUp_bg').css({'display':'none'})
    })

    // .menu_img span을 클릭했을 때,
    // 숫자(변수)가 증가하게 만들고
    // 그 숫자를 .util em에 출력해라.
    // 그 숫자를 .count span에 출력해라.
    // .alert가 보여라.
    let i = 0;

    $('.menu_img span').click(function(e){
        e.preventDefault()
        i++;
        console.log(i)

        $('.util').find('em').text(i)
        $('.count').find('span').text(i)


        // 나의 부모 a 안에서 p 안에 있는 img태그를 출력해라.
        // 나의 부모 a 안에서 em을 출력해라.
        let timg = $(this).parent('a').find('p').html()
        let txt = $(this).parent('a').find('em').text()
        console.log(timg)
        // .popUp .popUp_top .list에 timg와 txt를 계속 누적되게 출력해라.
        $('.popUp .popUp_top').find('.list').append('<div>'+(timg+txt)+'</div>')


        $('.alert').css({'display':'flex'})
    })

    // .popUp .btn .empty를 클릭했을 때,
    // .util em과 .count span이 0이 되어라.
    // .popUp .popUp_top .list를 비워라.
    $('.popUp .btn .empty').click(function(){

        i = 0;

        $('.util').find('em').text(i)
        $('.count').find('span').text(i)

        $('.popUp .popUp_top').find('.list').empty()
    })

    // .alert button을 클릭했을 때, .alert가 사라져라.
    $('.alert button').click(function(){

        $('.alert').css({'display':'none'})
    })




    // .cart .product .txt .txt5 .bottom a를 클릭했을 때,
    // 숫자(변수)가 증가하게 만들고
    // 그 숫자를 .util em에 출력해라.
    // 그 숫자를 .count span에 출력해라.
    // .alert가 보여라.
    $('.cart .product .txt .txt5 .bottom a').click(function(e){
        e.preventDefault()
        i++;

        $('.util').find('em').text(i)
        $('.count').find('span').text(i)

        $('.alert').css({'display':'flex'})


        // .cart .product .img .top p에 있는 img태그를 출력해라.
        // .cart .product .txt .txt1 .bottom을 출력해라.
        let timg2 = $('.cart .product .img .top').find('p').html()
        let txt2 = $('.cart .product .txt .txt1').find('.bottom').text()

        // .popUp .popUp_top .list에 timg2와 txt2를 계속 누적되게 출력해라.
        $('.popUp .popUp_top').find('.list').append('<div>'+(timg2+txt2)+'</div>')
    })


})