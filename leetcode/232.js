/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let temp;
    while ((temp = this.s1.pop())) {
        this.s2.push(temp);
    }
    const result = this.s2.pop();
    while ((temp = this.s2.pop())) {
        this.s1.push(temp);
    }
    return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let temp;
    while ((temp = this.s1.pop())) {
        this.s2.push(temp);
    }
    const result = this.s2.pop();
    this.s1.push(result);
    while ((temp = this.s2.pop())) {
        this.s1.push(temp);
    }
    return result;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
