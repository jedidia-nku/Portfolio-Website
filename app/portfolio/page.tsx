import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 ">
        <nav className="w-full flex justify-around items-center px-10 py-6">
          <ul className="flex space-x-6 text-white">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="/elevator-pitch" className="hover:text-gray-400">Elevator Pitch</Link></li>
        </ul>
      </nav>
      
    <main className="text-white flex gap-4 flex-col items-center p-8">
      {/* Bio Section */}
      <section className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold text-green-400">Hi, I&apos;m Jedidia Nkunzumwami</h1>
        <h2 className="text-2xl font-semibold text-white mt-2">A Web Developer</h2>
        <p className="mt-4 text-gray-300">
          A passionate full-stack web developer with a strong foundation in computer science and software engineering. 
          I specialize in creating robust and scalable web applications, leveraging my expertise in both front-end and back-end technologies.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-4">My Portfolio</h2>

        <div className="space-y-4 flex gap-4">
          {/* Link to Phase 2 Project Video */}
          <a
            href="https://www.youtube.com/watch?v=PStEPPR_0ZA&t=148s"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 my-auto text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Watch Project Video 🎥
          </a>

          {/* Link to Phase 2 Project Slide Deck */}
          <Link
            href="/Portfolio.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Download Project Slide Deck 📄
          </Link>
        </div>
      </section>
    </main>
    </div>
  );
}