$(function(){

    console.log("load")
    $(".main-nav").mouseenter(function(){
        $(".drop").stop().slideDown();
    })
    $(".main-nav").mouseleave(function(){
        $(".drop").stop().slideUp();
    })





    var slidePosition=0;
    var slideLength=0;
    var $slider=$(".slider-wrap");
    var $slide=$slider.children(".slide");
    var $auto=null;
    slideLength=$slide.length;

    $(".slide:gt(0)").hide();

    function slideEvent(){

        function slideFade(){
            $(".slide").fadeOut();
            $(".slide").eq(slidePosition).fadeIn();
        }


        function nextPlay(){
            if(slidePosition==slideLength-1){
                slidePosition=0;
            }else{
                slidePosition++;
            }
            slideFade();
        }

        $(".nextbt").click(function(){
            nextPlay();
        })


        function prevPlay(){
            if(slidePosition<=0){
                slidePosition=slideLength-1;
            }else{
                slidePosition--;
            }
            slideFade();
        }

        $(".prevbt").click(function(){
            prevPlay();
        })


        function autoPlay(){
           $auto=setInterval(function(){
            nextPlay();
           },3000)
        }
        autoPlay();


        $(".slide").hover(
            function(){
                clearInterval($auto);
            },
            function(){
                autoPlay();
            }
        )
    }
    slideEvent();



    $(".n-g-list a").click(function(){
        $(".tab-content").hide();
        $(this.hash).css({display:"flex"});
        $(".n-g-list a").removeClass("active");
        $(this).addClass("active");
    })



    $(".tab-content li a:first-child").click(function(){
        $(".popup").show();
    })
    $(".popup-close").click(function(){
        $(".popup").hide();
    })


    $(".family select").change(function(){
        var $href=$(this).val();
        window.open($href,"_black");
    })
})