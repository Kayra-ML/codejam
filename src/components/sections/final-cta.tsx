import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="glow-card-white relative mx-auto max-w-[1400px] overflow-hidden rounded-xl px-6 py-16 text-center lg:px-16 lg:py-24">
        <Image
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-canvas/55" />
        <div className="relative">
          <h2 className="hero-title mx-auto max-w-[16ch] text-3xl text-white md:text-5xl md:leading-[1.1]">
            HEMEN <span className="hero-title-accent">BASLA.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[36ch] text-base text-white/85">
            Kart yok. Kuyruk yok. Tarayıcıyı aç, oyna.
          </p>
          <div className="mt-8">
            <Button href="#fiyatlar">Ücretsiz Başla</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
