var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0)
    let stack = []
    for(let i = 0; i < temperatures.length; i++){
        let temp = temperatures[i]

        // console.log(stack[stack.length - 1], temp)

        while(stack.length > 0 && stack[stack.length - 1][0] < temp) {
            // console.log(stack[stack.length - 1])
            let [te, index] = stack.pop()
            let nDays = i - index
            res[index] = nDays
        }
        stack.push([temp, i])
    }
    return res
};

var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0)
    let stack = []
    for(let i = 0; i < temperatures.length; i++){
        let temp = temperatures[i]

        // console.log(stack[stack.length - 1], temp)

        while(stack.length > 0 && stack[stack.length - 1][0] < temp) {
            // console.log(stack[stack.length - 1])
            let [te, index] = stack.pop()
            let nDays = i - index
            res[index] = nDays
        }
        stack.push([temp, i])
    }
    return res
};

