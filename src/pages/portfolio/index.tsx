import Head from 'next/head';
import { Post } from '../../interfaces/post';
import { Layout } from '../../components/layout';
import { PostPreview } from '../../components/post-preview';
import { getAllPosts } from '../../lib/api';

type Props = {
  allProjects: Post[];
};

function Portfolio({ allProjects }: Props) {
  return (
    <Layout>
      <Head>
        <title>gus&apos; portfolio</title>
      </Head>
      <section>
        <h2 className="mb-16 text-3xl md:text-5xl font-bold tracking-tighter leading-tight w-full border-b-2 pb-8">
          all projects I made
        </h2>

        <div className="grid grid-cols-1 md:gap-x-8 gap-y-8 md:gap-y-16 mb-32">
          {allProjects.map((post) => {
            return (
              <PostPreview
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                group="portfolio"
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = () => {
  const allProjects = getAllPosts(
    ['slug', 'title', 'date', 'coverImage', 'excerpt'],
    'portfolio',
  );
  return {
    props: { allProjects },
  };
};

export default Portfolio;
