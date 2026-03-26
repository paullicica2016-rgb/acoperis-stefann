// ============================================================
// CONFIGURARE CENTRALIZATĂ — Montaj Acoperișuri Reparații Ștefan
// Modifică valorile de mai jos pentru a actualiza site-ul
// ============================================================

export const SITE_CONFIG = {
  name: "Montaj Acoperișuri Reparații Ștefan",
  shortName: "Acoperișuri Ștefan",
  phone: "0749 651 436",
  phoneLink: "tel:+40749651436",
  whatsapp: "https://wa.me/40749651436",
  whatsappMessage:
    "https://wa.me/40749651436?text=Bună ziua, doresc o ofertă pentru acoperișuri",
  email: "", // adaugă email dacă ai
  experience: 20,
  completedProjects: 200,
  teamSize: 10,
  counties: 6,
  discountMin: 10,
  discountMax: 20,
  workSchedule: "Luni – Sâmbătă: 07:00 – 19:00",
  copyright: `© ${new Date().getFullYear()} Montaj Acoperișuri Reparații Ștefan. Toate drepturile rezervate.`,
  anpcUrl: "https://anpc.ro/",
  salUrl: "https://ec.europa.eu/consumers/odr",
};

// ============================================================
// EmailJS — Înlocuiește cu valorile tale reale
// ============================================================
export const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID", // ex: "service_xxxxxx"
  templateId: "YOUR_TEMPLATE_ID", // ex: "template_xxxxxx"
  publicKey: "YOUR_PUBLIC_KEY", // ex: "xxxxxxxxxxxxxxx"
};

// ============================================================
// JUDEȚE ACOPERITE
// ============================================================
export const COUNTIES = [
  { county: "Hunedoara", city: "Deva" },
  { county: "Mureș", city: "Târgu-Mureș" },
  { county: "Cluj", city: "Cluj-Napoca" },
  { county: "Alba", city: "Alba Iulia" },
  { county: "Sibiu", city: "Sibiu" },
  { county: "Bistrița-Năsăud", city: "Bistrița" },
];

