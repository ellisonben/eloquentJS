var size = 8;
var i = 0;
var flip = 1;
var board = '';

while (i < Math.pow(size, 2)) {
    if (flip>0) {
        board += '#';
    } else {
        board += ' ';
    }
    if ((i+1)%size === 0) {
        board += '\n';
        if (size%2 === 0) {
            flip *= -1;
        }
    }
    flip *= -1;
    i++;
}

console.log(board)
