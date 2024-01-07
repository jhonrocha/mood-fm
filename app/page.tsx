import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
      <div>
        <h1>title</h1>
        <p>description</p>
        <div>
          <button>get started</button>
        </div>
      </div>
    </div>
  )
}
