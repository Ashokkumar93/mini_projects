
var inpMatrix = [[1,2,3], [4,5,6], [7,8,9]];

console.log(maxMatrix(inpMatrix));

// A function that gets the maximum of all values in a matrix

function maxMatrix(input) {
    var rowLength = input[0].length;
    var arrayMaximums = [];
    
    input.map(function (row) {
        if (row.length !== rowLength) {
            throw "All the rows need to have equal lengths";
        } else {
            arrayMaximums.push(Math.max.apply(null, row));
        }
    });
    
    return Math.max.apply(null, arrayMaximums);
}