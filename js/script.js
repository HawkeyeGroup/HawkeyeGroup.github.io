// <![CDATA[
$(function() {

  // Slider
 $(document).ready(function() {
        $('#coin-slider').coinslider({
        width: 950, // 幻灯面板的宽度
        height: 450, // 幻灯面板的高度
        spw: 7, // 小方块的宽度（切换时的小方块）
        sph: 5, // 小方块高度
        delay: 3000, // 切换等待时间
        sDelay: 30, // 切换所用时间
        opacity: 0.7, // 标题背景色的透明度
        titleSpeed: 500, // 标题出现的速度
        effect: '', // 采用的效果，可选random, swirl, rain, straight
        navigation: true, // 显示按钮
        links : true, // 图片带链接
        hoverPause: true // 鼠标悬浮时是否停止
       
      });
});

  // Radius Box
  $('.menu_nav ul li a, .content p.pages span, .content p.pages a').css({"border-radius":"18px", "-moz-border-radius":"18px", "-webkit-border-radius":"18px"});
  //$('.content .sidebar .gadget, .fbg_resize').css({"border-radius":"12px", "-moz-border-radius":"12px", "-webkit-border-radius":"12px"});
  //$('.content p.pages span, .content p.pages a').css({"border-radius":"16px", "-moz-border-radius":"16px", "-webkit-border-radius":"16px"});
  //$('.menu_nav').css({"border-bottom-left-radius":"16px", "border-bottom-right-radius":"16px", "-moz-border-radius-bottomleft":"16px", "-moz-border-radius-bottomright":"16px", "-webkit-border-bottom-left-radius":"16px", "-webkit-border-bottom-right-radius":"16px"});

});	

// Cufon
Cufon.replace('h1, h2, h3, h4, h5, h6, .content .mainbar .article a.com', { hover: true });
//Cufon.replace('h1', { color: '-linear-gradient(#fff, #ffaf02)'});
//Cufon.replace('h1 small', { color: '#8a98a5'});

// ]]>