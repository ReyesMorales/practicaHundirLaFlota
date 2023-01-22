const { MAX_SHOOTS } = require("./constants");
const { getEmptyBoard, addAllBoats, isVictory, shoot, showBoard} = require("./utils");



const player1 = {
    shootsCounter: MAX_SHOOTS,
    ownBoard: getEmptyBoard(),
    rivalBoard: getEmptyBoard(),
    id: 'Player 1'
}

const player2 = {
    shootsCounter: MAX_SHOOTS,
    ownBoard: getEmptyBoard(),
    rivalBoard: getEmptyBoard(),
    id: 'Player 2'
}

addAllBoats(player1.ownBoard);
addAllBoats(player2.ownBoard);


(async () => {
    let gameFinished = false;
    while (gameFinished === false) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.clear();
                shoot(player2.ownBoard, player1.rivalBoard, player1);
                showBoard(player1.ownBoard, player1.id);
                showBoard(player1.rivalBoard, player1.id);
                if (player1.shootsCounter === 0) { gameFinished = true; }
                if (isVictory(player1.ownBoard)) {
                    gameFinished = true;
                    console.log('PLAYER 1 WINS');
                }
                resolve();
            }, 1000);
        });
        await new Promise((resolve) => {
            setTimeout(() => {
                console.clear();
                shoot(player1.ownBoard, player2.rivalBoard, player2);
                showBoard(player2.ownBoard, player2.id);
                showBoard(player2.rivalBoard, player2.id);
                if (player2.shootsCounter === 0) { gameFinished = true; }
                if (isVictory(player1.ownBoard)) {
                    gameFinished = true;
                    console.log('PLAYER 2 WINS');
                }
                resolve();
            }, 1000);
        });
    }
})();