// ============================================================
// SERVICII
// ============================================================
export const SERVICES = [
  {
    id: "dulgherii-mansardari",
    title: "Dulgherii, Mansardări Locuibile, Terase, Foișoare",
    shortDescription:
      "Construim structuri din lemn de cea mai înaltă calitate — mansarde, terase și foișoare care adaugă valoare casei tale.",
    fullDescription:
      "Cu o experiență de peste 20 de ani, echipa noastră realizează lucrări complete de dulgherie, de la mansardări locuibile care transformă podul casei într-un spațiu funcțional și elegant, până la terase și foișoare care completează perfect orice grădină. Utilizăm lemn tratat și tehnici moderne de construcție pentru durabilitate maximă. Fiecare proiect este adaptat cerințelor și bugetului dumneavoastră.",
    icon: "hammer",
    image: "/images/gallery/lucrare-14.jpg",
    highlights: ["Mansarde locuibile", "Terase și foișoare", "Lemn tratat premium"],
  },
  {
    id: "tigla-metalica",
    title: "Montaj Țiglă Metalică BILKA & Lindab",
    shortDescription:
      "Montăm țiglă metalică premium de la producători de top — BILKA și Lindab, cu garanție extinsă.",
    fullDescription:
      "Suntem specializați în montajul țiglei metalice de la cei mai renumiți producători din România și Europa — BILKA și Lindab. Oferim o gamă completă de profile și culori, montaj profesional cu echipă proprie și garanție la lucrare. Țigla metalică este soluția ideală pentru un acoperiș durabil, estetic și ușor de întreținut. Toate accesoriile — coame, jgheaburi, burlane — sunt incluse în ofertă.",
    icon: "layers",
    image: "/images/gallery/lucrare-17.jpg",
    highlights: ["Profile BILKA & Lindab", "Garanție extinsă", "Montaj profesional"],
  },
  {
    id: "tigla-ceramica",
    title: "Montaj Țiglă Ceramică de Orice Tip",
    shortDescription:
      "Montăm orice tip de țiglă ceramică — tradiționala sau modernă, pentru un acoperiș clasic și rezistent.",
    fullDescription:
      "Țigla ceramică rămâne alegerea preferată pentru cei care doresc un acoperiș cu aspect tradițional și durabilitate excepțională. Montăm toate tipurile de țiglă ceramică — solzi, romană, Marseille sau orice alt model. Echipa noastră asigură montajul corect al fiecărei piese, respectând standardele tehnice pentru o etanșeitate perfectă și un aspect impecabil al acoperișului.",
    icon: "grid",
    image: "/images/gallery/lucrare-18.jpg",
    highlights: ["Orice model ceramic", "Aspect tradițional", "Durabilitate excepțională"],
  },
  {
    id: "accesorii",
    title: "Montaj și Reparații Accesorii",
    shortDescription:
      "Montăm și reparăm toate accesoriile de acoperiș — coame, rufouri, aerisitoare, streașină și altele.",
    fullDescription:
      "Un acoperiș complet nu înseamnă doar învelitoare — accesoriile sunt esențiale pentru funcționalitatea și protecția casei dumneavoastră. Montăm și reparăm coame, rufouri, aerisitoare, elemente de streașină, sortimente și orice alt accesoriu necesar. Lucrăm cu piese originale de la producători de încredere pentru a asigura compatibilitatea și durabilitatea fiecărui element.",
    icon: "wrench",
    image: "/images/gallery/lucrare-02.jpg",
    highlights: ["Coame și rufouri", "Aerisitoare și streașină", "Piese originale"],
  },
  {
    id: "sisteme-pluviale",
    title: "Montaj Sisteme Pluviale",
    shortDescription:
      "Instalăm sisteme complete de colectare a apei pluviale — jgheaburi, burlane și accesorii.",
    fullDescription:
      "Sistemul pluvial este vital pentru protejarea fundației și a fațadei casei. Montăm sisteme pluviale complete din tablă vopsită, zinc sau PVC — jgheaburi semicirculare sau rectangulare, burlane, coturi, pâlnii și toate accesoriile necesare. Asigurăm panta corectă pentru scurgerea eficientă a apei și fixarea solidă a tuturor elementelor pentru rezistență maximă în timp.",
    icon: "droplets",
    image: "/images/gallery/lucrare-16.jpg",
    highlights: ["Jgheaburi și burlane", "Tablă, zinc sau PVC", "Montaj la standarde"],
  },
  {
    id: "reparatii-urgenta",
    title: "Reparații Acoperișuri de Urgență",
    shortDescription:
      "Intervenim rapid pentru reparații de urgență — infiltrații, țigle sparte, acoperișuri deteriorate de furtună.",
    fullDescription:
      "Când acoperișul dumneavoastră are nevoie de intervenție urgentă — fie că este vorba de infiltrații, țigle dislocate de vânt, sau deteriorări cauzate de furtuni — echipa noastră este pregătită să intervină rapid. Evaluăm problema, oferim soluții imediate și executăm reparația în cel mai scurt timp posibil pentru a preveni daunele suplimentare. Trimiteți poze pe WhatsApp pentru o evaluare rapidă.",
    icon: "alertTriangle",
    image: "/images/gallery/lucrare-07.jpg",
    highlights: ["Intervenție rapidă", "Evaluare pe WhatsApp", "Garanție lucrări"],
  },
  {
    id: "hidroizolatii",
    title: "Hidroizolații cu Membrană Bituminoasă",
    shortDescription:
      "Aplicăm hidroizolații profesionale cu membrană bituminoasă pentru acoperișuri terasă și fundații.",
    fullDescription:
      "Hidroizolația este esențială pentru protejarea clădirii împotriva infiltrațiilor de apă. Aplicăm membrane bituminoase de înaltă calitate pe acoperișuri tip terasă, fundații, balcoane și orice suprafață care necesită impermeabilizare. Folosim tehnici profesionale de lipire cu flacără și suprapunere corectă a benzilor pentru o etanșeitate perfectă, garantată pe termen lung.",
    icon: "shield",
    image: "/images/gallery/lucrare-21.jpg",
    highlights: ["Membrană bituminoasă", "Terase și fundații", "Etanșeitate garantată"],
  },
  {
    id: "vopsim-acoperisuri",
    title: "Vopsim Acoperișuri",
    shortDescription:
      "Revitalizăm acoperișul tău cu vopsea specială — protecție anticorozivă și aspect ca nou.",
    fullDescription:
      "Dacă acoperișul dumneavoastră arată uzat sau rugina a început să apară, vopsirea profesională este soluția ideală. Folosim vopsele speciale pentru metal, rezistente la intemperii și raze UV, care oferă protecție anticorozivă pe termen lung și un aspect estetic plăcut. Pregătim suprafața prin curățare, grunduire și apoi aplicăm vopseaua în mai multe straturi pentru rezultate durabile.",
    icon: "paintBucket",
    image: "/images/gallery/lucrare-19.jpg",
    highlights: ["Protecție anticorozivă", "Vopsea rezistentă UV", "Aspect ca nou"],
  },
  {
    id: "cabane-casute-lemn",
    title: "Execuții Cabane / Căsuțe de Lemn",
    shortDescription:
      "Construim cabane și căsuțe de lemn la cheie — proiecte personalizate, materiale de calitate.",
    fullDescription:
      "Visul unei cabane sau căsuțe de lemn poate deveni realitate cu ajutorul echipei noastre. Realizăm construcții din lemn la cheie — de la proiectare și fundație până la acoperiș și finisaje. Folosim lemn tratat, selectat cu grijă, și tehnici tradiționale îmbinate cu soluții moderne. Fiecare proiect este unic și adaptat dorințelor dumneavoastră, fie că este vorba de o cabană de vacanță sau o căsuță de grădină.",
    icon: "home",
    image: "/images/gallery/lucrare-20.jpg",
    highlights: ["Construcție la cheie", "Lemn tratat selectat", "Proiecte personalizate"],
  },
];

