    /* ch02/blocking.js */
    console.log('시작');
    (function() {
        // 오래 걸리는 작업
        for (let i = 0; i < 2222222222; i++);
        console.log('작업 끝');
    })();
    console.log('다음 작업');
