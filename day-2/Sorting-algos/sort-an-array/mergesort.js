function sortArray(arr) {
    if(arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(sortArray(left), sortArray(right));
  }

  function merge(left, right) {
      let merged = []
      let i = 0
      let j = 0
      while(i < left.length && j < right.length){
          if(left[i] < right[j]) {
              merged.push(left[i])
              i++
          } else {
              merged.push(right[j])
              j++
          }
      }
      while(i < left.length) {
          merged.push(left[i])
          i++
      }
      while(j < right.length) {
          merged.push(right[j])
          j++
      }

      return merged
  }

  function sortArray(arr) {
    if(arr.length <= 1){
        return arr
    }

    let pivot = Math.floor(arr.length/2)
    let left = arr.slice(0, pivot)
    let right = arr.slice(pivot)
    return merge(sortArray(left), sortArray(right))
}

function merge(left, right) {
    let merged = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            merged.push(left[i])
            i++
        } else {
            merged.push(right[j])
            j++
        }
    }

    while(i < left.length){
        merged.push(left[i])
        i++
    }

    while(j < right.length){
        merged.push(right[j])
        j++
    }

    return merged
}
