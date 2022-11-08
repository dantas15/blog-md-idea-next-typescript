import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '../components/layout';
import { PostBody } from '../components/post-body';
import { PostHeader } from '../components/post-header';
import { PostTitle } from '../components/post-title';
import { Post as PostType } from '../interfaces/post';
import { getAllPosts, getPostsBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';

type Props = {
  post: PostType;
  morePosts?: PostType[];
};

export default function Post({ post, morePosts }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const postTitleText = `${post.title} | gus' blog`;

  return (
    <Layout>
      <section className="pt-8">
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <>
            <Head>
              <title>{postTitleText}</title>
            </Head>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </section>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostsBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
