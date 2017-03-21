//Given a matrix, find its submatrix obtained by deleting the specified rows and columns.
//
//Example
//
//For
//
//matrix = [[1, 0, 0, 2], 
//          [0, 5, 0, 1], 
//          [0, 0, 3, 5]]
//rowsToDelete = [1] and columnsToDelete = [0, 2], the output should be
//
//constructSubmatrix(matrix, rowsToDelete, columnsToDelete) = [[0, 2],
//                                                             [0, 5]]

var mat = [[0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]];
var rows = [0, 1];
var columns = [2, 3];

console.log(mat);
console.log(deleteRowsColumns(mat, rows, columns));

function deleteRowsColumns(matrix, rows, columns) {
    var mat = [];

    for (var i = 0; i < matrix.length; i++) {

        if (rows.indexOf(i) == -1) {
            var row = [];

            for (var j = 0; j < matrix[0].length; j++) {
                if (columns.indexOf(j) == -1) {
                    row.push(matrix[i][j]);
                }
            }
            
            mat.push(row);
        }        

    }


    return mat;
}