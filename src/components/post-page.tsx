import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '../components/layout';
import { PostBody } from '../components/post-body';
import { PostHeader } from '../components/post-header';
import { PostTitle } from '../components/post-title';
import { Post as PostType } from '../interfaces/post';
import { AvailableGroups } from '../lib/api';

type Props = {
  post: PostType;
  morePosts?: PostType[];
  group?: AvailableGroups;
};

export function PostPage({ post, morePosts, group }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const postTitleText = `${post.title} | gus' ${group ?? 'blog'}`;

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
                tags={post.tags}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </section>
    </Layout>
  );
}