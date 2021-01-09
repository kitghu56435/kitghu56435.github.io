function alla(){
    var n = document.getElementById("num");
    n.innerHTML++;
}
function lesss(){
    var n = document.getElementById("num");
    if(n.innerHTML <= 0){

    }else{
        n.innerHTML--;
    }
}
function star1(){
    var n = document.getElementById("star");
    var bt = document.getElementById("puss");
    var nc = n.children;
    if(nc[0].innerHTML == "★"){
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        bt.disabled = "disabled";
    }else{
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        nc[0].innerHTML="★";
        bt.disabled = "";
    }
}
function star2(){
    var n = document.getElementById("star");
    var bt = document.getElementById("puss");
    var nc = n.children;
    if(nc[1].innerHTML == "★"){
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        bt.disabled = "disabled";
    }else{
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        for(i=0;i<=1;i++)
        nc[i].innerHTML="★";
        bt.disabled = "";
    }
}
function star3(){
    var n = document.getElementById("star");
    var bt = document.getElementById("puss");
    var nc = n.children;
    if(nc[2].innerHTML == "★"){
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        bt.disabled = "disabled";
    }else{
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        for(i=0;i<=2;i++)
        nc[i].innerHTML="★";
        bt.disabled = "";
    }
}
function star4(){
    var n = document.getElementById("star");
    var bt = document.getElementById("puss");
    var nc = n.children;
    if(nc[3].innerHTML == "★"){
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        bt.disabled = "disabled";
    }else{
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        for(i=0;i<=3;i++)
        nc[i].innerHTML="★";
        bt.disabled = "";
    }
}
function star5(){
    var n = document.getElementById("star");
    var bt = document.getElementById("puss");
    var nc = n.children;
    if(nc[4].innerHTML == "★"){
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        bt.disabled = "disabled";
    }else{
        for(i=0;i<=4;i++)
        nc[i].innerHTML="☆";
        for(i=0;i<=4;i++)
        nc[i].innerHTML="★";
        bt.disabled = "";
    }
}
function pussword(){
    var n = document.getElementById("textbox");
    var b = document.getElementById("box");
    b.innerHTML = n.value ;
    n.value="";
}
var q = new Array(18);
function bayalla(i){
    var n = document.getElementsByTagName("span");
    n[i+3].innerHTML++;
    q[i] = n[i+3].innerHTML;
}
function baylesss(i){
    var n = document.getElementsByTagName("span");
    if(n[i+3].innerHTML <= 0){

    }else{
        n[i+3].innerHTML--;
        q[i] = n[i+3].innerHTML;
    }
}
function money(){
  var t = new Array(18);
  t[0] = "羔羊毛背心"; t[1] = "經典純棉7分袖緊身上衣"; t[2] = "設計品牌單邊削肩帽T"; 
  t[3] = "厚磅圓領毛衣"; t[4] = "灰色OVER SIZE襯衫"; t[5] = "長版羽絨外套"; 
  t[6] = "加大羊毛混紡大衣"; t[7] = "內刷毛夾克"; t[8] = "鋪棉飛行外套"; 
  t[9] = "厚喇叭 黑西裝褲"; t[10] = "顯瘦百搭牛仔褲(女)"; 
  t[11] = "潑漆刷破迷彩褲"; t[12] = "破洞牛仔褲(男)"; 
  t[13] = "小腹變不見西裝褲(女)"; t[14] = "直筒褲(女)"; 
  t[15] = "黑色寬褲"; t[16] = "黑色皮革手拿包"; t[17] = "SKECHERS D'LITES"; 
  var m = new Array(18);
  m[0] = 650; m[1] = 3800; m[2] = 1580; 
  m[3] = 399; m[4] = 900; m[5] = 1290; 
  m[6] = 4599; m[7] = 6599; m[8] = 890; 
  m[9] = 980; m[10] = 800; 
  m[11] = 990; m[12] = 1299; 
  m[13] = 499; m[14] = 460; 
  m[15] = 1200; m[16] = 1599;m[17] = 2990;
  var str="";
  var sb=0;
  var product_all = 0;
  for(i=0;i<=17;i++){
      if(q[i]>0){
          str+=t[i]+"*"+q[i]+"&nbsp;&nbsp;&nbsp;&nbsp;"+q[i]*m[i]+"<br/>";
          product_all += q[i]*m[i];
      }else{
          sb++;
      }
  }
  for(i=0;i<=sb;i++)
   str+="<br/>";
  var ans = document.getElementById("m_text");
  ans.innerHTML=str;  
  var mm = document.getElementById("allmoney");
  mm.innerHTML = "總額：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + product_all;
}


