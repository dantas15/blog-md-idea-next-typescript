import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../components/footer';

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 not found | gus&apos; blog</title>
      </Head>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
        <h1 className="text-9xl font-extrabold text-zinc-600 tracking-widest">
          404
        </h1>
        <div className="bg-red-600 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <Link href="/" className="mt-5">
          <span className="relative inline-block text-sm font-medium text-red-600 group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-red-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-zinc-50 border border-current">
              Go Back
            </span>
          </span>
        </Link>
      </div>
      <Footer />
    </>
  );
}
