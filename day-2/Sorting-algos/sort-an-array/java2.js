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
      while(left.length !== 0 && right.length !== 0){
          if(left[0] < right[0]) {
              merged.push(left.shift())
          } else {
              merged.push(right.shift())
          }
      }
      return [...merged, ...left, ...right]
  }
