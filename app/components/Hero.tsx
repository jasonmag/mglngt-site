const navigation = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Partner", href: "#partner" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,58,138,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.18),_transparent_35%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-6 border-b border-[var(--color-line)] pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Maglangit Wholesale Trading
            </p>
            <h2 className="mt-3 max-w-md text-lg font-semibold text-[var(--color-ink)]">
              Maglangit Non-Specialized Wholesale Trading
            </h2>
          </div>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="rounded-full border border-transparent px-3 py-2 transition hover:border-[var(--color-line-strong)] hover:bg-white/70 hover:text-[var(--color-ink)]"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-line-strong)] bg-white/80 px-4 py-2 text-sm text-[var(--color-muted)] shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              Wholesale solutions for supermarkets and retailers
            </div>
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
                Preferred supplier of beauty and wellness products
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-balance text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
                Preferred Supplier of Beauty &amp; Wellness Products
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                Supporting supermarkets and retailers with reliable wholesale
                supply solutions.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-4 text-base font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
                href="#partner"
              >
                Partner With Us
              </a>
              <a
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/80 px-7 py-4 text-base font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">
                Supply priorities
              </p>
              <ul className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] sm:grid-cols-2">
                <li className="rounded-3xl bg-[var(--color-surface)] p-5">
                  Consistent product availability
                </li>
                <li className="rounded-3xl bg-[var(--color-surface)] p-5">
                  Competitive wholesale pricing
                </li>
                <li className="rounded-3xl bg-[var(--color-surface)] p-5">
                  Dependable distribution support
                </li>
                <li className="rounded-3xl bg-[var(--color-surface)] p-5">
                  Long-term retail partnerships
                </li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-primary)] p-6 text-white">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">
                  Focus
                </p>
                <p className="mt-4 text-2xl font-semibold">Beauty</p>
              </div>
              <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-accent)] p-6 text-[#2d2100]">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6a4a00]">
                  Focus
                </p>
                <p className="mt-4 text-2xl font-semibold">Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
