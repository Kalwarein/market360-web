import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container-pro relative section-pad text-center">
        {eyebrow && <span className="eyebrow mx-auto">{eyebrow}</span>}
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
