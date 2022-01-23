
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
for(var i=0;i<5;i++){
    post_data[i] = new Array(); 
}
post_data[0][0] = "Octopus誕生日!";
post_data[0][1] = "2021/12/7"
post_data[0][2] = "Octopus正式上架開始運作囉，歡迎大家到本網站逛逛，如果有喜歡的物品，都歡迎在這裡跟我們下單喔!"
post_data[0][3] = "Image/Post/Birthday.png"

post_data[1][0] = "葳葳捐出78個物品!";
post_data[1][1] = "2021/12/7"
post_data[1][2] = "感謝葳葳，在我們的網站捐出了78個物品，有興趣的朋友都可以去看看喔。"
post_data[1][3] = "Image/Post/weiwei.jpg"

post_data[2][0] = "第一個捐款交易";
post_data[2][1] = "2021/12/14"
post_data[2][2] = "完成了第一筆交易，交易了KITTY系列墜飾，共捐出了60元!"
post_data[2][3] = "Image/Post/P28_1.jpg"

post_data[3][0] = "新增了「廚具館」!";
post_data[3][1] = "2021/12/23"
post_data[3][2] = "由於收到的物品多樣化，我們新增了「廚具館」。廚具館專門展示我們Octopus交易的廚房用品與餐具等等，" +
"喜歡廚具的朋友們，歡迎多到廚具館逛逛喔!。"
post_data[3][3] = "Image/Post/kitchen_post.png"

post_data[4][0] = "葳葳的捐蹭!";
post_data[4][1] = "2021/12/23"
post_data[4][2] = "感謝葳葳，在我們的網站捐出了8個物品，有興趣的朋友都可以去看看喔。"
post_data[4][3] = "Image/Post/weiwei2.jpg"
