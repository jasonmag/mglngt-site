const productCategories = [
  "Skincare Products",
  "Hair Care Products",
  "Personal Hygiene",
  "Beauty Essentials",
  "Wellness Products",
  "Household Personal Care",
];

export function Products() {
  return (
    <section id="products" className="bg-[var(--color-surface)]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Products
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl">
              Core product categories built for daily retail movement
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">
            Our wholesale range supports supermarkets and retailers looking for
            dependable access to beauty, personal care, and wellness inventory.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category, index) => (
            <article
              key={category}
              className="group rounded-[1.75rem] border border-[var(--color-line)] bg-white p-7 transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_60px_rgba(30,58,138,0.08)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-strong)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                {category}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
