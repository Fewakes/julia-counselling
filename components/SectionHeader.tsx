type Props = {
  eyebrow: string;
  title: string;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, className = "" }: Props) {
  return (
    <div className={className}>
      <p className="text-sm uppercase tracking-wide text-sky-800 dark:text-sky-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-sky-500 to-cyan-400 dark:from-sky-400 dark:to-cyan-300 rounded-full mt-2" />
    </div>
  );
}
