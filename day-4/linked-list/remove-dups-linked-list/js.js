var deleteDuplicates = function(head) {
    let set = new Set()
    let curr = head;
    let prev = null;

    while(curr !== null){
        let value = curr.val
        if(set.has(value)){
            prev.next = curr.next
            curr = curr.next
        } else{
            set.add(value)
            prev = curr
            curr = curr.next
        }
    }
    return head
};
