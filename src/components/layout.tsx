import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      {/* TODO: Meta tags */}
      <Header />
      <div className="w-full min-h-screen items-center">
        <main className='max-w-xl mx-auto'>{children}</main>
      </div>
      <Footer />
    </>
  );
}
