"use client";

import {
  CloudArrowDown,
  DeviceMobileCamera,
  HardDrives,
  Lightning,
  MonitorPlay,
} from "@phosphor-icons/react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const features = [
  {
    title: "Sıfır indirme",
    body: "Oyun sunucuda durur. Sen sadece oynarsın.",
    Icon: CloudArrowDown,
    span: "lg:col-span-2",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "4K / 60 fps",
    body: "Donanımın yetmese de yayın yetiyor.",
    Icon: MonitorPlay,
    span: "",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Düşük gecikme",
    body: "Türkiye sunucuları, 20 ms altı hedef.",
    Icon: Lightning,
    span: "",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Her cihaz",
    body: "Telefon, tablet, TV, tarayıcı. Aynı hesap.",
    Icon: DeviceMobileCamera,
    span: "",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bulut kayıt",
    body: "Kaldığın yerden, hangi ekranda olursan ol.",
    Icon: HardDrives,
    span: "",
    image:
      "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=900&q=80",
  },
];

export function Features() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="hero-title max-w-[18ch] text-3xl text-white md:text-5xl">
            KONSOL ALMANA <span className="hero-title-accent">GEREK YOK.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.05}
              className={feature.span}
            >
              <article className="glow-card-white relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-lg p-6 text-center lg:min-h-[280px] lg:p-8">
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-canvas/55" />
                <div className="relative flex flex-col items-center">
                  <feature.Icon
                    size={28}
                    weight="duotone"
                    className="text-white"
                  />
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-white/85">
                    {feature.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
