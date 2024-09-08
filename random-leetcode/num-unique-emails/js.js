var numUniqueEmails = (emails) => {
    let dupes = new Set()
    count = emails.length()

    for(let email of emails){
        let local, domain = email.split()
        local = local.split('+')[0].replace('.', '')
        local = local.split('+')
        local = local[0]
        simple = local + '@' + domain
        if(dupes.has(simple)){
            count = count - 1;
        } else{
            dupes.add(simple)
        }
    }
    return count
}
