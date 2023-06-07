import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Algorithme</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="h-screen">
        <div className="absolute h-1/2 w-screen top-0 left-0 bg-gradient-to-b from-blue-500 via-pink-400 to-white z-[-1]"></div>
        <div className="absolute h-1/2 w-screen top-1/2 left-0 bg-gradient-to-t from-blue-500 via-pink-400 to-white z-[-1] "></div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mx-auto pt-9">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Site algo <span className="text-purple-800">mauvais</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
