var flatten = function(root) {
    let curr = root;
    while(curr){
        console.log('curr', curr)
        if(curr.left){
            let tmp = curr.left;

            while(tmp.right){
                // this has it go to the very end of the left's right most path
                tmp = tmp.right
            }
            // then says what is right of tmp (null) to be everything on the right
            tmp.right = curr.right
            // then make the right side of the tree the left side we've setup
            curr.right = curr.left
            // and finally make everything left null to eventually after loops a linked list
            curr.left = null
        }
        // move to the right while continuing the loop process of swapping the left elements to the right
        curr = curr.right
    }
};
