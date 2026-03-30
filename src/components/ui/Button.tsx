import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200",
        variant === "primary"   && "text-surface-0 hover:shadow-neon hover:-translate-y-0.5",
        variant === "secondary" && "border hover:border-neon/40",
        variant === "ghost"     && "hover:bg-white/5",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        className
      )}
      style={{
        ...(variant === "primary" ? { background: 'var(--neon)', color: 'var(--surface-0)' } : {}),
        ...(variant === "secondary" ? { borderColor: 'var(--border-light)', color: 'var(--neon)' } : {}),
        ...(variant === "ghost" ? { color: 'var(--neon)' } : {}),
      }}
      {...props}
    >
      {children}
    </button>
  );
}
