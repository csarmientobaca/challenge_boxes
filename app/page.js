"use client"
import React from 'react'

const boxes = [1, 2, 3, 4, 5, 6] // Same but more cool --> Array.from({ length: 6 }, (v, k) => k + 1);
const getPrize = () => Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6

export default function Game() {

  const [prize, setPrize] = React.useState(getPrize())
  const [tries, setTries] = React.useState(0)
  const [gameStatus, setGameStatus] = React.useState('playing') // 'playing', 'won', 'lost'
  const [clickedBoxes, setClickedBoxes] = React.useState([])

  const handleBoxClick = (id) => {
    if (gameStatus !== 'playing') return // Avoid box clicks if game is won or lost
    if (clickedBoxes.includes(id)) return // Clicked boxes cannot be clicked twice

    if (id === prize) {
      setGameStatus('won')
      return
    } else {
      setClickedBoxes([...clickedBoxes, id])
      setTries(tries + 1)
    }

    if (tries === 2) {
      setGameStatus('lost')
      return
    }

  }

  const handlePlayAgain = () => {
    setClickedBoxes([])
    setGameStatus('playing')
    setTries(0)
    setPrize(getPrize())
  }

  return (
    <>
      <header className="text-center mt-12 pb-32">
        <h1 className="text-4xl font-bold pb-5">Prize Game</h1>
        {gameStatus !== 'playing' && (
          <div className="col-span-2 text-center">
            <h2 className="text-4xl font-bold">
              {gameStatus === 'won' ? 'You won! 🏆🎉' : 'You lost! 💣💥'}
            </h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded"
              onClick={() => handlePlayAgain()}>
              Play again
            </button>
          </div>
        )}
      </header>

      <main
        className="grid grid-cols-2 grid-rows-3 gap-4 center">
        {
          boxes.map((box) => (
            <div
              key={box}
              className={`
              ${gameStatus !== 'playing' && box === prize && 'bg-green-500'}
              ${gameStatus === 'playing' && 'hover:bg-yellow-300 cursor-pointer'}
              ${clickedBoxes.includes(box) && 'bg-red-500'}
              ${box === prize && 'underline' /* underline the prize box, remove this line if not cheating :D */}
              h-48 bg-gray-500 mx-10 mb-4 flex justify-center items-center
            `}
              onClick={() => handleBoxClick(box)}>
              <span className="text-4xl font-bold text-white">{box}</span>
            </div>
          ))
        }
      </main >
    </>
  )
}