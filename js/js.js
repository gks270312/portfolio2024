$(document).ready(function () {

    // (인트로)화면이 나타나면 바로
    // .main .smallTxtL, .main .smallTxtR, .main .smallTxtR p 에 addClass
    $('.main .smallTxtL').addClass('on')
    $('.main .smallTxtR').addClass('on')
    $('.main .smallTxtR p').addClass('on')




    // skills 그래프
    $('.canvas').each(function () {
        // 퍼센트를 표시할 요소 선택
        const spanpercent = $(this).siblings('.percent');

        // 원의 테두리 너비(px) 및 애니메이션 지속 시간(ms) 정의 
        const border = 50;
        const duration = 1000;

        // 캔버스 및 2D 컨텍스트 설정
        const canvas = $(this)[0];
        const ctx = canvas.getContext('2d');

        // 애니메이션에 필요한 변수 및 데이터 속성에서 목표 퍼센트 가져오기
        const targetPercent = $(this).data('percent');
        const posX = canvas.width / 2;
        const posY = canvas.height / 2;
        const onePercent = 360 / 100;
        const result = onePercent * targetPercent;
        const radius = (canvas.width / 2) - (border / 2);
        let percent = 0;
        ctx.lineCap = (targetPercent <= 0) ? 'butt' : 'round';

        // 원을 그리고 퍼센트 업데이트하는 함수
        function arcMove() {
            let degrees = 0;
            let startTime = null;

            // 애니메이션을 처리하는 함수
            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                let progress = (timestamp - startTime) / duration;
                progress = Math.min(1, progress);
                degrees = progress * result;

                // 캔버스 초기화 및 퍼센트 업데이트
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                percent = Math.floor(degrees / onePercent);
                spanpercent.text(percent);

                // 배경 선 그리기
                ctx.beginPath();
                ctx.arc(posX, posY, radius, 0, Math.PI * 2);
                ctx.strokeStyle = '#d9d9d9';
                ctx.lineWidth = border;
                ctx.stroke();

                // 애니메이션 되는 선 그리기
                ctx.beginPath();
                ctx.strokeStyle = '#5C6A8E';
                ctx.lineWidth = border;
                ctx.arc(posX, posY, radius, Math.PI * -0.5, (Math.PI / 180) * degrees - (Math.PI / 2));
                ctx.stroke();

                // 애니메이션이 완료되지 않았다면 계속해서 프레임 요청
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            // 첫 프레임 요청
            requestAnimationFrame(animate);
        }

        // 애니메이션 함수 호출
        arcMove();
    });




    // 화면에서 스크롤했을 때, 스크롤탑값을 찾아라.
    $(window).scroll(function(){

        var sc = $(this).scrollTop()
        var wht = $(window).height()

        for(var a=0; a<=2; a++){
            if(sc>=wht*a && sc<wht*(a+1)){
                $('nav li').removeClass('on')
                $('nav li').eq(a).addClass('on')
            }
        }
    })




    // nav li를 클릭했을 때,
    // 순번을 찾고
    // 순번에 맞게 자신에게 addClass
    // 순번변수와 section의 높이 곱하기
    $('nav li').click(function(){

        var i = $(this).index()
        var sht = $('section').height()

        $('nav li').removeClass('on')
        $(this).addClass('on')

        $('html,body').stop().animate({'scrollTop':i*sht},1200)
    })




    // .btn .conceptview를 클릭했을 때,
    // 자신에게 가장 가까운 li의 순번을 찾고
    // 순번에 맞게 .concept li에 addClass
    // .concept_bg에 addClass
    // .concept li의 scrollTop값 0
    $('.btn .conceptview').click(function(){

        var b = $(this).closest('li').index()

        $('.concept li').removeClass('on')
        $('.concept li').eq(b).addClass('on')

        $('.concept_bg').addClass('on')

        $('.concept li').scrollTop(0)
    })




    // .concept span을 클릭했을 때,
    // .concept_bg에 removeClass
    $('.concept span').click(function(){

        $('.concept_bg').removeClass('on')
    })




    // .popup을 클릭했을 때,
    // nav 두 번째 li를 클릭한 것 같은 trigger
    $('.popup').click(function(){

        $('nav li').eq(1).trigger('click')
    })


})