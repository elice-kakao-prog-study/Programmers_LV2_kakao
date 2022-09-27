function solution(m, n, board) {
    let answer = 0;
    let indexStack = [];
    const graph = new Array(m).fill(null).map((_) => new Array(n).fill(0));
    initGraph(graph, board);//board로 그래프 초기화
  
    const searchGraph = (x, y) => {
      const dxy = [
        [0, 1],
        [1, 0],
        [1, 1],
      ];
      const target = graph[x][y];
      if (target === 0) return;
      for (let i = 0; i < dxy.length; i++) {
        const [curX, curY] = [x + dxy[i][0], y + dxy[i][1]];
        if (curX < 0 || m <= curX || curY < 0 || n <= curY) return;
        if (graph[curX][curY] !== target) return;
      }
      indexStack.push([x, y]);
    }; // 그래프에서 탐색후 만약 2x2가 같다면 indexStack에push
  // 중복처리해야하기때문에 스택사용
  
    const handleAnswer = () => {
      const dxy = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ];
      while (indexStack.length !== 0) {
        let [x, y] = indexStack.pop();
        for (let i = 0; i < dxy.length; i++) {
          const [curX, curY] = [x + dxy[i][0], y + dxy[i][1]];
          if (graph[curX][curY] !== 0) {
            graph[curX][curY] = 0;
            answer += 1;
          }
        }
      }
    }; //답안 handle하는 함수 이미 0으로 처리되었다면 정답처리 하지않음.
  
    const colSwap = () => {
      for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
          if (graph[i][j] === 0) {
            let curIdx = i;
            while (curIdx - 1 >= 0) {
              if (graph[curIdx][j] === 0 && graph[curIdx - 1][j] !== 0) {
                [graph[curIdx - 1][j], graph[curIdx][j]] = [
                  graph[curIdx][j],
                  graph[curIdx - 1][j],
                ];
              }
              curIdx--;
            }
          }
        }
      } // 0기준 밑으로 미는 함수 0발견시 끝까지 탐색후 0이 아닌값과 바꿈.
    };
  
    while (true) {
      for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
          searchGraph(i, j);
        }
      }
      if (indexStack.length === 0) break;
      handleAnswer();
      colSwap();
    } //main로직
  
    return answer;
  }
  
  function initGraph(graph, board) {
    for (let i = 0; i < graph.length; i++) {
      const cur = board[i];
      for (let j = 0; j < graph[i].length; j++) {
        graph[i][j] = cur[j];
      }
    }
  }