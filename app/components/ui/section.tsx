const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      {children}
    </div>
  );
};

export default Section;
