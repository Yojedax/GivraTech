import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={clsx(
      "rounded-2xl border p-6",
      hover && "hover:border-neon/20 transition-all duration-300 hover:shadow-card-hover",
      className
    )}
    style={{
      background: 'var(--surface-2)',
      borderColor: 'var(--border-light)',
    }}>
      {children}
    </div>
  );
}
