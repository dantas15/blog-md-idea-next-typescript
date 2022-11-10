import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src', 'posts');

const availableGroups = ['portfolio'] as const;
export type AvailableGroups = typeof availableGroups[number];

export function getPostSlugs(group?: AvailableGroups) {
  return group
    ? fs.readdirSync(join(postsDirectory, group))
    : fs
        .readdirSync(postsDirectory, { withFileTypes: true })
        .filter((dirent) => dirent.isFile())
        .map((dirent) => dirent.name);
}

export function getPostsBySlug(
  slug: string,
  fields: string[] = [],
  group?: AvailableGroups,
) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = !!group
    ? join(postsDirectory, group, `${realSlug}.md`)
    : join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') items[field] = realSlug;
    if (field === 'content') items[field] = content;
    if (typeof data[field] !== 'undefined') items[field] = data[field];
  });

  return items;
}

export function getAllPosts(fields: string[] = [], group?: AvailableGroups) {
  const slugs = getPostSlugs(group);
  const posts = slugs
    .map((slug) => getPostsBySlug(slug, fields, group))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
