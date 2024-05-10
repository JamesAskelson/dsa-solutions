var mergeNodes = function(head) {
    let ans = new ListNode(0)
    let curr = ans;
    let sum = 0;
    while(head){
        if(head.val === 0){
            if(sum > 0){
                let node = new ListNode(sum)
                curr.next = node
                curr = curr.next
                sum = 0
            }
        } else {
            sum += head.val
        }

        head = head.next
    }

    return ans.next
};

var mergeNodes = function(head) {
    let curr = head;

    while(curr.next){
        // add up the current with the next val and then go to the next in line
        curr.val += curr.next.val
        curr.next = curr.next.next

        // if there is nothing after the next, then the next is a zero and
        // you just need to remove it and return the head
        if(curr.next.next == null){
            curr.next = null
            return head
        }

        // if the next value is 0, you dont want to do any addition for the next
        // loop with it, so you move curr to the next node
        if(curr.next.val === 0){
            curr = curr.next
        }
    }
};
