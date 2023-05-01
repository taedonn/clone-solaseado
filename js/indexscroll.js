$(document).ready(function(){
    // 스크롤 이벤트 초기화
    function scrollReset() {
        if ($(window).width() > 1100) {
            $("header").css("background","transparent");

            $(".index_body").css("overflow","hidden");
            $("#slide2").css("top","100vh");

            $("#leftwrap").css("top","-400vh");
            $("#rightwrap").css("top","100vh");

            $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
            $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
            $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
            $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});
        }
    }
    scrollReset();

    // 스크롤 이벤트
    let chk = true;

    $(window).on("mousewheel DOMMouseScroll",function(){
        window_width = $(window).width();
        window_height = $(window).height();
        window_top = $(window).scrollTop();
        window_bottom = window_top + window_height;

        left = $(".left").offset().top;
        left_height = $(".left").height();
        left_bottom = left + left_height;

        left1 = $(".left1").offset().top;
        left1_height = $(".left1").height();
        left1_bottom = left1 + left1_height;

        left2 = $(".left2").offset().top;
        left2_height = $(".left2").height();
        left2_bottom = left2 + left2_height;

        left3 = $(".left3").offset().top;
        left3_height = $(".left3").height();
        left3_bottom = left3 + left3_height;

        slide2 = $(".slide2").offset().top;
        slide2_bottom = slide2 + window_height;

        if(chk){ // 일정 시간동안 휠 막기
            chk = false;
            setTimeout( function() { chk = true; },1000 );

            let w_delta = event.wheelDelta / 120;
            
            if(w_delta < 0 && window_width > 1100){ // 휠 내릴 때
                if(left3_bottom == window_top){
                    $("header").css({"background":"white"});

                    $("#leftwrap").css("top","-300vh");
                    $("#rightwrap").css("top","0");
        
                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"1"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});
        
                    $(".fixedanimation svg").css({"right":"44vw"});

                    slideCount1();
                }
                else if(left3_bottom == window_bottom){
                    $("#leftwrap").css("top","-200vh");
                    $("#rightwrap").css("top","-100vh");

                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"1"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});

                    slideCount2();
                }
                else if(left2_bottom == window_bottom){
                    $("#leftwrap").css("top","-100vh");
                    $("#rightwrap").css("top","-200vh");
        
                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"1"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});

                    slideCount3();
                }
                else if(left1_bottom == window_bottom){
                    $("#leftwrap").css("top","0");
                    $("#rightwrap").css("top","-300vh");
        
                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"1"});

                    slideCount4();
                }
                else if(left_bottom == window_bottom){
                    $(".slide2").css({"top":"0","position":"absolute"});
                    $(".index_body").css("overflow","auto");

                    $("#leftwrap").css("top","50vh");
                    $("#rightwrap").css("top","-350vh");

                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});
                }
            }
            else if(w_delta > 0 && window_width > 1100){
                if(slide2_bottom == window_bottom && left_bottom > window_bottom){
                    $(".slide2").css({"top":"100vh","position":"fixed"});
                    $(".index_body").css("overflow","hidden");

                    $("#leftwrap").css("top","0");
                    $("#rightwrap").css("top","-300vh");

                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"1"});

                    slideCount4();
                }
                else if(left_bottom == window_bottom){
                    $("#leftwrap").css("top","-100vh");
                    $("#rightwrap").css("top","-200vh");
        
                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"1"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});

                    slideCount3();
                }
                else if(left1_bottom == window_bottom){
                    $("#leftwrap").css("top","-200vh");
                    $("#rightwrap").css("top","-100vh");

                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"1"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});

                    slideCount2();
                }
                else if(left2_bottom == window_bottom){
                    $("#leftwrap").css("top","-300vh");
                    $("#rightwrap").css("top","0");

                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"1"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});

                    slideCount1();
                }
                else if(left3_bottom == window_bottom){
                    $("header").css({"background":"transparent"});

                    $("#leftwrap").css("top","-400vh");
                    $("#rightwrap").css("top","100vh");

                    $(".videowrap h2:nth-of-type(1)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(2)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(3)").css({"opacity":"0"});
                    $(".videowrap h2:nth-of-type(4)").css({"opacity":"0"});
                }
            }
        }
    });

    //카운트업 이벤트
    function slideCount1() {

        let cnt1 = 0;
        let count1 = setInterval(countUp1,222);
        function countUp1() {
            cnt1++;
            if (cnt1 > 9) { clearInterval(count1); }
            else { $(".counter1").text(cnt1); }
        }

        let cnt2 = 0;
        let count2 = setInterval(countUp2,26.6);
        function countUp2() {
            cnt2++;
            if (cnt2 > 75) { clearInterval(count2); }
            else { $(".counter2").text(cnt2); }
        }

        let cnt3 = 0;
        let count3 = setInterval(countUp3,34.5);
        function countUp3() {
            cnt3++;
            if (cnt3 > 58) { clearInterval(count3); }
            else { $(".counter3").text(cnt3); }
        }
    }

    function slideCount2() {

        let cnt4 = 0;
        let count4 = setInterval(countUp4,666.6);
        function countUp4() {
            cnt4++;
            if (cnt4 > 3) { clearInterval(count4); }
            else { $(".counter4").text(cnt4); }
        }

        let cnt6 = 532;
        let count6 = setInterval(countUp6,20);
        function countUp6() {
            cnt6++;
            if (cnt6 > 632) { clearInterval(count6); }
            else { $(".counter6").text(cnt6); }
        }
    }

    function slideCount3() {

        let cnt7 = 50;
        let count7 = setInterval(countUp7,50);
        function countUp7() {
            cnt7++;
            if (cnt7 > 90) { clearInterval(count7); }
            else { $(".counter7").text(cnt7); }
        }

        let cnt8 = 0;
        let count8 = setInterval(countUp8,200);
        function countUp8() {
            cnt8++;
            if (cnt8 > 10) { clearInterval(count8); }
            else { $(".counter8").text(cnt8); }
        }

        let cnt9 = 0;
        let count9 = setInterval(countUp9,66.6);
        function countUp9() {
            cnt9++;
            if (cnt9 > 30) { clearInterval(count9); }
            else { $(".counter9").text(cnt9); }
        }
    }

    function slideCount4() {

        let cnt11 = 200;
        let count11 = setInterval(countUp11,50);
        function countUp11() {
            cnt11++;
            if (cnt11 > 240) { clearInterval(count11); }
            else { $(".counter11").text(cnt11); }
        }

        let cnt12 = 19500;
        let count12 = setInterval(countUp12,4);
        function countUp12() {
            cnt12++;
            if (cnt12 > 20000) { clearInterval(count12); }
            else { $(".counter12").text(cnt12); }
        }
    }
});