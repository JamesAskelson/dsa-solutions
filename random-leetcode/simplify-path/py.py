def simplifyPath(self, path: str) -> str:
        directories = path.split('/')
        stack = []
        print(directories)
        for dir in directories:
            if dir == '.' or dir == '':
                continue
            elif dir == '..':
                if len(stack) > 0:
                    stack.pop()
            else:
                stack.append(dir)
        return '/' + '/'.join(stack)
