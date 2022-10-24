export default function ColorDot({ color }: { color: string }) {
  return (
    <div
      className={`relative inline-flex rounded-full h-3 w-3 bg-${color}`}
    ></div>
  );
}
