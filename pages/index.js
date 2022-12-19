import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center content-center h-full">
      <Head>
        <title>Charlie Welsh</title>
      </Head>
      <div className="max-w-3xl m-8 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <h1 className="dark:text-white text-5xl font-bold font-display grow">
              Charlie Welsh
            </h1>
            <Link href="https://github.com/tetraoxygen">
              <a className="hover:opacity-80 transition dark:invert">
                <Image src="/github.svg" width="32px" height="32px" />
              </a>
            </Link>
          </div>
          <p className="text-xl dark:text-white">
            Hey, I’m Charlie! I’m a software engineer and hobbyist type designer
            from the Portland area. Here are a few recent projects I’m proud of:
          </p>
        </div>
        <div className="rounded-xl shadow-lg hover:scale-105 transition p-6 bg-stone-300 bg-[url('/assemble-bg.png')] bg-cover bg-blend-brighten">
          <h2 className="text-4xl font-display font-semibold">
            Hack Club Assemble
          </h2>
          <p>
            I wrote the{" "}
            <Link href="https://github.com/hackclub/AssembleTicketing-Backend">
              <a className="underline text-slate-600 hover:text-blue-500 transition">
                ticketing, check-in, and COVID vaccination/test verification
                system
              </a>
            </Link>
            , as well as an accompanying iOS app, for for Hack Club Assemble, a
            42-hour hackathon in San Francisco.
          </p>
        </div>

        <div className="rounded-xl shadow-lg p-6 bg-green-600 brand-gradient hover:scale-105 transition text-white">
          <h2 className="text-4xl font-display font-semibold">Portland</h2>
          <p>
            This website is set in my custom typeface, Portland, which you can
            get below.
          </p>
          <p className="text-right">
            <Link href="https://allotro.pe/portland">
              <a className="text-underline hover:text-blue-100 transition">
                allotro.pe/portland
              </a>
            </Link>
          </p>
        </div>
        <p className="dark:text-white/50 text-center text-black/50">
          You can find some of my older projects{" "}
          <Link href="https://github.com/tetraoxygen">
            <a className="underline hover:text-blue-500/50 transition">
              on my GitHub profile.
            </a>
          </Link>
        </p>
        <p className="text-black/50 dark:text-white/50">
          &copy; 2022 Charlie Welsh
        </p>
      </div>
    </div>
  );
}
