const start_Date = document.querySelector('#start_date');
const end_Date = document.querySelector('#end_date');
const enlist_Date = new Date(2022, 05, 27, 0, 0, 0, 0); // Date 포멧 | 입대일
const discharge_Date = new Date(2023, 11, 26, 0, 0, 0, 0); // Date 포멧 | 전역일
const now_Date = new Date(); // Date 포멧 | 현재 날짜(업데이트 X)

//bg function
var totalCount = 6;
function ChangeIt() {
    var num = Math.ceil( Math.random() * totalCount );
    document.body.background = 'bg/'+num+'.jpg';
    document.body.style.backgroundRepeat = "repeat";// Background repeat
}

function updatePercentage() {
    const today = new Date();
    var timesBetweenStartAndEnd = (discharge_Date - enlist_Date);
    var timesBetweenStartAndToday = (today - enlist_Date);
    var percentage = (timesBetweenStartAndToday / timesBetweenStartAndEnd * 100);
    const percentage_fixed = percentage.toFixed(8);
    document.getElementById('end_percentage').innerText =percentage_fixed;
    // const diffTime = targetDate - today;
    // const diffDays = diffTime / (1000 * 60 * 60 * 24);
    // const totalDays = (targetDate - new Date("2022-06-27")) / (1000 * 60 * 60 * 24);
    // const percentageLeft = (100-(diffDays / totalDays) * 100).toFixed(6);
    
}

setInterval(updatePercentage, 50); // 0.1초마다 업데이트

var i = 0;
var j = 0;
var c = 0;

const total_service = (discharge_Date - enlist_Date) / 1000; //전체 복무일
const done_service = (now_Date - enlist_Date) / 1000; //현재 복무일
const remaining = (discharge_Date - now_Date) / 1000; //남은 복무일

const done_service_Date = Math.floor((done_service / 3600 / 24));
const total_service_Date = Math.floor((total_service / 3600 / 24));

const remainingDate = Math.floor(remaining / 3600 / 24);
const remainingHours = Math.floor(remaining / 3600) % 24;
const remainingMinutes = Math.floor(remaining / 60) % 60;
const remainingSeconds = Math.floor(remaining) % 60;

const remaining_work= Math.ceil(remainingDate / 7) *5; //남은 평일 버그(정상동작 X)
const dDayCounter = `남은 시간 : ${remainingDate}일 ${remainingHours}시 ${remainingMinutes}분 ${remainingSeconds}초`;
function update() {
    const dDayCounter = `남은 시간 : ${remainingDate}일 ${remainingHours}시 ${remainingMinutes}분 ${remainingSeconds}초`;
    console.log(dDayCounter);
}
setInterval(update,50);

document.getElementById('total_date').innerText = total_service_Date+1;
document.getElementById('done_date').innerText = done_service_Date+1;
document.getElementById('remain_date').innerText = remainingDate+1;
document.getElementById('remain_work_date').innerText = remaining_work;

window.onload = function move() {
    ChangeIt();
    if (i == 0) { //end graph
        i = 1;
        var elem_1 = document.getElementById("end_Bar");
        var width_1 = 1;
        var id_1 = setInterval(frame_1, 10);
        function frame_1() {
            if (width_1 >= 100) {
                clearInterval(id_1);
                i = 0;
            } else {
                width_1++;
                elem_1.style.width = width_1 + "%";
            }
        }
    }
    if (j== 0) {
        j = 1;
        var elem_2 = document.getElementById("next_rank_Bar");
        var width_2 = 1;
        var id_2 = setInterval(frame_2, 10);
        function frame_2() {
            if (width_2 >= 50) {
                clearInterval(id_2);
                j = 0;
            } else {
                width_2++;
                elem_2.style.width = width_2 + "%";
            }
        }
    }
    if (c == 0) {
        c = 1;
        var elem_3 = document.getElementById("rank_up_Bar");
        var width_3 = 1;
        var id_3 = setInterval(frame_3, 10);
        function frame_3() {
            if (width_3 >= 85) {
                clearInterval(id_3);
                c = 0;
            } else {
                width_3++;
                elem_3.style.width = width_3 + "%";
            }
        }
    }
}