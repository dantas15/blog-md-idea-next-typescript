import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

export function CoverImage({ title, src, slug }: Props) {
  const image = (
    // Prevents "missing required width error"
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className="shadow-sm hover:shadow-lg transition-shadow duration-200"
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
