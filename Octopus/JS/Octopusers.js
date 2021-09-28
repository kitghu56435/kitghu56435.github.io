
function showblack(num){
    var screen = document.getElementById('black_screen');
    var Message = document.getElementById('Message_box');
    var Label = document.getElementById('Message_Label');
    var Data = document.getElementById('Message_date');
    var text = document.getElementById('Message_text');
    var img = document.getElementById('Message_img');
    screen.classList.add('showblack');
    Message.classList.add('showMessage');
    Label.innerText = post_data[num][0];
    Data.innerText = post_data[num][1];
    text.innerText = post_data[num][2];
    img.src = post_data[num][3];
}
function hiddenblack(){
    var screen = document.getElementById('black_screen');
    var Message = document.getElementById('Message_box');
    screen.classList.remove('showblack');
    Message.classList.remove('showMessage');
}

var post_data = new Array();
for(var i=0;i<2;i++){
    post_data[i] = new Array(); 
}
post_data[0][0] = "Octopus誕生日!";
post_data[0][1] = "2021/9/30"
post_data[0][2] = "Octopus正式上架開始運作囉，歡迎大家到本網站逛逛，如果有喜歡的物品，都歡迎在這裡跟我們下單喔!"
post_data[0][3] = "Image/Post/Birthday.png"

post_data[1][0] = "葳葳捐出78個物品!";
post_data[1][1] = "2021/9/30"
post_data[1][2] = "感謝葳葳，在我們的網站捐出了78個物品，有興趣的朋友都可以去看看喔。"
post_data[1][3] = "Image/Post/weiwei.jpg"