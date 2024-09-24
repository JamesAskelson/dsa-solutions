var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;
    while(curr){
        console.log(prev, curr, next)
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        console.log(prev, curr, next)
    }
    return prev
};
