export default class MyQueue {
    private head;
    private memoryStack;
    private bufferStack;
    constructor();
    push(el: any): void;
    pop(): any;
    peek(): any;
    getHead(isRemove: boolean): any;
    empty(): boolean;
}
