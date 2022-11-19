type Props = {
  tags: string[];
};

export function Tags({ tags }: Props) {
  return (
    <div className="inline-flex gap-2 h-fit">
      {tags.map((tag) => (
        <span key={tag} className="hover:underline font-normal text-red-900">
          #{tag}
        </span>
      ))}
    </div>
  );
}
