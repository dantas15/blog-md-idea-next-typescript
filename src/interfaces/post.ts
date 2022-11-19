export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  content: string;
  tags?: string[];
}
