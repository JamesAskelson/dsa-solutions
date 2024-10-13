var isPathCrossing = function(path) {
    let set = new Set()
    let current = [0, 0]
    set.add(current.toString())
    for(let i = 0; i < path.length; i++){
        if(path[i] == 'N'){
            current[1] += 1
        } else if(path[i] == 'S'){
            current[1] -= 1
        } else if(path[i] == 'E'){
            current[0] += 1
        } else {
            current[0] -= 1
        }
        console.log(current, set)
        if(set.has(current.toString())){
            return true
        } else {
            set.add(current.toString())
        }
    }
    return false
};
