var swapPairs = function(head) {
    if(!head || !head.next){
        return head
    }
    let ans = new ListNode(0)
    ans.next = head
    let curr = ans
    while(curr.next && curr.next.next){
        let temp1 = curr.next
        let temp2 = curr.next.next
        curr.next = temp2 // swaps first of pair with second
        temp1.next = temp2.next // makes the next of first of pair the next of second
        temp2.next = temp1 // makes the next of second of pair the first of pair that has the second pairs next
        curr = curr.next.next
    }

    return ans.next
};
