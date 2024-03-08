colosseum = [
    { title: "천하제일 얼굴 인식대회", from: "2022.04.01", to: "2022.05.01", dataset: "celebA" },
    { title: "도로위 인식의 최강자 선발 대회", from: "2022.06.01", to: "2022.07.01", dataset: "kitti" },
    { title: "Did you understand what I said?", from: "2022.08.01", to: "2022.09.01", dataset: "wmt19" }
]

colosseumOriginal = colosseum;
colosseumFiltered = colosseum.filter(function (element) {
    return new Date(element.to) > new Date('2022.06.24')
})

console.log(colosseumOriginal, colosseumFiltered)

var title = document.querySelectorAll(".home-article-title");
for (var i = 0; i < 3; i++) {
    var item = title.item(i)
    item.innerHTML = colosseum[i].title;
}

var dataset = document.querySelectorAll(".home-article-related");
for (var i = 0; i < 3; i++) {
    var item = dataset.item(i)
    item.innerHTML = colosseum[i].dataset;
}

var date_start = document.querySelectorAll(".home-article-date-start");
for (var i = 0; i < 3; i++) {
    var item = date_start.item(i)
    item.innerHTML = colosseum[i].from;
}

var date_end = document.querySelectorAll(".home-article-date-end");
for (var i = 0; i < 3; i++) {
    var item = date_end.item(i)
    item.innerHTML = colosseum[i].to;
}

var a_title = document.querySelectorAll(".home-article-a-title");
for (var i = 0; i < 3; i++) {
    var item = a_title.item(i)
    item.innerHTML = colosseumFiltered[i] && colosseumFiltered[i].title || '    ';
}

var a_dataset = document.querySelectorAll(".home-article-a-related");
for (var i = 0; i < 3; i++) {
    var item = a_dataset.item(i)
    item.innerHTML = colosseumFiltered[i] && colosseumFiltered[i].dataset || '    ';
}

var a_date_start = document.querySelectorAll(".home-article-a-date-start");
for (var i = 0; i < 3; i++) {   
    var item = a_date_start.item(i)
    item.innerHTML = colosseumFiltered[i] && colosseumFiltered[i].from || '    ';
}

var a_date_end = document.querySelectorAll(".home-article-a-date-end");
for (var i = 0; i < 3; i++) {
    var item = a_date_end.item(i)
    item.innerHTML = colosseumFiltered[i] && colosseumFiltered[i].to || '    ';
}