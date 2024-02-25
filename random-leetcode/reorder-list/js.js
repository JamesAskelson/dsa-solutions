var reorderList = function(head) {
    if (!head || !head.next || !head.next.next) {
        return head;
    }

    // Helper function to reverse a linked list
    const reverseList = (node) => {
        let prev = null;
        let curr = node;
        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    };

    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let reversed = reverseList(slow.next);
    slow.next = null; // Cut off the original list

    // Merge the two halves of the linked list
    let first = head;
    let second = reversed;
    while (first && second) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};
