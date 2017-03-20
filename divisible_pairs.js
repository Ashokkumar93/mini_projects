//Given array of integers, find the number of sorted pairs formed by its (different) elements such that the second element in the pair is divisible by the first one.
//
//Example
//
//For sequence = [1, 3, 2], the output should be
//divisorsPairs(sequence) = 2.
//
//These pairs are: (1, 3), (1, 2).
//
//For sequence = [2, 4, 8], the output should be
//divisorsPairs(sequence) = 3.
//
//These pairs are: (2, 4), (2, 8), (4, 8).

console.log(divPair([1,3,2]));

function divPair(inputArray) {
    var ret = 0;
    
    inputArray.map(function (x) {
        var ind = inputArray.indexOf(x);
        
        for (var i=0;i<inputArray.length;i++) {
            if (i==ind) {
                continue;
            } else if (inputArray[i]%x == 0) {
                ret++;
            }
        }
    });
    
    return ret;
}