"use client";

import { Browser, Play, UserPlus } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    n: "01",
    title: "Kayıt ol",
    body: "E-posta ile bir hesap aç. Kart gerekmez.",
    Icon: UserPlus,
  },
  {
    n: "02",
    title: "Tarayıcıyı aç",
    body: "Uygulama yok. Chrome, Safari, Edge yeter.",
    Icon: Browser,
  },
  {
    n: "03",
    title: "Oynamaya başla",
    body: "Kütüphaneden seç, 10 saniye içinde içindesin.",
    Icon: Play,
  },
];

export function HowItWorks() {
  return (
    <section id="kurulum" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="hero-title text-3xl text-white md:text-5xl">
            3 ADIM. <span className="hero-title-accent">O KADAR.</span>
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <li className="glow-card-white flex h-full min-h-[240px] flex-col justify-between rounded-lg bg-surface p-7 lg:p-8">
                <div className="flex items-center justify-between">
                  <step.Icon
                    size={32}
                    weight="duotone"
                    className="text-accent-bright"
                  />
                  <span className="font-mono text-sm text-white/70">
                    {step.n}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-white/80">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
