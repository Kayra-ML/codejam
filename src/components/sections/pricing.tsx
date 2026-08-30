"use client";

import { Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { plans } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="fiyatlar" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="hero-title text-3xl text-white md:text-5xl">
            3 PLAN. <span className="hero-title-accent">NET FIYAT.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <article
                className={cn(
                  "glow-card-white flex h-full flex-col rounded-lg p-7 lg:p-8",
                  plan.featured ? "bg-accent/20" : "bg-surface",
                )}
              >
                <p className="text-sm font-medium tracking-[0.16em] text-white/70 uppercase">
                  {plan.name}
                </p>
                <p className="mt-4 flex items-end gap-2">
                  <span className="hero-title text-5xl text-white">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-white/60">
                    {plan.period}
                  </span>
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white"
                    >
                      <Check
                        size={16}
                        weight="bold"
                        className="shrink-0 text-accent-bright"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#top"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
