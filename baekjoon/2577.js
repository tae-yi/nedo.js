// 숫자가 3개 고정이 아니라 1개 이상부터 몇개든 가능하도록. 코드를 더 범용적으로 확장.


const fs = require('fs');

let array = fs.readFileSync('/dev/stdin').toString().split("\n");
// 백준 사이트에서만 돌아가는 코드. vscode에서도 적용되도록 설정하시다가 주의할 점으로 다른 코드들에도 적용되므로 이렇게 하라고 하셨는데 이해 못함.
array = array.filter((s) => s.length).map((s) => parseInt(s));
let mul = array.reduce((prev, cur) => prev * cur, 1);
// 곱해서 0이 나오면 안되므로 초기값 1으로 설정.


let counting = new Array(10);   // 길이가 10인 배열을 만들고
counting.fill(0);   // 전부 0으로 채운다.
while(mul) {
    counting[mul % 10]++;   // 1의 자리수 카운트
    mul /= 10;
    mul = Math.floor(mul);
}
counting.forEach((count) => console.log(count));