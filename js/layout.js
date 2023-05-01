$(function(){
    // 헤더
    $(".nav>li").on({
        "mouseover focus":function(){
            $("header").css({
                "background":"#fafafa"
            });
            $("#submenu1").css({
                "display":"block"
            });
            $(".submenucover").css({
                "display":"block"
            });
        },
        "mouseout blur":function(){
            $("header").css({
                "background":"white",
            });
            $("#submenu1").css({
                "display":"none"
            });
            $(".submenucover").css({
                "display":"none"
            });
        }
    });
    $(".sales>li").on({
        "mouseover focus":function(){
            $("header").css({
                "background":"#fafafa"
            });
            $(".submenu2").css({
                "display":"block"
            });
            $(".submenucover").css({
                "display":"block"
            });
        },
        "mouseout blur":function(){
            $("header").css({
                "background":"white",
            });
            $(".submenu2").css({
                "display":"none"
            });
            $(".submenucover").css({
                "display":"none"
            });
        }
    });

    //서브페이지 주택단지 미디어쿼리 제어
    let width = $(window).width();

    if(width<767){ //서브페이지 주택단지 페이드효과 제거
        $("#wrap img, #wrap div, #wrap h2, #wrap h3, #wrap h4, #wrap h5").removeAttr("data-aos");
        $("#sf img, #sf div, #sf h2, #sf h3, #sf h4, #sf h5").removeAttr("data-aos");
        $(".target2030 img, .target2030 div, .target2030 h2, .target2030 h3, .target2030 h4, .target2030 h5").removeAttr("data-aos");
    }

    //서브페이지 뉴스 버튼 이벤트
    $(".nextbtn button:nth-of-type(1)").on("click",function(){ //이전 페이지
        $(".news1-1").css({
            "display":"flex"
        }),
        $(".news1-2").css({
            "display":"none"
        }),
        $(".nextbtn button:nth-of-type(2)").css({
            "border":"1px solid #353535",
            "background":"#353535",
            "color":"white"
        }),
        $(".nextbtn button:nth-of-type(3)").css({
            "border":"1px solid white",
            "background":"white",
            "color":"#a6a6a6"
        })
    })
    $(".nextbtn button:nth-of-type(2)").on("click",function(){ //첫번째 페이지
        $(".news1-1").css({
            "display":"flex"
        }),
        $(".news1-2").css({
            "display":"none"
        }),
        $(".nextbtn button:nth-of-type(2)").css({
            "border":"1px solid #353535",
            "background":"#353535",
            "color":"white"
        }),
        $(".nextbtn button:nth-of-type(3)").css({
            "border":"1px solid white",
            "background":"white",
            "color":"#a6a6a6"
        })
    })
    $(".nextbtn button:nth-of-type(3)").on("click",function(){ //두번째 페이지
        $(".news1-1").css({
            "display":"none"
        }),
        $(".news1-2").css({
            "display":"flex"
        }),
        $(".nextbtn button:nth-of-type(2)").css({
            "border":"1px solid white",
            "background":"white",
            "color":"#a6a6a6"
        }),
        $(".nextbtn button:nth-of-type(3)").css({
            "border":"1px solid #353535",
            "background":"#353535",
            "color":"white"
        })
    })
    $(".nextbtn button:nth-of-type(4)").on("click",function(){ //다음 페이지
        $(".news1-1").css({
            "display":"none"
        }),
        $(".news1-2").css({
            "display":"flex"
        }),
        $(".nextbtn button:nth-of-type(2)").css({
            "border":"1px solid white",
            "background":"white",
            "color":"#a6a6a6"
        }),
        $(".nextbtn button:nth-of-type(3)").css({
            "border":"1px solid #353535",
            "background":"#353535",
            "color":"white"
        })
    })

    //골프앤빌리지 스크롤 이벤트
    $(window).on("scroll",function(){
        let scrollTop = $(this).scrollTop();
        let width = $("body").width();

        if(scrollTop > 0 && width > 1100){
            $(".g-video>video").css({ //골프앤빌리지
                "width":"100%",
                "margin-top":"150px"
            }),
            $(".re100img").css({ //RE100 산업단지
                "max-width":"100%",
                "margin-top":"50px",
                "height":"auto",
                "margin-bottom":"0",
                "padding-left":"0",
                "padding-right":"0"
            })
        }
        else if(scrollTop <= 0 && width > 1100){
            $(".g-video>video").css({ //골프앤빌리지
                "width":"1140px",
                "margin-top":"0"
            }),
            $(".re100img").css({ //RE100 산업단지
                "max-width":"1170px",
                "margin-top":"0",
                "height":"270px",
                "margin-bottom":"100px",
                "padding-left":"210px",
                "padding-right":"210px"
            })
        }
    })

    //target2030 유튜브 연결
    $(".video-play,.video-play+h2").on("click",function(){
        $(".t1-video").css({
            "display":"flex"
        })
    });
    $(".t1-video,.t1-video>span").on('click',function(){
        $(".t1-video").css({
            "display":"none"
        })
    });
});