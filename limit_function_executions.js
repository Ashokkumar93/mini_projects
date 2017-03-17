console.log(once(sum(2,3)));
console.log(once(sum(1,10)));
console.log(once(sum(1,10)));

function once(x) {
    
    if (this.done == undefined) {
        this.done = 0;
    }
    
    if (this.done == 2) {
        throw "Once has been executed once";
    } else {
        this.done++;
        return x;
    }
}

function sum(a,b) {
    return a+b;
}