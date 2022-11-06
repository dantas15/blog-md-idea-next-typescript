import Head from 'next/head';
import { Layout } from '../../components/layout';
import { PostPreview } from '../../components/post-preview';
import { Post } from '../../interfaces/post';

type Props = {
  allPosts: Post[];
};

function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>gus&apos; blog</title>
      </Head>
      <section>
        <h2 className="mb-16 text-3xl md:text-5xl font-bold tracking-tighter leading-tight w-full border-b-2 pb-8">
          all posts
        </h2>

        <div className="grid grid-cols-1 md:gap-x-8 gap-y-8 md:gap-y-16 mb-32">
          {allPosts.map((post) => {
            return (
              <PostPreview
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      allPosts: [
        {
          slug: 'hello-world',
          title: 'hello world',
          date: '2020-11-05',
          excerpt: 'lorem ipsum descrption',
          content: 'lorem ipsum vjggffhjfhfjhjgghgffhfhjhjgfjfhhhfjhffhj',
        },
        {
          slug: 'my-world',
          title: 'my world',
          date: '2020-11-05',
          excerpt: 'lorem ipsum descrption',
          content: 'lorem ipsum vjggffhjfhfjhjgghgffhfhjhjgfjfhhhfjhffhj',
        },
        {
          slug: '2-world',
          title: 'my world',
          date: '2020-11-05',
          excerpt: 'lorem ipsum descrption',
          content: 'lorem ipsum vjggffhjfhfjhjgghgffhfhjhjgfjfhhhfjhffhj',
        },
        {
          slug: '3-world',
          title: 'my world',
          date: '2020-11-05',
          excerpt: 'lorem ipsum descrption',
          content: 'lorem ipsum vjggffhjfhfjhjgghgffhfhjhjgfjfhhhfjhffhj',
        },
        {
          slug: '4-world',
          title: 'my world',
          date: '2020-11-05',
          excerpt: 'lorem ipsum descrption',
          content: 'lorem ipsum vjggffhjfhfjhjgghgffhfhjhjgfjfhhhfjhffhj',
        },
        {
          slug: '5-world',
          title: 'my world',
          date: '2020-11-05',
          excerpt: 'lorem ipsum descrption',
          content: 'lorem ipsum vjggffhjfhfjhjgghgffhfhjhjgfjfhhhfjhffhj',
        },
        {
          slug: '6-world',
          title: 'my world',
          date: '2020-11-05',
          excerpt: 'lorem ipsum descrption',
          content: 'lorem ipsum vjggffhjfhfjhjgghgffhfhjhjgfjfhhhfjhffhj',
        },
        {
          slug: '7-world',
          title: 'my world',
          date: '2020-11-05',
          excerpt: 'lorem ipsum descrption',
          content: 'lorem ipsum vjggffhjfhfjhjgghgffhfhjhjgfjfhhhfjhffhj',
        },
      ],
    },
  };
};

export default Blog;
