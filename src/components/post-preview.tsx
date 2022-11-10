import Link from 'next/link';
import { AvailableGroups } from '../lib/api';
import { DateFormatter } from './date-formatter';

type Props = {
  slug: string;
  date: string;
  title: string;
  coverImage?: string;
  excerpt: string;
  group?: AvailableGroups;
};

export function PostPreview({
  slug,
  title,
  date,
  excerpt,
  coverImage,
  group,
}: Props) {
  const postPath = group ? `/${group}/${slug}` : `/${slug}`;
  const hrefPath = group ? `/${group}/[slug]` : '/[slug]';

  return (
    <article key={slug} className="pb-2 border-b-2 last:border-b-0">
      <Link as={postPath} href={hrefPath} className="hover:underline">
        <h3 className="text-2xl md:text-3xl mb-1 leading-snug">{title}</h3>
      </Link>
      <div className="mb-2 text-zinc-500">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed text-zinc-600">{excerpt}</p>
    </article>
  );
}
