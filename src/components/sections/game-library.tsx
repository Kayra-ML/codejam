"use client";

import { Play } from "@phosphor-icons/react";
import { useState } from "react";
import Image from "next/image";
import { games, genres } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

const PAGE_SIZE = 12;

export function GameLibrary() {
  const [active, setActive] = useState<(typeof genres)[number]>("Tümü");
  const [expanded, setExpanded] = useState(false);
  const filtered =
    active === "Tümü" ? games : games.filter((game) => game.genre === active);
  const visible = expanded ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = filtered.length > PAGE_SIZE;

  return (
    <section id="oyunlar" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="hero-title text-3xl text-white md:text-5xl">
            500+ OYUN{" "}
            <span className="hero-title-accent">TEK TIK UZAGINDA</span>
          </h2>
        </Reveal>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => {
                setActive(genre);
                setExpanded(false);
              }}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === genre
                  ? "bg-accent text-ink"
                  : "border border-white/10 text-muted hover:border-white/25 hover:text-ink",
              )}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {visible.map((game) => (
            <article key={game.id} className="group relative">
              <div className="glow-card relative aspect-[2/3] overflow-hidden rounded-lg">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-canvas/90 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-medium">
                    <Play size={11} weight="fill" />
                    Oynat
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-sm font-medium text-white">
                {game.title}
              </h3>
              <p className="text-xs text-faint">{game.genre}</p>
            </article>
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex min-w-[200px] items-center justify-center rounded-md border border-white/85 bg-black/35 px-7 py-3.5 text-[13px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-canvas active:scale-[0.98]"
            >
              {expanded ? "Daha az" : "Daha fazlası"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
