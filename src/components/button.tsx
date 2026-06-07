export function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="font-bold p-4 w-full bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white rounded hover:opacity-90 transition-opacity"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
