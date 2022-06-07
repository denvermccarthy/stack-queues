

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
  view() {
    return this.#list.toString();
  }
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

const stack = new Stack([1, 2, 3]);
stack.push(1);
console.log(stack.peek());
const popped = stack.pop();
console.log("popped", popped);
console.log("stack.view()", stack.view());

const queue = new Queue([1, 2, 3]);
console.log(queue.hasNext());
queue.dequeue();
queue.dequeue();
console.log(queue.hasNext());
queue.enqueue(1);
console.log(queue.hasNext());

module.exports = { Stack, Queue };
