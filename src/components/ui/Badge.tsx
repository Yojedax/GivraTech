import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neon" | "green" | "amber" | "blue" | "gray" | "red";
  size?: "sm" | "md";
}

const variants = {
  neon:  "border-cyan-500/20",
  green: "border-green-500/20",
  amber: "border-amber-500/20",
  blue:  "border-blue-500/20",
  gray:  "border-gray-500/20",
  red:   "border-red-500/20",
};

const bgColors: Record<string, React.CSSProperties> = {
  neon:  { background: 'rgba(0,212,255,0.12)', color: '#00d4ff' },
  green: { background: 'rgba(34,197,94,0.12)', color: '#4ade80' },
  amber: { background: 'rgba(234,179,8,0.12)', color: '#facc15' },
  blue:  { background: 'rgba(59,130,246,0.12)', color: '#60a5fa' },
  gray:  { background: 'rgba(255,255,255,0.06)', color: '#8892a8' },
  red:   { background: 'rgba(239,68,68,0.12)', color: '#f87171' },
};

export function Badge({ children, variant = "gray", size = "sm" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center font-medium border rounded-full",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        variants[variant]
      )}
      style={bgColors[variant]}
    >
      {children}
    </span>
  );
}
