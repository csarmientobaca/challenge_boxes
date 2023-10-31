"use client"
import Image from 'next/image'
import React from 'react'

export default function Home() {

  const [counter, setCounter] = React.useState(0);

  const helloworld = (event) => {

    const hello = event.target.textContent;

    event.target.innerHTML = "<p class='text-black text-center'>Hello World</p>";
    setTimeout(() => {
      event.target.innerHTML = hello;
    }, 3000);
    setCounter(counter + 1);

    if (counter === 2) {
      alert("You lose!");
      setCounter(0);
    }
  }

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-between w-full" data>
        <div className="w-1/3">

          <div
            className="h-64 bg-gray-300 mx-10 mb-4 hover:bg-yellow-300 flex items-center justify-center"
            onClick={helloworld}>
          </div>
          <div
            className="h-64 bg-gray-400 mx-10 mb-4 hover:bg-yellow-400 flex items-center justify-center"
            onClick={helloworld}>
          </div>
          <div
            className="h-64 bg-gray-500 mx-10 mb-4 hover:bg-yellow-500 flex items-center justify-center"
            onClick={helloworld}>
          </div>
        </div>
        <div className="w-1/3">
          <div
            className="h-64 bg-gray-300 mx-10 mb-4 hover:bg-yellow-300 flex items-center justify-center"
            onClick={helloworld}>
          </div>
          <div
            className="h-64 bg-gray-400 mx-10 mb-4 hover:bg-yellow-400 flex items-center justify-center"
            onClick={helloworld}>
          </div>
          <div
            className="h-64 bg-gray-500 mx-10 mb-4 hover:bg-yellow-500 flex items-center justify-center"
            onClick={helloworld}>
          </div>
        </div>
      </div>
    </main>
  )
}