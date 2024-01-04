const isUnivalueList = (head) => {
    // todo
    let curr = head;
    let next = head.next;
    let res;
    while (curr !== null && next !== null) {
      if (curr.val === next.val) {
        res = true;
      } else {
        return false;
      }
      next = next.next;
      curr = curr.next;
    }
    if (res) return res;
    else return true;
  };
