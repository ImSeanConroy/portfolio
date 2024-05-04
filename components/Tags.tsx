const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string) => (
        <p
          key={tag}
          className="font-light tracking-wide text-sm inline-flex items-center rounded-full border border-neutral-600 dark:border-neutral-200 px-3 py-0.5 transition-colors"
        >
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
