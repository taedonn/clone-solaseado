$(function(){
    //서브페이지 도시소개 마우스휠 이벤트
    let chk = true;

    $(window).on("mousewheel DOMMouseScroll",function(){
        width = $(window).width();
        height = $(window).height();
        top = $(window).scrollTop();

        o1 = $(".o2-1").offset().top;
        o2 = $(".o2-2").offset().top;
        o3 = $(".o2-3").offset().top;
        o4 = $(".o2-4").offset().top;
        o5 = $(".o2-5").offset().top;
        o6 = $(".o2-6").offset().top;

        headerTop = $("header").offset().top;
        
        if(chk){
            chk = false;
            setTimeout(function(){
                chk = true;
            },1400);

            let w_delta = event.wheelDelta / 120;

            if(w_delta < 0 && width > 1100){ // 휠 내릴 때
                if(o1 > 0 && o6 > 0){ //메인배너 => 슬라이드1
                    $(".o2").animate({"top":"0"},800);
                }
                else if(o2 > 0 && o6){ //슬라이드1 => 슬라이드2
                    $(".o2").animate({"top":"-100vh"},800);
                }
                else if(o3 > 0 && o6){ //슬라이드2 => 슬라이드3
                    $(".o2").animate({"top":"-200vh"},800);
                }
                else if(o4 > 0 && o6 > 0){ //슬라이드3 => 슬라이드4
                    $(".o2").animate({"top":"-300vh"},800);
                }
                else if(o5 > 0 && o6 > 0){ //슬라이드4 => 슬라이드5
                    $(".o2").animate({"top":"-400vh"},800);
                }
                else if(o6 > 0 && o5 >= 0){
                    $(".o2").animate({"top":"-500vh"},800);

                    $(".o2-6").animate({"top":"0"},800);
                    setTimeout(function(){
                        $(".o2-6").css({"position":"absolute"});
                    },800);
                }
            }
            else if(w_delta > 0 && width > 1100){ // 휠 올릴 때
                if(o6 == headerTop){
                    $(".o2").animate({"top":"-400vh"},800);

                    $(".o2-6").css({"position":"fixed"});
                    $(".o2-6").animate({"top":"100vh"},800);
                }
                else if(o5 <= 0 && o6 == height){
                    $(".o2").animate({"top":"-300vh"},800);
                }
                else if(o4 <= 0 && o6 == height){
                    $(".o2").animate({"top":"-200vh"},800);
                }
                else if(o3 <= 0 && o6 == height){
                    $(".o2").animate({"top":"-100vh"},800);
                }
                else if(o2 <= 0 && o6 == height){
                    $(".o2").animate({"top":"0"},800);
                }
                else if(o1 <= 0 && o6 == height){
                    $(".o2").animate({"top":"100vh"},800);
                }
            }
        }
    });

    function overviewUp(){ //마우스휠 올릴 때
        let o = $(".o2").offset().top;
        let o1 = $(".o2-1").offset().top;
        let o2 = $(".o2-2").offset().top;
        let o3 = $(".o2-3").offset().top;
        let o4 = $(".o2-4").offset().top;
        let o5 = $(".o2-5").offset().top;
        let o6 = $(".o2-6").offset().top;
        let width = $(window).width();
        let height = $(window).height();
        let headerTop = $("header").offset().top;

        if(o6 == headerTop && width > 1100){ //슬라이드6 => 슬라이드5
            $(".o2").css({
                "top":"-400vh"
            }),
            $(".o2-6").css({
                "position":"fixed",
                "top":"100vh"
            })
        }
        else if(o5 <= 0 && o6 == height &&  width > 1100){ //슬라이드5 => 슬라이드4
            $(".o2").css({
                "top":"-300vh"
            })
        }
        else if(o4 <= 0 && o6 == height && width > 1100){ //슬라이드4 => 슬라이드3
            $(".o2").css({
                "top":"-200vh"
            })
        }
        else if(o3 <= 0 && o6 == height && width > 1100){ //슬라이드3 => 슬라이드2
            $(".o2").css({
                "top":"-100vh"
            })
        }
        else if(o2 <= 0 && o6 == height && width > 1100){ //슬라이드2 => 슬라이드1
            $(".o2").css({
                "top":"0"
            })
        }
        else if(o1 <= 0 && o6 == height && width > 1100){ //슬라이드1 => 메인배너
            $(".o2").css({
                "top":"100vh"
            })
        }
    }

    let reactWidth = $(window).width();
    if(reactWidth<=1100){
        $(".o2").css({
            "position":"relative",
            "top":"0"
        }),
        $(".o2-6").css({
            "position":"relative",
            "top":"0"
        })
    }
    else if(reactWidth>1100){
        $(".o2").css({
            "position":"fixed",
            "top":"100vh"
        }),
        $(".o2-6").css({
            "position":"fixed",
            "top":"100vh"
        })
    }
});