const MiniStack = function() {
    this.stack1 = [];
    this.stack2 = [];
}
MiniStack.prototype.push = function(x) {
    this.stack1.push(x);
    if (this.stack2.length === 0 || x <= this.stack2[this.stack2.length - 1]) {
        this.stack2.push(x); // 单调栈
    }
}
MiniStack.prototype.pop = function() {
    if(this.stack1.pop() == this.stack2[this.stack2.length - 1]) {
        this.stack2.pop();
    }
}
MiniStack.prototype.top = function() {
    return this.stack1[this.stack1.length - 1];
}
MiniStack.prototype.getMin = function() {
    return this.stack2[this.stack2.length - 1];
}