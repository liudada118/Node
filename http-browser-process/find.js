// a 'i am good'
function match(string) {
    for(let char of string){
        
    }
}

function match1(string) {
    let foundA = false
    for(let char of string) {
        if(char === 'a') {
            foundA = true;
        }else if (foundA && char ==='b'){
            return true;
        }else {
            foundA = false;
        }
    }
    return false;
}
console.log(match('i axb good'))