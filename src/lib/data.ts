export type Game = {
  id: string;
  title: string;
  genre: "Aksiyon" | "RPG" | "Spor" | "Battle Royale";
  image: string;
};

function steamCover(appId: number) {
  return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/library_600x900.jpg`;
}

export const games: Game[] = [
  {
    id: "cyberpunk",
    title: "Cyberpunk 2077",
    genre: "RPG",
    image: steamCover(1091500),
  },
  {
    id: "elden",
    title: "Elden Ring",
    genre: "RPG",
    image: steamCover(1245620),
  },
  {
    id: "gtav",
    title: "Grand Theft Auto V",
    genre: "Aksiyon",
    image: steamCover(271590),
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    genre: "Aksiyon",
    image: steamCover(1174180),
  },
  {
    id: "witcher",
    title: "The Witcher 3",
    genre: "RPG",
    image: steamCover(292030),
  },
  {
    id: "apex",
    title: "Apex Legends",
    genre: "Battle Royale",
    image: steamCover(1172470),
  },
  {
    id: "fifa",
    title: "EA Sports FC 25",
    genre: "Spor",
    image: steamCover(2669320),
  },
  {
    id: "cod",
    title: "Call of Duty",
    genre: "Aksiyon",
    image: steamCover(2519060),
  },
  {
    id: "cs2",
    title: "Counter-Strike 2",
    genre: "Aksiyon",
    image: steamCover(730),
  },
  {
    id: "bg3",
    title: "Baldur's Gate 3",
    genre: "RPG",
    image: steamCover(1086940),
  },
  {
    id: "gow",
    title: "God of War",
    genre: "Aksiyon",
    image: steamCover(1593500),
  },
  {
    id: "hogwarts",
    title: "Hogwarts Legacy",
    genre: "RPG",
    image: steamCover(990080),
  },
  {
    id: "wukong",
    title: "Black Myth: Wukong",
    genre: "Aksiyon",
    image: steamCover(2358720),
  },
  {
    id: "spiderman",
    title: "Marvel's Spider-Man",
    genre: "Aksiyon",
    image: steamCover(1817070),
  },
  {
    id: "pubg",
    title: "PUBG",
    genre: "Battle Royale",
    image: steamCover(578080),
  },
  {
    id: "rocket",
    title: "Rocket League",
    genre: "Spor",
    image: steamCover(252950),
  },
  {
    id: "palworld",
    title: "Palworld",
    genre: "Aksiyon",
    image: steamCover(1623730),
  },
  {
    id: "sekiro",
    title: "Sekiro",
    genre: "Aksiyon",
    image: steamCover(814380),
  },
];

export const genres = ["Tümü", "Aksiyon", "RPG", "Spor", "Battle Royale"] as const;

export const testimonials = [
  {
    quote:
      "Telefonda Elden Ring oynadım. Ciddi söylüyorum, gecikme hissetmedim.",
    name: "Deniz Kaya",
    role: "Oyuncu, İstanbul",
  },
  {
    quote:
      "Laptopum 2019 model. Zscript Cloud ile 4K’ya çıktım, yeni kasa almadım.",
    name: "Ece Yılmaz",
    role: "Oyuncu, İzmir",
  },
  {
    quote: "Çocuklar tablette, ben televizyonda. Aynı hesap, iki oturum.",
    name: "Mert Aydın",
    role: "Aile hesabı, Ankara",
  },
];

export const plans = [
  {
    id: "lite",
    name: "Lite",
    price: "$10",
    period: "/ ay",
    featured: false,
    cta: "Lite’a Geç",
    features: [
      "720p yayın",
      "1 cihaz",
      "Standart kuyruk",
      "40+ oyun",
      "Tek oturum",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    price: "$35",
    period: "/ ay",
    featured: true,
    cta: "Plus’a Geç",
    features: [
      "2K yayın",
      "3 oturum",
      "Öncelikli kuyruk",
      "200+ oyun",
      "Bulut kayıt",
    ],
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "$60",
    period: "/ ay",
    featured: false,
    cta: "Ultra’ya Geç",
    features: [
      "4K / 60 fps",
      "4 oturum",
      "Anında giriş",
      "Tüm kütüphane",
      "Bulut kayıt",
    ],
  },
];
