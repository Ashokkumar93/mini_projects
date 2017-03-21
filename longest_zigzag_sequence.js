//A sequence of integers is called a zigzag sequence if each of its elements is either strictly less than both neighbors or strictly greater than both neighbors. For example, the sequence 4 2 3 1 5 3 is a zigzag, but 7 3 5 5 2 and 3 8 6 4 5 aren't.
//
//For a given array of integers return the length of its longest contiguous sub-array that is a zigzag sequence.
//
//Example
//
//For a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6], the output should be
//zigzag(a) = 4.
//
//The longest zigzag sub-arrays are [5, 3, 5, 3] and [3, 2, 8, 6] and they both have length 4.

var a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6];
console.log(longestZigzag(a));

function longestZigzag(arr) {
    var check = [];
    
    for (var i=0;i<arr.length;i++) {
        check[i]=0;
    }
    
    for (var j=1;j<(arr.length-1);j++) {
        if (((arr[j]>arr[j-1]) && (arr[j]>arr[j+1])) || (((arr[j]<arr[j-1]) && (arr[j]<arr[j+1])))) {
            check[j] = 1;
        }
    }
    
    var onesLengths = arraysOfOnes(check);
    
    return (Math.max.apply(null, onesLengths) + 2);
}

function arraysOfOnes(arr) {
    var ret=[];
    var arrString = arr.join("");
    var stringOfOnes = [];
    for (var i=1;i<arr.length-1;i++) {
        stringOfOnes.push(Array(i+1).join("1"));
    }
    
    stringOfOnes.map(function (x) {
        if (arrString.includes(x)) {
            ret.push(x.length);
        }
    });
    
    return ret;
}