export function Partner() {
  return (
    <section
      id="partner"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#0f285f_0%,#1e3a8a_60%,#f59e0b_180%)] px-8 py-12 text-white shadow-[0_40px_120px_rgba(15,23,42,0.18)] sm:px-10 lg:px-14 lg:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/70">
          Partner
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              We welcome partnerships with supermarkets, retailers, and
              distributors seeking dependable wholesale suppliers.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-white/80">
            <p>
              Maglangit is positioned to support long-term business
              relationships with organizations that value continuity, responsive
              supply, and wholesale reliability.
            </p>
            <a
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-[var(--color-primary)] transition hover:bg-[#f8fafc]"
              href="#contact"
            >
              Start a Partnership Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
