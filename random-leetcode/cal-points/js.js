var calPoints = function(operations) {
    let record = []
    let noScore = '+DC';
    while(operations.length){
        let score = operations.shift()
        if(!noScore.includes(score)){
            record.push(parseInt(score))
        } else if(score === '+'){
            newSum = record[record.length - 1] + record[record.length - 2];
            record.push(newSum)
        } else if(score === 'D') {
            newSum = record[record.length - 1]*2
            record.push(newSum)
        } else {
            record.pop()
        }
    }
    let score = 0;
    for(let i in record){
        let num = record[i]
        score += num;
    }
    return score
};