// ============================================================
// TESTIMONIALE
// ============================================================
export const TESTIMONIALS = [
  {
    name: "Andrei M.",
    city: "Deva",
    text: "Am apelat la echipa lui Ștefan pentru montajul țiglei metalice BILKA pe casa noastră. Lucrarea a fost executată impecabil, în termenul stabilit. Prețul a fost corect și echipa foarte profesionistă. Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Maria P.",
    city: "Cluj-Napoca",
    text: "Am avut o infiltrație gravă după o furtună puternică. Am sunat și au venit a doua zi. Au reparat acoperișul rapid și eficient. Sunt foarte mulțumită de promptitudinea și calitatea lucrării.",
    rating: 5,
  },
  {
    name: "Ion D.",
    city: "Alba Iulia",
    text: "Mansardarea casei a fost un proiect mare pentru noi, dar echipa lui Ștefan a gestionat totul excelent. Spațiul mansardat arată fantastic și este perfect izolat. Lucrare impecabilă de la A la Z!",
    rating: 5,
  },
  {
    name: "Elena S.",
    city: "Sibiu",
    text: "Am ales hidroizolația cu membrană bituminoasă pentru terasa blocului. Echipa a fost punctuală, organizată și foarte atentă la detalii. Profesioniști adevărați! Nu am mai avut nicio problemă de atunci.",
    rating: 4.5,
  },
  {
    name: "Gheorghe T.",
    city: "Târgu-Mureș",
    text: "Mi-am dorit o cabană de lemn de ani de zile și în sfârșit am găsit echipa potrivită. Rezultatul a depășit toate așteptările mele. Calitatea lemnului și a execuției este excepțională. Mulțumesc!",
    rating: 5,
  },
  {
    name: "Ana R.",
    city: "Bistrița",
    text: "Am schimbat complet sistemul pluvial al casei. Jgheaburile și burlanele sunt montate perfect, totul arată foarte bine și funcționează impecabil. Preț foarte corect pentru calitatea oferită.",
    rating: 4.5,
  },
];

