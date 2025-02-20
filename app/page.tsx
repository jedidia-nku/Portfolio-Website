import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white ">
      <nav className="w-full flex justify-around items-center px-10 py-6">
          <ul className="flex space-x-6 text-white">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="/elevator-pitch" className="hover:text-gray-400">Elevator Pitch</Link></li>
        </ul>
      </nav>

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-6 md:px-12">
        <div className="w-full md:w-1/2">
        <div className="mx-auto">
          <Image
            src="/Profile.jpg" // Replace with your image path
            alt="Jedidia Nkunzumwami"
            className="rounded-lg shadow-lg w-[80%] p-2 bg-white"
          />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I&apos;m <span className="text-green-400">Jedidia Nkunzumwami.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">A Web Developer.</h2>
          <p className="text-gray-300 mt-4">
            A passionate full-stack web developer with a strong foundation in computer science
            and software engineering. I specialize in creating robust and scalable web
            applications, leveraging my expertise in both front-end and back-end technologies.
          </p>
          
          {/* Download Button */}
          <div className="mt-6">
            <Link
              href="/cv.pdf" // Replace with your actual CV file path
              download
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all"
            >
             Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
