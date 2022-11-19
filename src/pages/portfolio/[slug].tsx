import { getAllPosts, getPostsBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import { PostPage } from '../../components/post-page';

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostsBySlug(
    params.slug,
    ['title', 'date', 'slug', 'content', 'coverImage', 'tags'],
    'portfolio',
  );

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
  const posts = getAllPosts(['slug'], 'portfolio');

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

export default PostPage;
