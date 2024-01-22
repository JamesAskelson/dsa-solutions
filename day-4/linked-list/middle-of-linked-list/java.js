var middleNode = function(head) {
    let fast = head
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        head = head.next
    }
    return head
};
