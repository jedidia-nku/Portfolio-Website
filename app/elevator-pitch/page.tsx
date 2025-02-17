export default function ElevatorPitch() {
    return (
        <div className="min-h-screen bg-gray-900 ">
            <nav className="w-full flex justify-around items-center px-10 py-6">
        <ul className="flex space-x-6 text-white">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/portfolio" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="/elevator-pitch" className="hover:text-gray-400">Elevator Pitch</a></li>
        </ul>
      </nav>
      
      <main className="flex flex-col items-center justify-center bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold text-green-400">Elevator Pitch</h1>
        <p className="mt-4 text-gray-300 text-lg">
          This page is a placeholder for my elevator pitch. A video or additional content will be added soon.
        </p>
      </main>
      </div>
    );
  }
  