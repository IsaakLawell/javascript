import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Raine's space</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="h-screen">
        <div className="sticky h-1/2 w-screen top-0 left-0 bg-gradient-to-b from-blue-500 via-pink-400 to-white z-[-1]"></div>
        <div className="sticky h-1/2 w-screen top-1/2 left-0 bg-gradient-to-t from-blue-500 via-pink-400 to-white z-[-1] "></div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 mx-auto pt-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Bienvenue <span className="text-purple-800">à vous</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://algo-mauvais.vercel.app/"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Le d'algo mauvais →</h3>
              <div className="text-lg">
                Site d'entrainement - Puissance 4, Sudoku et résolution et
                commande vocal.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Accès au site →</h3>
              <div className="text-lg">
                Accès complet au site - Description, analyse et présentation.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