// ============================================================
// HERO SLIDES
// ============================================================
export const HERO_SLIDES = [
  {
    image: "/images/hero/slide1.jpg",
    title: "Acoperișuri de Calitate",
    subtitle: "20 de ani de experiență în montaj și reparații acoperișuri",
    cta: "Cere Ofertă Gratuită",
  },
  {
    image: "/images/hero/slide2.jpg",
    title: "Reducere între 10% și 20%",
    subtitle: "Profită de oferta noastră limitată — contactează-ne acum!",
    cta: "Contactează-ne",
  },
  {
    image: "/images/hero/slide3.jpg",
    title: "Lucrăm în 6 Județe",
    subtitle:
      "Hunedoara, Mureș, Cluj, Alba, Sibiu și Bistrița-Năsăud",
    cta: "Vezi Serviciile Noastre",
  },
];

// ============================================================
// IMAGINI GALERIE — înlocuiește cu pozele reale
// ============================================================
export const GALLERY_IMAGES = [
  { src: "/images/gallery/lucrare-01.jpg", alt: "Montaj țiglă metalică BILKA" },
  { src: "/images/gallery/lucrare-02.jpg", alt: "Mansardare locuibilă" },
  { src: "/images/gallery/lucrare-03.jpg", alt: "Construcție cabană de lemn" },
  { src: "/images/gallery/lucrare-04.jpg", alt: "Sistem pluvial complet" },
  { src: "/images/gallery/lucrare-05.jpg", alt: "Reparație acoperiș urgentă" },
  { src: "/images/gallery/lucrare-06.jpg", alt: "Hidroizolație membrană bituminoasă" },
  { src: "/images/gallery/lucrare-07.jpg", alt: "Montaj țiglă ceramică" },
  { src: "/images/gallery/lucrare-08.jpg", alt: "Terasă din lemn" },
  { src: "/images/gallery/lucrare-09.jpg", alt: "Vopsire acoperiș metalic" },
  { src: "/images/gallery/lucrare-10.jpg", alt: "Foișor din lemn" },
  { src: "/images/gallery/lucrare-11.jpg", alt: "Montaj accesorii acoperiș" },
  { src: "/images/gallery/lucrare-12.jpg", alt: "Dulgherie structură lemn" },
  { src: "/images/gallery/lucrare-13.jpg", alt: "Cabană de lemn finalizată" },
];

// ============================================================
// WHY CHOOSE US
// ============================================================
export const WHY_CHOOSE_US = [
  {
    icon: "building",
    title: "20 de Ani de Experiență",
    description: "Două decenii de lucrări de calitate în domeniul acoperișurilor din Transilvania.",
  },
  {
    icon: "checkCircle",
    title: "Peste 200 Lucrări Finalizate",
    description: "Sute de clienți mulțumiți și proiecte livrate la cele mai înalte standarde.",
  },
  {
    icon: "users",
    title: "10 Profesioniști",
    description: "Echipă proprie de meșteri cu experiență, dedicați fiecărui proiect.",
  },
  {
    icon: "mapPin",
    title: "6 Județe Acoperite",
    description: "Acoperim întreaga regiune a Transilvaniei — de la Deva la Bistrița.",
  },
  {
    icon: "award",
    title: "Materiale Premium",
    description: "Lucrăm cu materiale de top BILKA și Lindab pentru rezultate durabile.",
  },
  {
    icon: "shieldCheck",
    title: "Garanție la Lucrări",
    description: "Oferim garanție la toate lucrările executate pentru liniștea dumneavoastră.",
  },
  {
    icon: "messageCircle",
    title: "Consultanță Gratuită",
    description: "Consultanță gratuită și ofertă personalizată pentru fiecare proiect.",
  },
  {
    icon: "camera",
    title: "Evaluare Rapidă WhatsApp",
    description: "Trimiteți poze pe WhatsApp pentru o evaluare rapidă și o ofertă de preț.",
  },
];
