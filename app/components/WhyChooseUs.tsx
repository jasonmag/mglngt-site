const strengths = [
  "Reliable Supply",
  "Competitive Wholesale Pricing",
  "Trusted Distribution",
  "Long-Term Partnerships",
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl">
            Built around consistency, pricing discipline, and dependable
            fulfillment
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {strengths.map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))]" />
              <h3 className="text-xl font-semibold text-[var(--color-ink)]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
