class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let curr = this.head;

    for(let i = 0; i <= index; i++){
        curr = curr.next
    }
    return curr?.val === null ? -1 : curr?.val
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val)
    if(!this.head){
        this.head = node
    } else {
        node.next = this.head
        this.head = node
    }

    this.size++
}
/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new Node(val)
    if(!this.head){
        this.head = node
    } else {
        let curr = this.head
        while(curr.next !== null){
            curr = curr.next
        }
        curr.next = node
    }

    this.size++
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const newNode = new Node(val)
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let prev = null;
        let curr = this.head;

        for (let i = 0; i < index; i++) {
            prev = curr;
            curr = curr.next;
        }

        newNode.next = curr;
        prev.next = newNode;
    }

    this.size++
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let prev = null;
        let curr = this.head;

        for (let i = 0; i < index; i++) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = curr.next;
    }
    this.size--;
};
