import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="w-100">
        hey, welcome to my website. I&apos;m Gustavo Galote, a CS student based
        in Brazil. This is an attempt to show what I&apos;ve been learning while
        I improve my note-taking skills
      </div>
    </Layout>
  );
}
