"use client";

import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="hero-title text-3xl text-white md:text-5xl">
            OYUNCULAR <span className="hero-title-accent">NE DIYOR.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.07}>
              <blockquote className="glow-card-white flex h-full flex-col justify-between rounded-lg bg-surface p-6 lg:p-8">
                <p className="text-base leading-relaxed text-ink">
                  “{item.quote}”
                </p>
                <footer className="mt-8">
                  <cite className="not-italic text-sm font-medium">
                    {item.name}
                  </cite>
                  <p className="text-xs text-faint">{item.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
