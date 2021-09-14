var BoxValue = 1; //滾動視窗的係數

function left(){
    var box1 = document.getElementById("run_box1");
    var box2 = document.getElementById("run_box2");
    var box3 = document.getElementById("run_box3");
    if(BoxValue == 3){
        box1.classList.remove('run-left200');
        box2.classList.remove('run-left200');
        box3.classList.remove('run-left200');
        BoxValue--;
    }else if(BoxValue == 2){
        box1.classList.remove('run-left100');
        box2.classList.remove('run-left100');
        box3.classList.remove('run-left100');
        BoxValue--;
    }
}
function right(){
    var box1 = document.getElementById("run_box1");
    var box2 = document.getElementById("run_box2");
    var box3 = document.getElementById("run_box3");
    if(BoxValue == 1){
        box1.classList.add('run-left100');
        box2.classList.add('run-left100');
        box3.classList.add('run-left100');
        BoxValue++;
    }else if(BoxValue == 2){
        box1.classList.add('run-left200');
        box2.classList.add('run-left200');
        box3.classList.add('run-left200');
        BoxValue++;
        }
}

