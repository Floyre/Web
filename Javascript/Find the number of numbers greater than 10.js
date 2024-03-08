function countBiggerThanTen(numbers){
    let count = 0
    console.log("숫자 개수 = " , numbers.length);
    for(let i=0;i<numbers.length;i++){
        console.log('포문 돌아가는 i 수 = ', i)
        if(numbers[i]>10){
            console.log('count 배열의',i,'번째에서 10보다 큰 수 발견 해당 숫자는',numbers[i]);
            count++;
      }
    }
    return count;
}
const count = countBiggerThanTen([1,2,3,5,10,20,30,40,50,60]);
console.log('10보다 큰 숫자의 개수는',count);