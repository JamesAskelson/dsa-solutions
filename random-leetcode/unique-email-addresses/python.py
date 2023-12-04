def numUniqueEmails(self, emails: List[str]) -> int:
    res = set()
    for i in range(0, len(emails)):
        [local, domain] = emails[i].split('@')
        if '.' in local:
            local = local.replace('.', '')
        index = local.find('+')
        if index is not -1:
            local = local.split('+')[0]
        res.add(local + '@' + domain)
    return len(res)
