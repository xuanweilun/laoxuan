$(function(){
   $("input,select,.lock,.human,.a").hide();
   $(".background_img1").animate({
     "top":"0"
   },2000,function(){
     $("input,select,.lock,.human,.a").fadeIn(2000);
     $("input,select,.lock,.human,.a").animate({
       "opacity":0.8
     });
   });

   $(".background_img2").animate({
     "top":"50%"
   },2000);

   $(".submit,.reset").on("mouseleave",function(){
      $(this).animate({
        "left":"200px"
      },200,function(){
        $(this).animate({
          "left":"40px"
        },200,function(){
          $(this).animate({
            "left":"150px"
          },200,function(){
            $(this).animate({
              "left":"120px"
            });
          });
        });
      });
   });

   $(".selectBox,a").on("mouseleave",function(){
      $(this).animate({
        "left":"-150px"
      },300,function(){
        $(this).animate({
          "left":"80px"
        },300,function(){
          $(this).animate({
            "left":"0px"
          });
        });
      });
   });

});
