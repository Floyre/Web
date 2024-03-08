var board = [
    { title: "안녕하세요", passage: "Datawiki에 오신 것을 환영합니다.", date: "2022.05.01", like: 10 },
    { title: "관리자소개", passage: "Datawiki의 관리자를 소개 합니다.", date: "2022.05.05", like: 5 },
    { title: "최신 뉴스", passage: "Datawiki는 상명대 천안캠퍼스에서 주관하는 데이터 공유 사이트 입니다.", date: "2022.05.06", like: 22 },
    { title: "공지사항", passage: "Datawiki가 새롭게 단장됩니다. 더욱 개선된 사이트를 기대해 주세요.", date: "2022.05.08", like: 100 },
    { title: "추가 공지 사항", passage: "Datawiki를 새롭게 개선하기 위한 메니저를 공모합니다. ", date: "2022.05.10", like: 1 },
    { title: "2022년 데이터위키 공모전", passage: "2022년 데이터 위키는 이미지 인식 주제로 진행합니다.", date: "2022.05.12", like: 44 },
    { title: "공모전 종료 안내", passage: "2022년 데이터 위키 공모전이 성공리에 마감 되었습니다. ", date: "2022.05.14", like: 50 },
    { title: "2023년 데이터 위키 공모전", passage: "2023년 데이터 위키 공모전을 소개 합니다.", date: "2022.05.16", like: 49 },
    { title: "학기 종료 안내", passage: "22년 1학기 종료까지 이제 6주 남았습니다. ", date: "2022.05.18", like: 17 },
    { title: "튜토리얼 공지", passage: "tensorflow와 keras의 라이브러리를 이용하여 같이 공부해 봅시다.", date: "2022.05.19", like: 84 },
    { title: "신규 데이터 요청", passage: "새로운 데이터가 필요하신 분은 언제든 요청 바랍니다.", date: "2022.05.21", like: 3 }
]

var tableSet = document.querySelectorAll("#forum-board");
var forumMostLike = document.querySelectorAll("#forum-most-like");
window.onload =function(){
    if(tableSet[0]){
        for(i = board.length;i>0;i--){
            var j = board.length - i;
            tableSet[j].innerHTML = "<td>"+i+"</td><td><a href='#'>"+board[i-1].title+"</a></td><td>"+board[i-1].passage+"</td><td>"+board[i-1].date+"</td><td id='forum-like"+i+"'>"+board[i-1].like+"</td><td><input type='button' value='추천' onclick='likeUp("+i+");'></td>";
        }
    }
    
    if(forumMostLike[0]){
        var most3Likes = [];
        var i = 0, j = 0;
        while(most3Likes.length != 3){
            
            var tmp = 0;
            for(i = 0;i<board.length;i++){
                if(tmp < board[i].like){
                    if(i == 0){
                        tmp = board[i].like;
                        most3Likes[j] = board[i];
                    }
                    else if (j > 0 && most3Likes[j-1].title > board[i].title){
                        tmp = board[i].like;
                        most3Likes[j] = board[i];
                    }
                }
            }
            j++;
        }
        for(k=0;k<forumMostLike.length;k++){
            forumMostLike[k].innerHTML = "<td>"+most3Likes[k].title+"</td><td>"+most3Likes[k].date+"</td>";
        }
    }
}

function likeUp(num){
    var likeNum = document.getElementById("forum-like"+num);
    if(parseInt(likeNum.textContent) != parseInt(board[num-1].like) + 1){
        likeNum.innerText = parseInt(likeNum.textContent) + 1 +"";
    }
    else{
        alert("추천은 게시글 당 하나만 할 수 있습니다.");
    }
}

document.querySelectorAll('.home-article-top-title').forEach((e, i) => e.innerHTML = board.sort((a, b) => (b.like) - (a.like))[i].title)
document.querySelectorAll('.home-article-top-date').forEach((e, i) => e.innerHTML = board.sort((a, b) => (b.like) - (a.like))[i].date)