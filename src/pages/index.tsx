import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/layout';
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

export default function Home() {
  return (
    <Layout>
      <section className="w-100 select-none">
        hey, welcome to my website. I&apos;m Gustavo Galote, a CS student based
        in Brazil. This is an attempt to show what I&apos;ve been learning while
        I improve my note-taking skills
      </section>
      <section className="flex flex-col md:flex-row w-full gap-4 mt-12">
        <Link
          className="flex-1 text-center bg-zinc-200 hover:bg-zinc-600 text-zinc-900 hover:text-zinc-50 transition-colors py-2 px-4 rounded"
          as={`#`}
          href="#"
        >
          posts
        </Link>
        <Link
          className="flex-1 text-center bg-zinc-200 hover:bg-zinc-600 text-zinc-900 hover:text-zinc-50 transition-colors py-2 px-4 rounded"
          as={`#`}
          href="#"
        >
          portfolio
        </Link>
        <Link
          className="flex-1 text-center bg-zinc-200 hover:bg-zinc-600 text-zinc-900 hover:text-zinc-50 transition-colors py-2 px-4 rounded"
          as={`#`}
          href="#"
        >
          about me
        </Link>
      </section>
      <section className="mt-12 w-full">
        <h2 className="text-center mx-0 text-zinc-600 underline underline-offset-4 select-none">
          social medias
        </h2>
        <div className="mt-2 gap-4 flex flex-col md:flex-row justify-center">
          <Link target="_blank" href="https://github.com/gusgalote">
            <GithubLogo
              className="text-zinc-400 hover:text-zinc-600 transition-colors hover:underline underline-offset-4"
              size={22}
            />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/gustavo-galote-3394661b7/">
            <LinkedinLogo
              className="text-zinc-400 hover:text-zinc-600 transition-colors hover:underline underline-offset-4"
              size={22}
            />
          </Link>
          <Link target="_blank" href="https://twitter.com/gusgalote">
            <TwitterLogo
              className="text-zinc-400 hover:text-zinc-600 transition-colors hover:underline underline-offset-4"
              size={22}
            />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
