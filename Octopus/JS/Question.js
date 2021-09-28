var islist1 = false;var islist2 = false;
var islist3 = false;var islist4 = false;
var islist5 = false;var islist6 = false;
var islist7 = false;var islist8 = false;
var islist9 = false;var islist10 = false;
var islist11 = false;var islist12 = false;
var islist13 = false;
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
    if(num == 13)bool = islist13;
    if(bool){
        arrow.classList.remove('arrow_run');
        if(num == 1){islist1 = false;list.classList.remove('list_foces');box.classList.add('close_box3');box.classList.remove('open_box3');}
        if(num == 2){islist2 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 3){islist3 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 4){islist4 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 5){islist5 = false;list.classList.remove('list_foces');box.classList.add('close_box2');box.classList.remove('open_box2');}
        if(num == 6){islist6 = false;list.classList.remove('list_foces');box.classList.add('close_box2');box.classList.remove('open_box2');}
        if(num == 7){islist7 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 8){islist8 = false;list.classList.remove('list_foces');box.classList.add('close_box4');box.classList.remove('open_box4');}
        if(num == 9){islist9 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 10){islist10 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
        if(num == 11){islist11 = false;list.classList.remove('list_foces');box.classList.add('close_box2');box.classList.remove('open_box2');}
        if(num == 12){islist12 = false;list.classList.remove('list_foces');box.classList.add('close_box3');box.classList.remove('open_box3');}
        if(num == 13){islist13 = false;list.classList.remove('list_foces');box.classList.add('close_box');box.classList.remove('open_box');}
    }else{
        arrow.classList.add('arrow_run');
        if(num == 1){islist1 = true;list.classList.add('list_foces');box.classList.add('open_box3');box.classList.remove('close_box3');}
        if(num == 2){islist2 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 3){islist3 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 4){islist4 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 5){islist5 = true;list.classList.add('list_foces');box.classList.add('open_box2');box.classList.remove('close_box2');}
        if(num == 6){islist6 = true;list.classList.add('list_foces');box.classList.add('open_box2');box.classList.remove('close_box2');}
        if(num == 7){islist7 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 8){islist8 = true;list.classList.add('list_foces');box.classList.add('open_box4');box.classList.remove('close_box4');}
        if(num == 9){islist9 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 10){islist10 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
        if(num == 11){islist11 = true;list.classList.add('list_foces');box.classList.add('open_box2');box.classList.remove('close_box2');}
        if(num == 12){islist12 = true;list.classList.add('list_foces');box.classList.add('open_box3');box.classList.remove('close_box3');}
        if(num == 13){islist13 = true;list.classList.add('list_foces');box.classList.add('open_box');box.classList.remove('close_box');}
    }
}


//value = 1 交易指南 : value = 2 捐款指南
var page_value = 1;
var data_value = 0;   //數值陣列的參數
var mes_data = new Array();
for(var i = 0;i < 6;i++){
    mes_data[i] = new Array();
}


mes_data[0][0] = "Image/Q1_img1.png";
mes_data[0][1] = "Image/Q1_img2.png";
mes_data[0][2] = "Image/Q1_img3.png";
mes_data[0][3] = "Image/Q1_img4.png";
mes_data[0][4] = "歡迎來到Octopus的交易指南!";
mes_data[0][5] = "以上的四個步驟就是我們的交易模式";
mes_data[0][6] = "我們希望透過這個指南可以讓您更了解Octopus的交易方式";
mes_data[0][7] = "點選右邊的下一步";

mes_data[1][0] = "";
mes_data[1][1] = "Image/Q1_img1.png";
mes_data[1][2] = "";
mes_data[1][3] = "";
mes_data[1][4] = "第一步是下單!";
mes_data[1][5] = "在所有物品頁面中都會有下單的按鈕";
mes_data[1][6] = "點選後，會需要填寫商品的Google表單。";
mes_data[1][7] = "送出表單即完成了第一步驟的交易了。";

mes_data[2][0] = "";
mes_data[2][1] = "Image/Q1_img2.png";
mes_data[2][2] = "";
mes_data[2][3] = "";
mes_data[2][4] = "送出訂單後，需要經過兩到三天的工作天";
mes_data[2][5] = "我們與捐出者確認物品後，就會透過您填寫的聯絡方式與您聯繫";
mes_data[2][6] = "選擇LINE聯繫的買家可以先加入我們的官方LINE帳號";
mes_data[2][7] = "而選擇Email的買家要記得留意我們的回信喔";

mes_data[3][0] = "";
mes_data[3][1] = "Image/Q1_img3.png";
mes_data[3][2] = "";
mes_data[3][3] = "";
mes_data[3][4] = "「訂單回覆」的內容包含";
mes_data[3][5] = "商品名稱、數量、金額等資訊";
mes_data[3][6] = "如訂單資訊有誤，可直接修正錯誤內容";
mes_data[3][7] = "確認訂單資訊無誤後，就可以出貨訂單了";

mes_data[4][0] = "";
mes_data[4][1] = "Image/Q1_img4.png";
mes_data[4][2] = "";
mes_data[4][3] = "";
mes_data[4][4] = "目前面交範圍僅限制在「桃園市桃園區」";
mes_data[4][5] = "超商取貨指定「7-11統一超商」";
mes_data[4][6] = "並須自費55元的運費含包材費";
mes_data[4][7] = "(取貨的超商門市千萬不要搞錯囉)";

mes_data[5][0] = "";
mes_data[5][1] = "";
mes_data[5][2] = "";
mes_data[5][3] = "";
mes_data[5][4] = "感謝您耐心地看完我們的交易指南!";
mes_data[5][5] = "希望這個指南可以確實的幫助到您在這個網站上做的任何交易";
mes_data[5][6] = "在底下還有針對不同狀況做出的交易說明，可以回答大家的疑問";
mes_data[5][7] = "要是還有什麼其他問題，都歡迎加入我們的官方LINE向我們諮詢喔。";




function show_black(num){
    var screen = document.getElementById('black_screen');
    var Message = document.getElementById('Mes_box');
    var Mes_title = document.getElementById('Mes_title');
    var Last_page = document.getElementById('Last_page');
    var Next_page = document.getElementById('Next_page');
    var page = document.getElementById('page');
    var Mes_img1 = document.getElementById('Mes_img1');
    var Mes_img2 = document.getElementById('Mes_img2');
    var Mes_img3 = document.getElementById('Mes_img3');
    var Mes_img4 = document.getElementById('Mes_img4');
    var Mes_span1 = document.getElementById('Mes_span1');
    var Mes_span2 = document.getElementById('Mes_span2');
    var Mes_span3 = document.getElementById('Mes_span3');
    var Mes_span4 = document.getElementById('Mes_span4');
    screen.classList.add('showblack');
    Message.classList.add('showMessage');
    Next_page.classList.remove('hidden_next_page');
    Next_page.classList.remove('last_page_top');
    Last_page.classList.remove('show_last_page');

    if(num == 1){
        data_value = 0;
        Mes_title.innerText = "交易指南";
    }
    if(data_value == 0){
        Mes_img2.classList.remove('phone_img');
        Mes_img3.classList.remove('phone_img');
    }else{
        Mes_img2.classList.add('phone_img');
        Mes_img3.classList.add('phone_img');
    }

    page.innerText = "(6/1)";
    Mes_img1.src = mes_data[data_value][0];
    Mes_img2.src = mes_data[data_value][1];
    Mes_img3.src = mes_data[data_value][2];
    Mes_img4.src = mes_data[data_value][3];
    Mes_span1.innerText = mes_data[data_value][4];
    Mes_span2.innerText = mes_data[data_value][5];
    Mes_span3.innerText = mes_data[data_value][6];
    Mes_span4.innerText = mes_data[data_value][7];
}

function hidden_black(){
    var screen = document.getElementById('black_screen');
    var Message = document.getElementById('Mes_box');
    var Last_page = document.getElementById('Last_page');
    screen.classList.remove('showblack');
    Message.classList.remove('showMessage');
    Last_page.classList.remove('hidden_last_page');
    page_value = 1;
    data_value = 0;
}



function Next_page(){
    var page = document.getElementById('page');
    var Last_page = document.getElementById('Last_page');
    var Next_page = document.getElementById('Next_page');
    var Mes_img1 = document.getElementById('Mes_img1');
    var Mes_img2 = document.getElementById('Mes_img2');
    var Mes_img3 = document.getElementById('Mes_img3');
    var Mes_img4 = document.getElementById('Mes_img4');
    var Mes_span1 = document.getElementById('Mes_span1');
    var Mes_span2 = document.getElementById('Mes_span2');
    var Mes_span3 = document.getElementById('Mes_span3');
    var Mes_span4 = document.getElementById('Mes_span4');
    
    
    if(page_value < 6){
        page_value++;
        data_value++;
        page.innerText = "(6/"+ page_value +")"
    }
    if(page_value > 1){
        Last_page.classList.add('show_last_page');
    }else{
        Last_page.classList.remove('show_last_page');
    }
    if(page_value == 6){
        Next_page.classList.add('hidden_next_page');
        Last_page.classList.add('last_page_top');
        Next_page.classList.add('last_page_top');
    }else{
        Next_page.classList.remove('hidden_next_page');
        Last_page.classList.remove('last_page_top');
    }
    if(data_value == 0){
        Mes_img2.classList.remove('phone_img');
        Mes_img3.classList.remove('phone_img');
    }else{
        Mes_img2.classList.add('phone_img');
        Mes_img3.classList.add('phone_img');
    }
    




    Mes_img1.src = mes_data[data_value][0];
    Mes_img2.src = mes_data[data_value][1];
    Mes_img3.src = mes_data[data_value][2];
    Mes_img4.src = mes_data[data_value][3];
    Mes_span1.innerText = mes_data[data_value][4];
    Mes_span2.innerText = mes_data[data_value][5];
    Mes_span3.innerText = mes_data[data_value][6];
    Mes_span4.innerText = mes_data[data_value][7];
}


function Last_page(){
    var page = document.getElementById('page');
    var Last_page = document.getElementById('Last_page');
    var Next_page = document.getElementById('Next_page');
    var Mes_img1 = document.getElementById('Mes_img1');
    var Mes_img2 = document.getElementById('Mes_img2');
    var Mes_img3 = document.getElementById('Mes_img3');
    var Mes_img4 = document.getElementById('Mes_img4');
    var Mes_span1 = document.getElementById('Mes_span1');
    var Mes_span2 = document.getElementById('Mes_span2');
    var Mes_span3 = document.getElementById('Mes_span3');
    var Mes_span4 = document.getElementById('Mes_span4');
    Next_page.classList.remove('hidden_next_page');
    Last_page.classList.remove('last_page_top');
    Next_page.classList.remove('last_page_top');

    if(page_value > 1){
        page_value--;
        data_value--;
        page.innerText = "(6/"+ page_value +")"
    }
    if(page_value == 1){
        Last_page.classList.remove('show_last_page');
    }else{
        Last_page.classList.add('show_last_page');
    }
    if(data_value == 0){
        Mes_img2.classList.remove('phone_img');
        Mes_img3.classList.remove('phone_img');
    }else{
        Mes_img2.classList.add('phone_img');
        Mes_img3.classList.add('phone_img');
    }

    
    Mes_img1.src = mes_data[data_value][0];
    Mes_img2.src = mes_data[data_value][1];
    Mes_img3.src = mes_data[data_value][2];
    Mes_img4.src = mes_data[data_value][3];
    Mes_span1.innerText = mes_data[data_value][4];
    Mes_span2.innerText = mes_data[data_value][5];
    Mes_span3.innerText = mes_data[data_value][6];
    Mes_span4.innerText = mes_data[data_value][7];
    
}

