const contactItems = [
  {
    label: "Email",
    value: "contact@maglangit.com",
    href: "mailto:contact@maglangit.com",
  },
  {
    label: "Phone",
    value: "To be provided",
  },
  {
    label: "Location",
    value: "City / Region",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-surface)]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl">
              Start your wholesale inquiry
            </h2>
            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">
              Reach out to discuss product categories, supply requirements, or
              partnership opportunities for your business.
            </p>
          </div>

          <div className="grid gap-4">
            {contactItems.map((item) => {
              const content = item.href ? (
                <a
                  className="text-lg font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-primary)]"
                  href={item.href}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-lg font-semibold text-[var(--color-ink)]">
                  {item.value}
                </p>
              );

              return (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_16px_36px_rgba(15,23,42,0.04)]"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">
                    {item.label}
                  </p>
                  <div className="mt-4">{content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
