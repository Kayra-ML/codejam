"use client";

import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#top", label: "Ana sayfa" },
  { href: "#oyunlar", label: "Oyunlar" },
  { href: "#fiyatlar", label: "Fiyatlandırma" },
  { href: "#kurulum", label: "Kurulum" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:h-20 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Zscript Cloud"
            width={64}
            height={64}
            className="size-14 rounded-lg object-cover lg:size-16"
          />
          <span className="brand-word text-sm">Cloud</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white transition-colors hover:text-accent-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#fiyatlar">Ücretsiz Başla</Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <div
        className={cn(
          "border-b border-white/5 bg-canvas px-5 py-4 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#fiyatlar" className="mt-2 w-full">
            Ücretsiz Başla
          </Button>
        </nav>
      </div>
    </header>
  );
}
