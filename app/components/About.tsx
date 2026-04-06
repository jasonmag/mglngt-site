export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl">
            Trusted wholesale support for growing retail demand
          </h2>
        </div>
        <div className="grid gap-6 text-lg leading-8 text-[var(--color-muted)]">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p>
              Maglangit Non-Specialized Wholesale Trading is a trusted supplier
              of beauty and wellness products to supermarkets and retail
              businesses.
            </p>
            <p className="mt-5">
              We focus on consistent product availability, competitive pricing,
              and dependable distribution support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
