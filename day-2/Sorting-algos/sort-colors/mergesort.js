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
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i])
            i++
        } else {
            merged.push(right[j])
            j++
        }
    }

    return merged.concat(left.slice(i), right.slice(j))
}


console.log(sort([2,0,1]))
