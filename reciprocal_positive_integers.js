//The positive integer n is given. How many solutions in positive integers does the following equation have:
//
//1 / n = 1 / a + 1 / b ?
//Example
//
//For n = 2, the output should be
//numberOfSolutions(n) = 3.
//
//Note:
//For n = 2 solutions (a, b) = (3, 6) and (a, b) = (6, 3) are different.

console.log(positiveSolutions(2));

function positiveSolutions(n) {
    var ret=0;
    var factors=[];
    
    for (var i=(n+1);i<(n*(n+1)+1);i++) {
        if (((n*n)%(i-n))==0) {
            ret++;
                    console.log(i, 1/((1/n)-(1/i)));

        }
        
    }
    return ret;
}