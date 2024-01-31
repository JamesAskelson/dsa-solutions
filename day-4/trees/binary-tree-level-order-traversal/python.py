def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root == None:
            return []
        res = []
        queue = [root]
        while len(queue) > 0:
            leafs = []
            size = len(queue)
            for i in range(size):
                curr = queue.pop(0)
                leafs.append(curr.val)
                if curr.left:
                    queue.append(curr.left)
                if curr.right:
                    queue.append(curr.right)
            res.append(leafs)
        return res
