$(function(){
    $('.menu>li').mouseover(function(){
      $(this).children('.submenu').stop().slideDown(100);
  
    }); //1번괄호
    
    $('.menu>li').mouseout(function(){
      $(this).children('.submenu').stop().slideUp(100);
  
    }); //1번괄호
  
  }); //function괄호 - 생략가능