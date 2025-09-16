type Props = {
  eyebrow: string;
  title: string;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, className = "" }: Props) {
  return (
    <div className={className}>
      <p className="text-sm uppercase tracking-wide text-indigo-700 dark:text-indigo-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 rounded-full mt-2" />
    </div>
  );
}
