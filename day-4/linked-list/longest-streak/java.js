const longestStreak = (head) => {
    // todo
    if (head === null) return 0
    let count = 1;
    let longestStreak = 1;
    let curr = head

    while (curr !== null && curr.next !== null) {
      // starting streak
      console.log('CURR ===> ', curr)
      if (curr.val === curr.next.val) {
        curr = curr.next
        count++
      }
      // breaking streak
      else {
        if (count > longestStreak){
          longestStreak = count
          count = 1
        } else {
          count = 1
        }
        curr = curr.next
      }
      console.log('COUNT ===> ', count)
      if (count > longestStreak){
          longestStreak = count
      }
    }
    return longestStreak
  };
