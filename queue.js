// const Stack = require('./stack');

class _Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if(this.first === null) {
      this.first = node;
    }
    if(this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  if(queue.last === null) {
    return 'Empty';
  }
  return queue.last.value;
}

function isEmpty(queue) {
  if(queue.first === null) {
    return 'Empty';
  } 
}

function display(queue) {
  let string = '';
  let tempNode = queue.first;
  while (tempNode !== null) {
    string = string + tempNode.value + ' ';
    tempNode = tempNode.next;
  }
  console.log(string);
}

function main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // console.log(JSON.stringify(starTrekQ));
  peek(starTrekQ);
  // isEmpty(starTrekQ);
  // display(starTrekQ);
  starTrekQ.dequeue('Kirk');
  starTrekQ.dequeue('Spock');
  // display(starTrekQ);

  // let stackA = new Stack();
  // let stackB = new Stack();
  // let newQueue = new Queue();
  // stackA.push(3);
  // stackA.push(2);
  // stackA.push(1);
  // stackB.push(6);
  // stackB.push(5);
  // stackB.push(4);
  // newQueue.enqueue(stackA.pop());
  // newQueue.enqueue(stackA.pop());
  // newQueue.enqueue(stackA.pop());
  // newQueue.enqueue(stackB.pop());
  // newQueue.enqueue(stackB.pop());
  // newQueue.enqueue(stackB.pop());
  // display(newQueue);
}
main();

function squareDancing() {
  let women = new Queue();
  let men = new Queue();
  let spares = new Queue();
  let pair;
  women.enqueue('Jane');
  men.enqueue('Frank');
  men.enqueue('John');
  men.enqueue('Sherlock');
  women.enqueue('Madonna');
  men.enqueue('David');
  men.enqueue('Christopher');
  women.enqueue('Beyonce');
  while(women.first !== null && men.first !== null) {
    pair = women.dequeue() + ' ' + men.dequeue();
    // console.log(pair);
  }
  while(women.first !== null || men.first !== null) {
    if(women.first !== null) {
      spares.enqueue(women.dequeue());
    }
    if(men.first !== null) {
      spares.enqueue(men.dequeue());
    }
  }
  // display(spares);
}
squareDancing();

// this works to show how it goes through whole queue
function bank() {
  let bankQueue = new Queue();
  bankQueue.enqueue(1);
  bankQueue.enqueue(2);
  bankQueue.enqueue(3);
  bankQueue.enqueue(4);
  bankQueue.enqueue(5);
  bankQueue.enqueue(6);
  bankQueue.enqueue(7);
  bankQueue.enqueue(8);
  bankQueue.enqueue(9);
  bankQueue.enqueue(10);
  bankQueue.enqueue(11);
  bankQueue.enqueue(12);
  bankQueue.enqueue(13);
  bankQueue.enqueue(14);
  bankQueue.enqueue(15);
  bankQueue.enqueue(16);
  bankQueue.enqueue(17);
  bankQueue.enqueue(18);
  bankQueue.enqueue(19);
  bankQueue.enqueue(20);
  bankQueue.enqueue(21);
  // add set timeout
  // need to add new customers
  // another set timout to add new customers
  // then display at those intervals
  display(bankQueue);
  while(bankQueue.first !== null) {
    let person = bankQueue.dequeue();
    let counter = Math.floor(Math.random() * 4);
    // let newPerson = setTimeout(bankQueue.enqueue('test'), 3000);
    // console.log(newPerson);
    if(counter === 0) {
      console.log('Paperwork not correct');
      bankQueue.enqueue(person);
    }
    console.log('counter',counter);
    console.log('queue', bankQueue);
  }
}
bank();