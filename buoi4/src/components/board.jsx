import { useEffect, useState } from "react"
import Square from "./square"

const initialGame = Array(9).fill(null)

const Board = () => {

    // const [game, setGame] = useState(initialGame);
    // const [player, setPlayer] = useState(true);
    // const [winner, setWinner] = useState(null);
    // const [gameOver, setGameOver] = useState(false); // Thêm state gameOver để kiểm tra trò chơi đã kết thúc hay chưa

    // useEffect(() => {   
    //     setWinner(checkWinner());
    //     if (winner) {
    //         setGameOver(true); // Cập nhật state gameOver thành true khi có người thắng
    //     }
    // }, [game,winner]);

    // const handlePlay = (position) => {
    //     if (!gameOver) { // Kiểm tra nếu trò chơi đã kết thúc thì không cho phép chơi tiếp
    //         const newGame = game.map((g, index) => {
    //             if (position === index) {
    //                 return player ? "X" : "O";
    //             }
    //             return g;
    //         });
    //         setGame(newGame);
    //         setPlayer(!player);
    //     }
    // };

    const [game, setGame] = useState(initialGame);
    const [player, setPlayer] = useState(true);
    const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [countdown, setCountdown] = useState(3);


    useEffect(() => {
            const interval = setInterval(() => {
                if (countdown === 0) {
                    clearInterval(interval); // dừng chạy hàm setInterval()
                    autoPlay();
                } else {
                    setCountdown(countdown - 1); // giảm 1 và cập nhật lại thông qua setCountdown
                }
            }, 1000);
            return () => clearInterval(interval);
    });
    // console.log(countdown);

    useEffect(() => {
        setWinner(checkWinner());
        if (winner) {
            setGameOver(true);
        }
    }, [game, winner]);

    const handlePlay = (position) => {
        if (!gameOver) {
            setCountdown(3);
            const newGame = game.map((g, index) => {
                if (position === index) {
                    return player ? "X" : "O";
                }
                return g;
            });
            setGame(newGame);   
            setPlayer(!player);
        }
    };

    const autoPlay = () => {
        const emptyPositions = game.reduce(
            // acc là mảng chứa các vị trí trống
            // cur là giá trị phần tử hiện tại đang được xử lý
            // index là số phần tử đang được xử lý
            (acc, cur, index) => (cur === null ? [...acc, index] : acc),
            []
        );
        const randomPosition =
            // Math.floor() và Math.random() để chọn một vị trí ngẫu nhiên từ các vị trí còn trống
            emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
        handlePlay(randomPosition);
    };

    const listWin =
        [
            [0, 4, 8],
            [0, 1, 2],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
        ];

    const checkWinner = () => {
        for (let i = 0; i < listWin.length; i++) {
            const [p1, p2, p3] = listWin[i];
            if (game[p1] !== null && game[p1] === game[p2] && game[p2] === game[p3]) {
                return game[p1]
            }
        
        }
        return null;    
    };

    // const resetBoard = () => {
    //     setGame([null, null, null, null, null, null, null, null, null]);
    //     setPlayer(true);
    //     setWinner(null);
    // }
    const handleNewGame = () => {
        setGame(initialGame)
        setWinner(null)
        setPlayer(true)
        setGameOver(false)
        setCountdown(3)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                {!winner && game.includes(null) && <div>Lượt của {player ? "X" : "O"}</div>}
                {<div>Thời gian lượt chơi:{countdown}</div>}
                {winner && <div>
                    <h2 className="text-2xl mb-4">
                        Người thắng : {winner}
                    </h2>
                </div>}
                {!winner && !game.includes(null) && <p>Hòa!</p>}
                <div className="bg-gray-200 p-4  m-5">
                    <div className="grid grid-cols-3 gap-2">
                        <Square value={game[0]} handlePlay={() => handlePlay(0)} />
                        <Square value={game[1]} handlePlay={() => handlePlay(1)} />
                        <Square value={game[2]} handlePlay={() => handlePlay(2)} />
                        <Square value={game[3]} handlePlay={() => handlePlay(3)} />
                        <Square value={game[4]} handlePlay={() => handlePlay(4)} />
                        <Square value={game[5]} handlePlay={() => handlePlay(5)} />
                        <Square value={game[6]} handlePlay={() => handlePlay(6)} />
                        <Square value={game[7]} handlePlay={() => handlePlay(7)} />
                        <Square value={game[8]} handlePlay={() => handlePlay(8)} />
                    </div>
                </div>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleNewGame}>New Game</button>
            </div>
        </>
    );
}


export default Board