"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[calc(100dvh-80px)]"
    >
      <Image
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=80"
        alt="Bulut üzerinden yayınlanan bir aksiyon oyunu sahnesi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
      <div className="absolute inset-0 bg-canvas/40" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-80px)] max-w-[1400px] items-center px-5 py-16 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title max-w-[16ch] text-4xl text-white md:text-6xl lg:text-7xl">
            HER CIHAZDAN,{" "}
            <span className="hero-title-accent">ANINDA OYNA.</span>
          </h1>
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-white/85 md:text-lg">
            İndirme yok. Gecikme yok. Tarayıcıyı aç, oyuna gir.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#fiyatlar">Ücretsiz Başla</Button>
            <Button href="#kurulum" variant="secondary">
              Nasıl çalışır
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
