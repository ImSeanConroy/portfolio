const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="h-8 w-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      {children}
    </button>
  );
};

export default Button;
