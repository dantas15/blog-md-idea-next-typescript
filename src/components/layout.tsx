import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className='relative min-h-screen'>
      {/* TODO: Meta tags */}
      <Header />
      <div className="w-full items-center pb-16">
        <main className='max-w-xl mx-auto px-4 md:px-0'>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
