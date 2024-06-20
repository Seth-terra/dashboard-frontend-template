export function DashBlock({
  children,
  header,
}: {
  children?: React.ReactNode;
  header?: string;
}) {
  return (
    <div className="flex flex-col rounded-card bg-neutral-700 px-6 py-8 text-white ring-2 ring-neutral-600">
      {header && (
        <h2 className="select-none text-4xl font-bold tracking-tight font-display uppercase">
          {header}
        </h2>
      )}
      {children}
    </div>
  );
}
