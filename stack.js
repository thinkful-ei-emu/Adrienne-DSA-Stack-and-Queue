class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  
  push(data) { //O(1) because can only push to top of stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() { //O(1) since can only pop from top of stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  return stack.top.data;
}

function isEmpty(stack) {
  if(stack.top === null) {
    return 'Stack is empty';
  }
}

// for debugging purposes
function display(stack) {
  let string = '';
  let currNode = stack.top;
  while(currNode !== null) {
    string = string + currNode.data + '  ';
    currNode = currNode.next;
  }
  console.log(string);
}

function is_palindrome(s) { //O(n) because have to go through whole string at least once
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();
  for(let i = 0; i < s.length; i++) {
    stack.push(s.charAt(i));
  }
  for(let i = 0; i < s.length; i++) {
    if(stack.pop() !== s[i]) {
      return false;
    }
    return true;
  }
}
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

// need to work on extension excercises still
function parentheses(s) {
  // just push ( to stack
  // when ) pop ( from stack
  // if ever have stack with something in it still means have extra open
  let stack = new Stack();
  for(let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    if(s[i] === '(') {
      stack.push(i);
      // console.log(stack);
    } else if(s[i] === ')') {
      stack.pop();
      // console.log(stack);
    }
  }
  if(stack.top !== null) {
    return 'You are missing a ")"';
  }
  return 'All "()" are valid pairs';
}
// parentheses('((()))');
// console.log(parentheses('([{}])')); //correct
console.log(parentheses('([)]')); //incorrect
// parentheses("",'');

function sort(){
  let stackA = new Stack();
  stackA.push(5);
  stackA.push(2);
  stackA.push(1);
  stackA.push(4);
  stackA.push(3);
  // console.log(JSON.stringify(stackA));
  let stackB = new Stack();
  // should have 1 on top 5 on bottom
  // can use one other stack (stackB)
  // if values in stackB could be arranged in opposite order could then just dump back into stackA
  // save popped value in temporary variable temp = pop() which is 5
  // if stackB is empty can just push temp variable into stackB
  // compare stackB.top and temp variable
  // use .peek function to see what is top of stackB
  // if peek is greater than temp variable and temp.top()!== null
  // then push into stack b
  // if peek is less than temp pop value out of stackb and push to stacka
  // do all of the above while stackA.top !== null
  // then do another while loop for stackB.top !== null and push all nodes to stackA
  while(stackA.top !== null) {
    let temp = stackA.pop();
    while (stackB.top !== null && temp > stackB.top.data) {
      stackA.push(stackB.pop());
    }
    stackB.push(temp);
  }
  // display(stackB);
}
sort();

function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(JSON.stringify(starTrek));
  peek(starTrek);
  // isEmpty(starTrek);
  // display(starTrek);
  starTrek.pop('Scotty');
  starTrek.pop('McCoy');
  // display(starTrek);
}
main();

module.exports = Stack;