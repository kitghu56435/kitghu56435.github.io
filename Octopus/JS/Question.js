var islist1 = false;var islist2 = false;
var islist3 = false;var islist4 = false;
var islist5 = false;var islist6 = false;
var islist7 = false;var islist8 = false;
var islist9 = false;var islist10 = false;
var islist11 = false;var islist12 = false;
var islist13 = false;var islist14 = false;
var islist15 = false;var islist16 = false;
var islist17 = false;
function ranbox(listc,boxc,arrowc,num){
    var list = document.getElementById(listc);
    var box = document.getElementById(boxc);
    var arrow = document.getElementById(arrowc);
    var bool;
    if(num == 1)bool = islist1;if(num == 2)bool = islist2;
    if(num == 3)bool = islist3;if(num == 4)bool = islist4;
    if(num == 5)bool = islist5;if(num == 6)bool = islist6;
    if(num == 7)bool = islist7;if(num == 8)bool = islist8;
    if(num == 9)bool = islist9;if(num == 10)bool = islist10;
    if(num == 11)bool = islist11;if(num == 12)bool = islist12;
    if(num == 13)bool = islist13;if(num == 14)bool = islist14;
    if(num == 15)bool = islist15;if(num == 16)bool = islist16;
    if(num == 17)bool = islist17;
    if(bool){
        arrow.classList.remove('arrow_run');
        if(num == 1){islist1 = false;list.classList.remove('list_foces');box.classList.add('close_box4');box.classList.remove('open_box4');}
        if(num == 2){islist2 = false;list.classList.remove('list_foces');box.classList.add('close_box4');box.classList.remove('open_box4');}
        if(num == 3){islist3 = false;list.classList.remove('list_foces');box.classList.add('close_box3');box.classList.remove('open_box3');}
        if(num == 4){islist4 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 5){islist5 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 6){islist6 = false;list.classList.remove('list_foces');box.classList.add('close_box2');box.classList.remove('open_box2');}
        if(num == 7){islist7 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 8){islist8 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 9){islist9 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 10){islist10 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 11){islist11 = false;list.classList.remove('list_foces');box.classList.add('close_box4');box.classList.remove('open_box4');}
        if(num == 12){islist12 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 13){islist13 = false;list.classList.remove('list_foces');box.classList.add('close_box2');box.classList.remove('open_box2');}
        if(num == 14){islist14 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 15){islist15 = false;list.classList.remove('list_foces');box.classList.add('close_box2');box.classList.remove('open_box2');}
        if(num == 16){islist16 = false;list.classList.remove('list_foces');box.classList.add('close_box3');box.classList.remove('open_box3');}
        if(num == 17){islist17 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
    }else{
        arrow.classList.add('arrow_run');
        if(num == 1){islist1 = true;list.classList.add('list_foces');box.classList.add('open_box4');box.classList.remove('close_box4');}
        if(num == 2){islist2 = true;list.classList.add('list_foces');box.classList.add('open_box4');box.classList.remove('close_box4');}
        if(num == 3){islist3 = true;list.classList.add('list_foces');box.classList.add('open_box3');box.classList.remove('close_box3');}
        if(num == 4){islist4 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 5){islist5 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 6){islist6 = true;list.classList.add('list_foces');box.classList.add('open_box2');box.classList.remove('close_box2');}
        if(num == 7){islist7 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 8){islist8 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 9){islist9 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 10){islist10 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 11){islist11 = true;list.classList.add('list_foces');box.classList.add('open_box4');box.classList.remove('close_box4');}
        if(num == 12){islist12 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 13){islist13 = true;list.classList.add('list_foces');box.classList.add('open_box2');box.classList.remove('close_box2');}
        if(num == 14){islist14 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 15){islist15 = true;list.classList.add('list_foces');box.classList.add('open_box2');box.classList.remove('close_box2');}
        if(num == 16){islist16 = true;list.classList.add('list_foces');box.classList.add('open_box3');box.classList.remove('close_box3');}
        if(num == 17){islist17 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
    }
}
