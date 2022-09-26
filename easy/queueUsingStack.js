//232


class myQueue {
    constructor() {
        this.pushStack = []
        this.popStack = []
    }

    push(val) {
        this.pushStack.push(val)    //Simple push value into the stack 
    }

    pop() { //To remove the first element of the queue 
        if(!this.popStack.length) {  //will only run while the popstack is empty
            while(this.pushStack.length) {  //if the popstack is empty, add all the elements in the push stack to the pop stack to remove one by one (FIFO)
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack.pop()  //pop the last element of the popstack which is also the first elem of the push stack
    }

    peek() {
        if(!this.popStack.length) {  //if popstack lenght is 0 run the while loop
            while(this.pushStack.length) {  //When push stack is empty break the while loop
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack[this.popStack.length - 1]  //return the last element of the stack
    }

    empty() {
        return this.pushStack.length === 0 && this.popStack.length === 0 //If both the pop and push stack are empty return true
    }
}