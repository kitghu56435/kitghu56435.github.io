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


var windowWidth = window.innerWidth; //980

function Adjustment_box(who){
    var box1 = document.getElementById("run_box1");
    var box2 = document.getElementById("run_box2");
    var box3 = document.getElementById("run_box3");
    if(windowWidth < 990){
        if(who == "Cup"){
            box1.classList.add('run-left100');
            box2.classList.add('run-left100');
            box3.classList.add('run-left100');
            box1.classList.add('run-left200');
            box2.classList.add('run-left200');
            box3.classList.add('run-left200');
            BoxValue = 3;
        }
        if(who == "Device"){
            box1.classList.add('run-left100');
            box2.classList.add('run-left100');
            box3.classList.add('run-left100');
            BoxValue = 2;
        }
        if(who == "Doll"){
            box1.classList.add('run-left100');
            box2.classList.add('run-left100');
            box3.classList.add('run-left100');
            box1.classList.add('run-left200');
            box2.classList.add('run-left200');
            box3.classList.add('run-left200');
            BoxValue = 3;
        }
        if(who == "Recreation"){
            box1.classList.add('run-left100');
            box2.classList.add('run-left100');
            box3.classList.add('run-left100');
            BoxValue = 2;
        }
    }
}



