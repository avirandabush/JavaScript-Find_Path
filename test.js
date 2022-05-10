let arr = [[2, 1, 0],[0, 2, 2],[0, 0, 2]];

function findPath(arr)
{
    let row = arr.length-1;
    let col = arr[0].length-1;
    let r = 0;
    let c = 0;
    let start = arr[0][0];

    return rec(arr, row, col, r, c, start);
}

function rec(arr, row, col, r, c, start)
{
    if(arr[r][c] == start)
    {
        if(r == row && c == col)
            return true;
        if(r == row && c < col)
            return rec(arr, row, col, r, c+1, start);
        if(r < row && c == col)
            return rec(arr, row, col, r+1, c, start);
        return(rec(arr, row, col, r+1, c, start) || rec(arr, row, col, r, c+1, start) || rec(arr, row, col, r+1, c+1, start));
    }
    return false;
}

let result = findPath(arr);

console.log(result);
