let chessboard = [];
let line = -1;

for (let i = 0; i<64; i++) {

	i % 8 === 0 && (line = line + 1);
	let color = true;
	if (line % 2 === 0 && i % 2 === 0){
		color = true;
	} else if (line % 2 !== 0 && i % 2 !== 0) {
		color = true;
	} else {
		color = false;
	}

	chessboard[i] = {
		lineId: line,
		id: i,
		black: color
	}

}

export default chessboard