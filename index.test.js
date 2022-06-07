
const { Stack, Queue } = require("./index.js");

describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
  it('#enqueue should add new item to queue', () => {
    const queue = new Queue([2]);
    queue.enqueue(1);

    expect(queue.hasNext()).toEqual(true);

    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  } )
});
