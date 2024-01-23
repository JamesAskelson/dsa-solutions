var sortList = function(head) {
    if(head==null){
        return null;
    }
    let curr = head
    let arr = []
    while(curr){
        arr.push(curr.val)
        curr = curr.next
    }
    arr.sort((a, b) => a - b);
    let n = new ListNode();
    head=n;
    let res = head
    for(let i = 0; i < arr.length; i++) {
        console.log(res)
        let val = arr[i]
        let newNode = new ListNode(val)
        res.next = newNode
        res = res.next
    }

    return head.next
};
