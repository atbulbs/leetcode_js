declare let operationCount: number;
declare function defineReactive(data: any, key: any, value: any): void;
declare function observe(data: any): void;
declare const array: any[];
declare function logOperationCount(caseName: any, cb: any, ...args: any[]): void;
declare class LinkedListNode {
    data: any;
    next: LinkedListNode;
    constructor(data: any);
}
declare function checkRange(target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor;
declare class LinkedList {
    private head;
    private tail;
    private size;
    insert(data: any, index?: number): void;
    get(index: number): LinkedListNode;
    remove(index: number): LinkedListNode;
    print(): void;
    getSize(): number;
}
declare const myList: LinkedList;
