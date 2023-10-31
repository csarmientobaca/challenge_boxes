import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-between w-full">
        <div className="w-1/3 h-64 bg-gray-300 mx-2"></div>
        <div className="w-1/3 h-64 bg-gray-400 mx-2"></div>
        <div className="w-1/3 h-64 bg-gray-500 mx-2"></div>
        <div className="w-1/3 h-64 bg-gray-300 mx-2"></div>
        <div className="w-1/3 h-64 bg-gray-400 mx-2"></div>
        <div className="w-1/3 h-64 bg-gray-500 mx-2"></div>
      </div>
    </main>
  )
}
