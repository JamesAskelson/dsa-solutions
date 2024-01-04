class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const createLinkedList = (values) => {
    if (values < 1) return null
    let head = new Node(values[0])
    let curr = head
    for (let i = 1; i < values.length; i++) {
      let node = new Node(values[i])
      curr.next = node
      curr = curr.next
    }
    return head
  };
