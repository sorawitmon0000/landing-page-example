import Image from "next/image";
import nextLogo from '@/assets/next-js.svg'
import tailwindLogo from '@/assets/tailwindcss.svg'
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <section id='first-hero'>
        <div className="container flex flex-col-reverse mx-auto px-6 py-20 lg:flex-row">
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:text-left lg:max-w-md">
              Next.js
            </h1>
            <p className="text-lg text-center text-gray-500 lg:text-left lg:max-w-lg">
              Next.js is a popular React framework that enables developers to build server-rendered React applications with ease. It offers several features that enhance the development experience.
            </p>
            <p className="text-lg text-center text-gray-500 lg:text-left lg:max-w-lg">
            Next.js is commonly used for building websites, web applications, and even e-commerce platforms due to its flexibility and scalability.
            </p>
            <div className="mx-auto lg:mx-0">
              <Link href='https://nextjs.org/docs'><button className="px-10 py-5 text-white font-bold rounded-full bg-slate-800 hover:opacity-70">GET START</button></Link>
            </div>
          </div>
          <div className="mb-10 mx-auto md:w-96 lg:mb-0 lg:w-1/2">
            <Image src={nextLogo} width={700} height={700}></Image>
          </div>
        </div>
      </section>
      <section id='second-hero' className="bg-slate-200">
        <div className="container flex flex-col mx-auto px-6 py-52">
          <h1 className="mt-10 text-5xl font-bold text-center">Features</h1>
          <p className="my-20 text-lg text-center text-gray-500">These features make Next.js a powerful tool for building modern web applications that are both fast and efficient, while also being easy to develop and maintain.</p>
          <div className="mt-10 flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
            <div className="flex flex-col items-center rounded-lg bg-slate-300 w-full py-10">
              <Image src={nextLogo} width={100} height={100}></Image>
              <p className="p-5 text-center text-lg font-bold">Server-Side Rendering (SSR)</p>
              <p className="p-2 text-center">Automatically pre-renders pages on the server, improving performance and SEO.</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-slate-300 w-full py-10">
              <Image src={nextLogo} width={100} height={100}></Image>
              <p className="p-5 text-center text-lg font-bold">Static Site Generation (SSG)</p>
              <p className="p-2 text-center">Generates static HTML at build time, allowing for fast load times and improved caching.</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-slate-300 w-full py-10">
              <Image src={nextLogo} width={100} height={100}></Image>
              <p className="p-5 text-center text-lg font-bold">File-Based Routing</p>
              <p className="p-2 text-center">Simplifies navigation by using the filesystem to create routes, making it intuitive to manage pages.</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-slate-300 w-full py-10">
              <Image src={nextLogo} width={100} height={100}></Image>
              <p className="p-5 text-center text-lg font-bold">Fast Refresh</p>
              <p className="p-2 text-center">Offers a seamless development experience with hot reloading for quick feedback during development.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="third-hero">
        <div className="container flex flex-col mx-auto px-6 py-52 items-center space-y-20">
          <h1 className="mt-10 text-5xl font-bold text-center">Tailwind CSS</h1>
          <Image src={tailwindLogo} width={700} height={700}></Image>
          <p className="text-lg text-center text-gray-500">
          Tailwind CSS is a utility-first CSS framework designed to help developers build custom user interfaces quickly and efficiently.
            </p>
        </div>
      </section>
      <footer className="py-16 bg-gray-700 h-1/3">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        <Image src={nextLogo} width={100} height={100}></Image>
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-5 font-bold text-white">Service</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="text-neutral-400 hover:text-cyan-400 text-sm">Analytics</a>
                <a href="#" className="text-neutral-400 hover:text-cyan-400 text-sm">Marketing</a>
                <a href="#" className="text-neutral-400 hover:text-cyan-400 text-sm">Explore</a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-5 font-bold text-white">Company</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="text-neutral-400 hover:text-cyan-400 text-sm">About us</a>
                <a href="#" className="text-neutral-400 hover:text-cyan-400 text-sm">Contact us</a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-5 font-bold text-white">Legal</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="text-neutral-400 hover:text-cyan-400 text-sm">Terms of use</a>
                <a href="#" className="text-neutral-400 hover:text-cyan-400 text-sm">Privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
