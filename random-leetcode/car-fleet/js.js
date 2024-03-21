var carFleet = function(target, position, speed) {
    let combo = []

    for(let i = 0; i < position.length; i++){
        combo.push([position[i], speed[i]])
    }

    const sorted = combo.sort((a,b) => a[0] - b[0]);
    console.log(sorted)
    const stack = []

    for(let i = sorted.length - 1; i >= 0; i--){
        let position = sorted[i][0]
        let speed = sorted[i][1]
        stack.push((target - position) / speed)

        if(stack.length >= 2){
            if(stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop()
            }
        }
    }
    return stack.length
};
