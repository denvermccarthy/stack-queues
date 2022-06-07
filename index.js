//push peek pop

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

const stack = new Stack([1, 2, 3]);
stack.push(1);
console.log(stack.peek());
const popped = stack.pop();
console.log("popped", popped);
console.log("stack.view()", stack.view());
class Queue {}

module.exports = { Stack, Queue };
