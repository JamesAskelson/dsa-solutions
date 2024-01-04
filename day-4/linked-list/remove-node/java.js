const removeNode = (head, targetVal) => {
    // todo
    let curr = head
    let prev = null
    while (curr !== null) {
      // val = targ -> set prev.next to curr.next
      // if at index 0 -> prev = null & curr.val = targetVal
      if (prev === null && curr.val === targetVal) {
        head = head.next
        return head
      } else if (curr.val === targetVal) {
        prev.next = curr.next
        return head
      } else {
        prev = curr
      }
      curr = curr.next
    }

    return head
  };
