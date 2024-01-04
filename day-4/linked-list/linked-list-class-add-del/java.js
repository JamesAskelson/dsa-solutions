class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class MyLinkedList {
    constructor(node) {
      this.head = node;
      this.tail = null;
      this.size = 0;
    }

    get(index) {
      // edge cases: invalid index
      if (index > this.size - 1 || index < 0) return -1;

      // Version 2
      let curr = this.head;
      let i = 0;
      while (i < index) {
        curr = curr.next;
        i++;
      }

      // Version 1
      // let count = 0;
      // while (curr !== null) {
      //   if (count === index) {
      //     return curr.val;
      //   }
      //   count++;
      //   curr = curr.next;
      // }
    }

    addAtHead(val) {
      let newNode = new Node(val);

      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let tmp = this.head;
        this.head = newNode;
        this.head.next = tmp;
      }
      this.size++;

      return this.head;
    }

    addAtTail(val) {
      let newNode = new Node(val);

      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.size++;
      return this.head;
    }

    // Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
    addAtIndex(index, val) {
      if (index > this.size - 1 || index < 0) return;
      if (index === 0) return this.addAtHead(val);
      let newNode = new Node(val);
      let curr = this.head;
      let prev = null;

      // THE JUICER METHOD
      let i = 0;
      while (i < index) {
        prev = curr;
        curr = curr.next;
        i++;
      }

      prev.next = newNode;
      newNode.next = curr;
      this.size++;

      return this.head;
    }

    deleteAtIndex(index) {
      let curr = this.head;
      if (index === 0) {
        let tmp = curr.next;
        curr.next = null;
        this.head = tmp;
        this.size--;
      } else {
        let i = 0;
        let prev;
        while (i < index) {
          prev = curr;
          curr = curr.next;
          i++;
        }
        prev.next = curr.next;
        this.size--;
        // [6,1,2,3,4,5]
      }
      return this.head;
    }
  }
