import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col max-w-3xl p-8">
      <Head>
        <title>Charlie Welsh</title>
      </Head>
      <div className="space-y-8 grow">
        <div className="space-y-2">
          <div className="flex items-center">
            <h1 className="dark:text-white text-5xl font-bold font-display grow">
              Charlie Welsh
            </h1>
          </div>
          <p className="text-xl dark:text-white">
            Hey, I’m Charlie, a software engineer from the Portland area now living in the Bay Area.
          </p>
        </div>

        <div className="flex space-x-4">
          <Link href="https://github.com/tetraoxygen">
            <a className="transition dark:invert flex space-x-2 opacity-50 hover:opacity-40 ">
              <Image src="/github.svg" width="16px" height="16px" alt="GitHub Logo"/>
              <p className="text-sm font-monospace font-semibold">
                GitHub
              </p>
            </a>
          </Link>

          <Link href="https://github.com/tetraoxygen">
            <a className="transition dark:invert flex space-x-2 opacity-50 hover:opacity-40 ">
              <Image src="/mastodon.svg" width="16px" height="16px" alt="GitHub Logo"/>
              <p className="text-sm font-monospace font-semibold">
                Mastodon
              </p>
            </a>
          </Link>
        </div>
      </div>

      <p className="text-sm text-black/50 dark:text-white/50">
        &copy; 2023 Charlie Welsh
      </p>
    </div>
  );
}
