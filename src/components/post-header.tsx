import { DateFormatter } from './date-formatter';
import { CoverImage } from './cover-image';
import { PostTitle } from './post-title';

type Props = {
  title: string;
  coverImage?: string;
  date: string;
};

export const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {coverImage && (
        <div className="mb-8 md:mb-8 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
      <div className="max-w-2xl mx-auto mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </>
  );
};
