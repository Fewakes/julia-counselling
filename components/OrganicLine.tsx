export default function OrganicLine({ className = "" }: { className?: string }) {
  return (
    <svg className={`organic-line ${className}`} viewBox="0 0 720 180" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 122C69 122 60 42 131 42c55 0 50 91 108 91 53 0 56-83 112-83 50 0 53 92 111 92 51 0 59-62 105-62 47 0 57 45 150 45" />
      <circle cx="3" cy="122" r="3" />
      <circle cx="717" cy="125" r="3" />
    </svg>
  );
}
