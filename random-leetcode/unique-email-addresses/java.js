var numUniqueEmails = function(emails) {
    let domainSuffix = '.com';
    let set = new Set()
    for(let i = 0; i < emails.length; i++){
        let curr = emails[i].split('@')
        if(curr[0].includes('.')){
            curr[0] = curr[0].replaceAll(/\./g, '')
        }
        let index = curr[0].indexOf('+')
        if(index !== -1){
            curr[0] = curr[0].substr(0, index)
        }
        set.add(curr[0] + "@" + curr[1])
    }
    return set.size
};
