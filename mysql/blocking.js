function longRunningTask() {
    // 오래 걸리는 작업
    for (let i = 0; i < 9999999999; i++);
    console.log('작업 끝');
}
console.log('시작');
longRunningTask();
console.log('다음 작업');
