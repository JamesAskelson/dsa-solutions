let sort = (arr) => {
    if(arr.length < 2) {
        return arr
    }
    let mid = arr.length / 2;
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(left, right)
}

let merge = (left, right) => {
    let merged = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            let popped = left.shift()
            merged.push(popped)
        } else {
            let popped = right.shift()
            merged.push(popped)
        }
    }
    return merged.concat(left, right)
}


console.log(sort([2,0,1]))
