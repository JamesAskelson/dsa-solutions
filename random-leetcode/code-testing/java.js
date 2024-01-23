let merge = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)]
    let left = []
    let right = []


    let sortedLeft = merge(left)
    let sortedRight = merge(right)

    return [...sortedLeft, pivot, ...sortedRight]
}



console.log(merge([6,4,2,5,8,1]))
