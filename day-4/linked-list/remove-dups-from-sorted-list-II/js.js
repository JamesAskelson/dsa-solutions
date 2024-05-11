var deleteDuplicates = function(head) {
    let set = new Set()
    let node = new ListNode(0)
    node.next = head;
    let curr = node;
    while(curr.next && curr.next.next){
        if(curr.next.val == curr.next.next.val){
            while(curr.next && curr.next.next && curr.next.val == curr.next.next.val) {
                curr.next = curr.next.next
            }
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }

    }

    return node.next
};
