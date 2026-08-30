import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Zscript Cloud"
            width={48}
            height={48}
            className="size-12 rounded-lg object-cover"
          />
          <span className="brand-word text-xs">Cloud</span>
        </div>
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} Zscript Cloud. Cloud gaming, tarayıcıda.
        </p>
        <nav className="flex gap-6 text-sm text-muted">
          <a href="#top" className="text-white hover:text-accent-bright">
            Ana sayfa
          </a>
          <a href="#oyunlar" className="text-white hover:text-accent-bright">
            Oyunlar
          </a>
          <a href="#fiyatlar" className="text-white hover:text-accent-bright">
            Fiyatlandırma
          </a>
          <a href="#kurulum" className="text-white hover:text-accent-bright">
            Kurulum
          </a>
        </nav>
      </div>
    </footer>
  );
}
