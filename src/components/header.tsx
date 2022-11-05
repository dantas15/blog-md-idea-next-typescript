import Link from 'next/link';

export function Header() {
  return (
    <header className="flex-col md:flex-row flex items-center md:justify-between pt-12 pb-12 md:mb-8 md:px-4 select-none">
      <Link href="/">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 whitespace-nowrap hover:underline">
          gus&apos;
        </h1>
      </Link>
    </header>
  );
}
