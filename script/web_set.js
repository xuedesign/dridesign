//圖片輪播
$(function(){
  SyntaxHighlighter.all();
});
$(window).load(function(){
  $('.flexslider').flexslider({
	animation: "slide",
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
});	 

// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

//圖片延遲載入
$(function() {
 $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
});

// 載完網頁自動縮網址列
window.addEventListener("load",function() {  
	setTimeout(function(){
	window.scrollTo(0, 1); }, 100);
});

	  

	 
  
	  
 