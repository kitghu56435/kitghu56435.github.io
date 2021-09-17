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


//value = 1 交易指南 : value = 2 捐款指南
var page_value = 1;
var data_value = 0;   //數值陣列的參數
var mes_data = new Array();
for(var i = 0;i < 12;i++){
    mes_data[i] = new Array();
}


mes_data[0][0] = "Image/Q1_img1.png";
mes_data[0][1] = "Image/Q1_img2.png";
mes_data[0][2] = "Image/Q1_img3.png";
mes_data[0][3] = "Image/Q1_img4.png";
mes_data[0][4] = "歡迎來到Octopus的交易指南!";
mes_data[0][5] = "以上將交易過程歸納為：下單、訂單回覆、捐款與捐款證明&出貨";
mes_data[0][6] = "詳細的交易過程會再後頭跟您仔細說明，希望這個指南可以讓您更了解";
mes_data[0][7] = "Octopus的交易模式。點選右邊的下一步";

mes_data[1][0] = "";
mes_data[1][1] = "Image/Q1_img1.png";
mes_data[1][2] = "";
mes_data[1][3] = "";
mes_data[1][4] = "第一步是下單!";
mes_data[1][5] = "在所有物品頁面中都會有下單的按鈕";
mes_data[1][6] = "點進去後，會需要填寫商品的Google表單。";
mes_data[1][7] = "送出表單後即完成了第一步驟的交易了。";

mes_data[2][0] = "";
mes_data[2][1] = "Image/Q1_img2.png";
mes_data[2][2] = "";
mes_data[2][3] = "";
mes_data[2][4] = "送出訂單後，需要經過兩到三天的工作天。";
mes_data[2][5] = "等我們與捐出者確認物品過後，我們就會透過您填寫的聯絡方式與您做聯繫。";
mes_data[2][6] = "訂單回覆中，會包含您的訂單內容與數量，如內容有誤也可在此步驟做取消訂單";
mes_data[2][7] = "(切記，請勿提早做捐款的動作)";

mes_data[3][0] = "";
mes_data[3][1] = "Image/Q1_img3.png";
mes_data[3][2] = "";
mes_data[3][3] = "";
mes_data[3][4] = "等您收到「訂單回覆」後，就代表我們已與捐出者聯繫上了";
mes_data[3][5] = "如果您是「面交」，捐款的部分只需要在面交場所投入捐款箱即可";
mes_data[3][6] = "如果您是「超商取貨」，我們使用統一超商的ibon做捐款，並留下收據";
mes_data[3][7] = "(超商取貨需留下收據證明，才會出貨喔)";

mes_data[4][0] = "";
mes_data[4][1] = "Image/Q1_img4.png";
mes_data[4][2] = "";
mes_data[4][3] = "";
mes_data[4][4] = "如果您是「面交」，透過聯繫平台敲定時間與地點即可";
mes_data[4][5] = "如果您是「超商取貨」，須把捐款收據保留";
mes_data[4][6] = "並拍照存證，以提供給我們。讓我們確定您已捐款";
mes_data[4][7] = "我們就會立即出貨。";

mes_data[5][0] = "";
mes_data[5][1] = "";
mes_data[5][2] = "";
mes_data[5][3] = "";
mes_data[5][4] = "感謝您耐心地看完我們的交易指南!";
mes_data[5][5] = "希望這個指南可以確實的幫助到您在這個網站上做的任何交易";
mes_data[5][6] = "在底下還有針對不同狀況做出的交易說明，可以回答大家的疑問";
mes_data[5][7] = "要是還有什麼其他問題，都歡迎加入我們的官方LINE向我們諮詢喔。";

mes_data[6][0] = "";
mes_data[6][1] = "Image/Q2_img.png";
mes_data[6][2] = "";
mes_data[6][3] = "";
mes_data[6][4] = "歡迎來到Octopus的捐款指南!";
mes_data[6][5] = "我們提倡讓交易者自行完成捐款，相對的，我們會告訴您要如何完成捐款";
mes_data[6][6] = "而您選擇的「出貨方式」會間接引響到您的「捐款方式」，在後頭都會仔細跟您說明";
mes_data[6][7] = "我想這應該難不倒你的對吧！點選右邊的下一步";

mes_data[7][0] = "";
mes_data[7][1] = "Image/Q2_img1.png";
mes_data[7][2] = "";
mes_data[7][3] = "";
mes_data[7][4] = "你是選擇「超商取貨」還是「面交取貨」呢？";
mes_data[7][5] = "這兩個取貨方式攸關到您要如何去捐款喔。";
mes_data[7][6] = "雖然捐款的金額並不會因此而改變，但捐款的方式是截然不同的喔";
mes_data[7][7] = "";

mes_data[8][0] = "";
mes_data[8][1] = "Image/Q2_img2.png";
mes_data[8][2] = "";
mes_data[8][3] = "";
mes_data[8][4] = "如果你選擇的是「面交取貨」";
mes_data[8][5] = "捐款的方式，就是自己親手把錢投入面交地點的捐款箱喔。那怎樣的地點會有捐款箱呢？";
mes_data[8][6] = "我們可能會約在例如超商(7-11、全家)等地點會設置愛心捐款箱的場所進行面交";
mes_data[8][7] = "等您把錢投入捐款箱後，我們就會把物品交到您手上囉。";

mes_data[9][0] = "";
mes_data[9][1] = "Image/Q2_img3.png";
mes_data[9][2] = "";
mes_data[9][3] = "";
mes_data[9][4] = "如果你選擇的是「超商取貨」";
mes_data[9][5] = "捐款的方式，就需要至統一超商的ibon資訊系統，做捐款的動作";
mes_data[9][6] = "並留下捐款過後的小白單收據。在之後需要您把捐款收據拍下，並傳給我們";
mes_data[9][7] = "等我們確定金額與訂單後，我們會立即出貨！";

mes_data[10][0] = "";
mes_data[10][1] = "Image/Q2_img4_1.png";
mes_data[10][2] = "Image/Q2_img4_2.png";
mes_data[10][3] = "";
mes_data[10][4] = "「面交取貨」需注意的是：";
mes_data[10][5] = "需要再透過官方LINE或是電子信箱與工作人員約至超商等場所進行交易。";
mes_data[10][6] = "「超商取貨」需注意的是：";
mes_data[10][7] = "確保寄送門市正確已外，在取貨時還需自行承擔55元的運費與包材費。";

mes_data[11][0] = "";
mes_data[11][1] = "";
mes_data[11][2] = "";
mes_data[11][3] = "";
mes_data[11][4] = "感謝您耐心地看完我們的捐款指南!";
mes_data[11][5] = "希望這個指南可以確實的幫助到您在捐款上的任何疑問";
mes_data[11][6] = "當然在捐款的過程中還有很多細節，您在下方的Q&A都可以看到";
mes_data[11][7] = "我們也歡迎您加入我們的官方LINE向我們諮詢喔。";



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
        Mes_title.innerText = "交易指南";
    }else{
        data_value = 6;
        Mes_title.innerText = "捐款指南";
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

    
    Mes_img1.src = mes_data[data_value][0];
    Mes_img2.src = mes_data[data_value][1];
    Mes_img3.src = mes_data[data_value][2];
    Mes_img4.src = mes_data[data_value][3];
    Mes_span1.innerText = mes_data[data_value][4];
    Mes_span2.innerText = mes_data[data_value][5];
    Mes_span3.innerText = mes_data[data_value][6];
    Mes_span4.innerText = mes_data[data_value][7];
    
}

