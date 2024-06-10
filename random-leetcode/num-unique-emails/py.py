def numUniqueEmails(emails):
    dupes = set([])
    count = len(emails)

    for email in emails:
        local, domain = email.split('@')
        print(local, domain)
        local = local.split('+')[0].replace('.', '')
        local = local.split('+')
        local = local[0]
        simple = local + '@' + domain
        if simple in dupes:
            count = count - 1
        else:
            dupes.add(simple)
    return count
