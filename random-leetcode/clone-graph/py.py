    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None
        stack = [node]
        res = {}
        while stack:
            curr = stack.pop()
            # if it's not in res, add a node of the curr val to the dict
            if curr.val not in res:
                res[curr.val] = Node(curr.val)
            # if there's any neighbors on the curr node
            if curr.neighbors != []:
                for neighbor in curr.neighbors:
                    # if the curr neighbor of your curr node exists
                    if neighbor.val not in res:
                        # make a new node to the neighbor val to the dict
                        res[neighbor.val] = Node(neighbor.val)
                        stack.append(neighbor)
                    # connect neighbor to the curr node in the dict one by one
                    res[curr.val].neighbors.append(res[neighbor.val])
        return res[node.val]
