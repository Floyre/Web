//새로고침 시 배경화면 랜덤으로 변경
var totalCount = 6; //배경화면 갯수, 파일 이름은 1~totalCount.jpg로 설정할 것
function ChangeIt() {
    var num = Math.ceil( Math.random() * totalCount );
    document.body.background = 'bg/'+num+'.jpg';
    document.body.style.backgroundRepeat = "repeat";// Background repeat
}

window.onload = function move() {
    ChangeIt();
}

function submit(){
    var end_Date = 0;
    var enlist_Date = 0;
    var discharge_Date = 0;
    var now =0; 
    console.log("Run")
    // 여기에서 변경된 값으로 코드를 실행합니다.
    start_Date = document.getElementById("start_date").value; //html input type 'date' value 할당
    end_Date = document.getElementById("end_date").value;
    enlist_Date = new Date(start_Date); // Date 포멧 | 입대일
    discharge_Date = new Date(end_Date); // Date 포멧 | 전역일
    now = new Date(); // Date 포멧 | 현재 날짜

    // 해야할것!!!!! - 각종 핵심 변수 / start_Date(입대일), end_Date(전역일), enlist_Date(입대일 밀리초), discharge_Date(전역일 밀리초)
    //now(현재 날짜+시간 밀리초), timesBSAE(다음달 1일 - 이번달1일), timesBSAT( 지금 - 이번달 1일), percentage(timesBSAT / timesBSAE * 100)
    //remaining 시리즈 등등 가족 변수들 최상단으로 한번에 통합시켜서 전역일 리프래시 됬을때 0으로 초기화 후 값 입력되게 수정하기
    // 해야할것2!!!!! - 전역일 INPUT이 월만 바뀌어도 입력되는데 월 말고 '일'이 입력되었을때 submit되게 수정하기

    function Next_updatePercentage(){
        const now = new Date(); // 현재 날짜와 시간을 포함하는 Date 객체 생성
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1); // 현재 달의 다음 달 1일을 포함하는 Date 객체 생성
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1); // 이번 달 1일을 포함하는 Date 객체 생성
        var timesBSAE = (nextMonth - thisMonth);
        var timesBSAT = (now  - thisMonth);
        var percentage = (timesBSAT / timesBSAE * 100);
        const percentage_fixed = percentage.toFixed(7);
        document.getElementById('rank_up_percentage').innerText = percentage_fixed;
        const remaining = (nextMonth - now) / 1000; //남은 복무일
        const remainingDate = Math.floor(remaining / 3600 / 24);
        const remainingHours = Math.floor(remaining / 3600) % 24;
        const remainingMinutes = Math.floor(remaining / 60) % 60;
        const remainingSeconds = Math.floor(remaining) % 60;
        const dDayCounter = `${remainingDate}일 ${remainingHours}시간 ${remainingMinutes}분 ${remainingSeconds}초 `;
        document.getElementById('next_rank_tick').innerText =dDayCounter;
    }
    setInterval(Next_updatePercentage, 100); // 0.1초마다 업데이트

    /*버그 해결 - HTML input type date에서는 날짜 정보만 입력할 수 있으며, 시간 정보를 따로 입력할 수 없습니다. 
    따라서, 입력한 날짜의 시간은 기본값으로 09:00:00으로 설정됩니다(대한민국은 UTC+9이기 때문에).
    하지만, JavaScript의 Date 객체를 사용하여 시간 정보를 추가할 수 있습니다.
    예를 들어, 다음과 같이 setHours 메소드를 사용하여 시간 정보를 00:00:00으로 설정할 수 있습니다.*/

    enlist_Date.setHours(0,0,0,0);
    discharge_Date.setHours(0,0,0,0);

    //남은 전역일 퍼센트 업데이트 함수 - [전역까지...]
    function End_updatePercentage() {
        const today = new Date();
        var timesBetweenStartAndEnd = (discharge_Date - enlist_Date);
        var timesBetweenStartAndToday = (today - enlist_Date);
        var percentage = (timesBetweenStartAndToday / timesBetweenStartAndEnd * 100);
        const percentage_fixed = percentage.toFixed(7);
        document.getElementById('end_percentage').innerText = percentage_fixed;
    }
    setInterval(End_updatePercentage, 100); // 0.1초마다 업데이트

    const total_service = (discharge_Date - enlist_Date) / 1000; //전체 복무일
    const done_service = (now - enlist_Date) / 1000; //현재 복무일
    const done_service_Date = Math.floor((done_service / 3600 / 24));
    const total_service_Date = Math.floor((total_service / 3600 / 24));

    function update() {
        const now = new Date(); // Date 포멧 | 현재 날짜
        const remaining = (discharge_Date - now) / 1000; //남은 복무일
        const remainingDate = Math.floor(remaining / 3600 / 24);
        const remainingHours = Math.floor(remaining / 3600) % 24;
        const remainingMinutes = Math.floor(remaining / 60) % 60;
        const remainingSeconds = Math.floor(remaining) % 60;
        const remaining_work= Math.ceil(remainingDate / 7) *5; //남은 평일 (공휴일 계산 없이 주 5일만)
        document.getElementById('total_date').innerText = total_service_Date+1;
        document.getElementById('done_date').innerText = done_service_Date+1;
        document.getElementById('remain_date').innerText = remainingDate+1;
        document.getElementById('remain_work_date').innerText = remaining_work;
        const dDayCounter = `${remainingDate}일 ${remainingHours}시간 ${remainingMinutes}분 ${remainingSeconds}초 `;
        document.getElementById('end_tick').innerText =dDayCounter;

        const diffInMs = now - enlist_Date // 두 날짜의 차이(ms)
        let diffInMonth = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30)); // 차이를 월 단위로 변환

        //일병
        const Private_first_class = new Date(enlist_Date.getFullYear(), enlist_Date.getMonth() + 3, 1); // enlist_Date의 3개월 후 첫 번째 날짜
        //상병
        const Corporal = new Date(enlist_Date.getFullYear(), enlist_Date.getMonth() + 9, 1); // enlist_Date의 9개월 후 첫 번째 날짜
        //병장
        const Sergeant = new Date(enlist_Date.getFullYear(), enlist_Date.getMonth() + 15, 1); // enlist_Date의 15개월 후 첫 번째 날짜
        if(now < Private_first_class){ //현재 계급 - 이등병
            document.getElementById('now_rank').innerText = "이등병";
            document.getElementById('next_rank').innerText = "일병";
        }
        else if(now > Private_first_class && now < Corporal){ //현재 계급 - 일병
            diffInMonth = diffInMonth - 2; //호봉 게산기 - 이등병은 2개월이므로 입대 후 3개월이 지났다면 일병 진급(이등병 2개월 빼기)+ 일병으로써의 '1'개월 = 1호봉
            document.getElementById('now_rank').innerText = "일병";
            document.getElementById('next_rank').innerText = "상병";
            document.getElementById('salary').innerText = diffInMonth;
        }
        else if(now > Corporal && now < Sergeant){ //현재 계급 - 상병
            diffInMonth = diffInMonth - 8;
            document.getElementById('now_rank').innerText = "상병";
            document.getElementById('next_rank').innerText = "병장";
            document.getElementById('salary').innerText = diffInMonth;
        }
        else if(now > Sergeant && now < discharge_Date){ //현재 계급 - 병장
            diffInMonth = diffInMonth - 14;
            document.getElementById('now_rank').innerText = "병장";
            document.getElementById('next_rank').innerText = "민간인";
            document.getElementById('salary').innerText = diffInMonth;
        }
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + (7-diffInMonth), 1); // 현재 달의 다음 달 1일을 포함하는 Date 객체 생성
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1); // 이번 달 1일을 포함하는 Date 객체 생성
        var timesBSAEe = (nextMonth - thisMonth);
        var timesBSATe = (now  - thisMonth);
        var epercentage = (timesBSATe / timesBSAEe * 100);
        const epercentage_fixed = epercentage.toFixed(7);
        document.getElementById('next_rank_percentage').innerText = epercentage_fixed;
        const aremaining = (nextMonth - now) / 1000; //남은 복무일
        const aremainingDate = Math.floor(aremaining / 3600 / 24);
        const aremainingHours = Math.floor(aremaining / 3600) % 24;
        const aremainingMinutes = Math.floor(aremaining / 60) % 60;
        const aremainingSeconds = Math.floor(aremaining) % 60;
        const adDayCounter = `${aremainingDate}일 ${aremainingHours}시간 ${aremainingMinutes}분 ${aremainingSeconds}초 `;
        document.getElementById('next_salary_tick').innerText =adDayCounter;

    }
    setInterval(update,100);
}



