var reverseList = function(head) {
    let prev = null;

    while(head !== null) {
        // create a pointer that points at everything after head
        const next = head.next; // [2, 3]

        // make w/e after head null on the first run, and every other run it'll be w/e prev is
        head.next = prev // [null]

        // since it's now just the first val of head, make prev head so that it reverses itself
        prev = head // [1]

        // make head next so that you can use it for future loops as the next variable
        head = next // [2, 3]

    }

    return prev
};

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;
    while(curr){

        next = curr.next
        curr.next = prev
        prev = curr
        curr = next

    }
    return prev
}
