export default function ColorDot({ type }: { type?: "negative" | "neutral" }) {
  if (type === "negative")
    return (
      <div
        className={`relative inline-flex rounded-full h-3 w-3 bg-red-500`}
      ></div>
    );

  return (
    <div
      className={`relative inline-flex rounded-full h-3 w-3 bg-green-500`}
    ></div>
  );
}
