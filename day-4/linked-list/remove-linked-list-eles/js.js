var removeElements = function(head, val) {
    let curr = head;
    let prev = null;
    while(curr !== null){

        if(curr.val === val){
            if(curr === head){
                // this here skips the node we want
                head = curr.next
                curr = curr.next
            } else {
                // this here skips the node we want
                prev.next = curr.next
                curr = curr.next
            }

        } else {
            prev = curr
            curr = curr.next
        }
    }
    return head
};
