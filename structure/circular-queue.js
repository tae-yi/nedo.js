/* circular-queue.js */
const createQueue = (max) => ({
    array: new Array(max),
    length: max,
    size: 0,
    front: -1,
    rear: -1,
  });
  
  function queueAdd(queue, value) {
    if (queue.size == queue.length) {
      throw Error('The queue is full.');
    }
    queue.size += 1;
    queue.rear = (queue.rear + 1) % queue.length; // 최대치 이상으로 넘지 않게 '%'연산자를 통해 rear를 조정해줌
    queue.array[queue.rear] = value;
  }

  // 배열의 해당 값을 지웠다라고 출력해줌 (실제론 남아있는 상태)
  function queueDelete(queue) {
    if (queue.size == 0) {
      throw Error('The queue is empty.');
    }
      queue.size -= 1;
      queue.front = (queue.front + 1) % queue.length;
      return queue.array[queue.front];
  }
  let queue1 = createQueue(3);
  
  queueAdd(queue1, 4);
  queueAdd(queue1, 6);
  queueAdd(queue1, 1);
  let data = queueDelete(queue1); // 4
  console.log(data);
  queueAdd(queue1, 9);
  console.log(queueDelete(queue1)); // 6
  console.log(queueDelete(queue1)); // 1
  console.log(queueDelete(queue1)); // 9
  
  if (queue1.size > 0) { // is not empty
    console.log(queueDelete(queue1));
  } else {
    console.warn('The queue is empty');
  }
  
  let queue2 = createQueue(2);
  queueAdd(queue2, 1);
  queueAdd(queue2, 2);
  queueAdd(queue2, 8); // error