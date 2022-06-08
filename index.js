

class Stack {
  #list = [];
  constructor(initialData) {
    if (initialData) this.#list = initialData;
  }
  push(data) {
    this.#list.push(data);
  }
  peek() {
    return this.#list[this.#list.length - 1];
  }
  pop() {
    return this.#list.pop();
  }
  get view() {
    return this.#list.toString();
  }
}

function reverseArr(array) {
  const stack = new Stack([...array]);
  reversedArray = [];
  while (stack.view) {
    reversedArray.push(stack.pop());
  }
  return reversedArray;
}

class Queue {
  #list = [];
  constructor(initialData) {
    if (initialData) this.#list = initialData;
  }
  enqueue(data) {
    this.#list.push(data);
  }
  dequeue() {
    return this.#list.shift();
  }
  hasNext() {
    return this.#list.length > 1;
  }

}

module.exports = { Stack, Queue, reverseArr };
