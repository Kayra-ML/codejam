import {
  DeviceMobile,
  DeviceTablet,
  GameController,
  Monitor,
  Television,
} from "@phosphor-icons/react/ssr";
import Image from "next/image";

const platforms = [
  { label: "PC", Icon: Monitor },
  { label: "Konsol", Icon: GameController },
  { label: "TV", Icon: Television },
  { label: "Tablet", Icon: DeviceTablet },
  { label: "Telefon", Icon: DeviceMobile },
];

export function LogoWall() {
  return (
    <section className="relative overflow-hidden border-y border-accent/20 py-14">
      <Image
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-canvas/75"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium text-accent-bright">
          100+ cihazda çalışır
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {platforms.map(({ label, Icon }) => (
            <li
              key={label}
              className="glow-card flex items-center gap-2.5 rounded-full bg-canvas/70 px-4 py-2.5 text-white backdrop-blur-md"
            >
              <Icon size={22} weight="duotone" className="text-accent-bright" />
              <span className="text-sm font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
