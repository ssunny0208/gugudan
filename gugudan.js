// gugudan.js

// 구구단을 출력하는 함수
function generateGugudan() {
  // 1부터 9까지의 숫자에 대한 반복문
  for (let i = 1; i <= 9; i++) {
    let gugudanRow = `${i}단:`;

    // 1부터 9까지의 숫자와 구구단 결과를 계산하여 문자열에 추가
    for (let j = 1; j <= 9; j++) {
      gugudanRow += ` ${i * j}`;
    }

    // 각 단의 구구단을 출력
    console.log(gugudanRow);
  }
}

// 구구단 생성 함수 호출
generateGugudan();
