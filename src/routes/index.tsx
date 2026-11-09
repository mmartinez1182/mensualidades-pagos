import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Car,
  Check,
  ChevronDown,
  Fuel,
  Shield,
  Wrench,
  FileText,
  Landmark,
  ParkingCircle,
  Settings,
  CalendarDays,
  Wallet,
  Tag,
  Layers,
  ClipboardList,
  MapPin,
  Gauge,
  RotateCcw,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carPickup from "@/assets/car-pickup.jpg";
import { illustrativeMonthly } from "@/lib/mensualidad";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "¿Cuánto quieres pagar al mes? | Seminuevos.com" },
      {
        name: "description",
        content:
          "Entiende qué puede cambiar tu mensualidad, organiza tu presupuesto y explora autos en Seminuevos.com México.",
      },
      { property: "og:title", content: "¿Cuánto quieres pagar al mes? | Seminuevos.com" },
      {
        property: "og:description",
        content: "Guía educativa para entender mensualidades y pagos de un auto antes de elegirlo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const mxn = (n: number) =>
  "$" + Math.round(n).toLocaleString("es-MX", { maximumFractionDigits: 0 });

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-red transition hover:brightness-110";
const btnGhost =
  "inline-flex items-center gap-2 rounded-full border border-ink/20 bg-background px-7 py-4 text-sm font-bold text-ink transition hover:border-ink";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a class="flex-shrink-0" aria-label="Seminuevos.com — Ir a la página principal" href="/"><svg viewBox="0 0 265 36" xmlns="http://www.w3.org/2000/svg" class="h-6 md:h-7"><g fill="#FF385C" fill-rule="nonzero"><path d="M17.897 35.3c-7.663 0-14.436-4.993-16.71-12.36-.1-.346-.198-.692-.297-1.087a15.973 15.973 0 01-.494-4.054v-.1h.098c.149-.049 3.165-1.483 4.796-1.878a15.942 15.942 0 013.758-.445h.346c1.928 0 3.807-.494 5.488-1.335.444-.247.89-.494 1.334-.791a12.55 12.55 0 003.708-3.856l.149-.248.099-.197.148-.248c.494-.939.89-1.928 1.137-3.015a11.256 11.256 0 00-2.521-.445c-.396-.05-.742-.05-1.039-.05a12.587 12.587 0 00-8.602 3.412c-1.137 1.087-2.077 2.323-2.72 3.757l-.049.05h-.05a21.005 21.005 0 00-4.3 1.038c-.396.148-.792.296-1.088.445l-.248.099.05-.248c.099-.395.198-.741.297-1.038C3.906 3.956 12.904-1.285 21.853.791c.395.099.79.198 1.137.297 1.285.395 2.521.94 3.658 1.582.05.05.1.05-.148 2.027a17.016 17.016 0 01-.593 3.164c-.396 1.236-.89 2.423-1.533 3.51l-.05.1-.049.098a11.964 11.964 0 00-1.582 5.34c0 .296-.05.593-.05.84s0 .544.05.84a13.123 13.123 0 001.632 5.439 12.158 12.158 0 002.224 2.818c4.45-4.252 5.192-11.075 1.73-16.216l-.049-.05v-.05c.544-1.384.99-2.768 1.236-4.251.05-.396.1-.742.149-1.187l.05-.247.197.198c.247.247.544.494.791.791a17.428 17.428 0 010 23.83l-.791.791c-.989.94-2.077 1.78-3.263 2.472H26.5a23.806 23.806 0 01-4.104-3.263c-.79-.89-1.532-1.83-2.125-2.818l-.05-.148-.099-.198-.148-.247c-.94-1.533-2.225-2.818-3.708-3.857a12.942 12.942 0 00-6.872-2.125h-.346c-1.138 0-2.275.197-3.412.494.198.89.495 1.73.89 2.521a12.529 12.529 0 0011.322 7.12c.297 0 .643 0 1.038-.05h.05l.05.05a22.11 22.11 0 002.965 3.115c.347.296.693.543 1.039.84l.198.148-.248.05c-.346.099-.741.198-1.137.296-1.236.297-2.57.445-3.906.445zM53.643 33.125c-1.632 0-3.214-.148-4.796-.544a12.322 12.322 0 01-3.856-1.73c-1.088-.742-1.978-1.681-2.571-2.818a8.723 8.723 0 01-.989-4.005h7.96c.05.94.544 1.83 1.335 2.373.94.544 2.027.791 3.114.742a9.6 9.6 0 001.187-.1c.396-.049.742-.197 1.088-.395.296-.148.593-.395.79-.692.199-.296.347-.643.297-1.038 0-.346-.098-.692-.346-.989a2.388 2.388 0 00-.988-.692c-.495-.247-1.039-.396-1.583-.544-.642-.148-1.334-.346-2.175-.544-1.088-.247-2.225-.593-3.411-.989a12.34 12.34 0 01-3.164-1.483 7.447 7.447 0 01-2.324-2.323c-.643-1.088-.94-2.275-.84-3.51a7.51 7.51 0 01.89-3.857c.543-1.038 1.384-1.928 2.372-2.62 1.039-.693 2.225-1.187 3.51-1.484 1.385-.296 2.819-.494 4.253-.445 1.334 0 2.67.149 3.955.445a9.847 9.847 0 013.411 1.434c.989.643 1.78 1.533 2.373 2.522.643 1.137.94 2.422.94 3.708H56.41a2.697 2.697 0 00-.988-1.73c-.693-.495-1.533-.693-2.374-.643a3.701 3.701 0 00-2.076.494c-.494.247-.791.791-.791 1.335 0 .395.148.741.395.989.347.296.742.494 1.187.642.643.198 1.285.396 1.978.495.79.148 1.68.346 2.67.593 1.087.247 2.175.593 3.262.989 1.039.346 1.978.89 2.819 1.532a7.209 7.209 0 012.027 2.374c.543 1.087.79 2.323.79 3.56.05 1.334-.296 2.67-.89 3.856A8.27 8.27 0 0161.95 30.8c-1.088.791-2.324 1.335-3.61 1.681-1.68.445-3.164.643-4.696.643zM76.632 32.977c-1.433 0-2.867-.248-4.251-.742-1.236-.445-2.324-1.186-3.263-2.076-.94-.89-1.632-1.978-2.126-3.165a11.259 11.259 0 01-.742-4.004c0-1.385.247-2.72.742-4.005a10.55 10.55 0 012.076-3.214c.89-.939 1.978-1.631 3.214-2.125 2.57-.99 5.438-1.039 8.009-.05 1.137.445 2.126 1.088 3.016 1.879a9.328 9.328 0 012.57 4.004c.545 1.681.792 3.461.742 5.241H73.172a5.097 5.097 0 001.186 2.62c.692.643 1.582.99 2.522.94 1.087.099 2.126-.445 2.62-1.434h6.773c-.247.89-.642 1.73-1.236 2.472-.642.84-1.483 1.533-2.373 2.077-.84.543-1.78.988-2.768 1.236-1.039.247-2.176.395-3.264.346zM76.534 17.6c-.84-.05-1.681.296-2.275.89a5.16 5.16 0 00-1.137 2.472h6.526c-.099-.89-.445-1.78-1.038-2.472-.544-.544-1.285-.89-2.076-.89zM88.4 13.547h6.674v2.818h.099c.593-1.039 1.433-1.879 2.422-2.522a6.476 6.476 0 013.56-.89c1.137-.05 2.274.297 3.263.89a5.593 5.593 0 012.126 2.423h.099c.642-1.137 1.631-2.027 2.768-2.62 1.088-.495 2.225-.742 3.412-.693a6.34 6.34 0 013.016.594c.79.346 1.532.89 2.076 1.582.544.741.94 1.532 1.187 2.422.247.99.395 2.027.395 3.016v11.866h-7.02v-10.58a4.25 4.25 0 00-.544-2.324c-.396-.593-1.137-.94-1.879-.89-.79-.05-1.533.346-1.978 1.038-.444.791-.692 1.681-.642 2.571v10.234h-7.02v-10.63a4.25 4.25 0 00-.545-2.323c-.395-.593-1.137-.94-1.878-.89-.791-.05-1.533.346-1.978 1.038-.445.791-.692 1.681-.643 2.571v10.234h-7.02V13.547h.05zM121.92 5.933h7.02v5.29h-7.02v-5.29zm0 7.614h7.02v18.935h-7.02V13.547zM135.911 5.933h7.763l8.701 14.93h.05V5.934h7.514v26.55h-8.009l-8.405-15.03h-.05v15.03h-7.514V5.932zM175.414 32.482V30.01h-.099a7.412 7.412 0 01-2.521 2.275c-1.038.543-2.225.79-3.412.79-1.038 0-2.027-.148-2.966-.543-.791-.346-1.533-.84-2.076-1.483a5.87 5.87 0 01-1.236-2.324 10.03 10.03 0 01-.445-2.967V13.547h7.02v10.53c0 1.978.84 3.016 2.522 3.016.79.05 1.582-.296 2.125-.89.544-.692.792-1.582.742-2.472V13.547h7.02v18.935h-6.674zM194.201 32.977c-1.433 0-2.867-.248-4.251-.742-1.236-.445-2.324-1.186-3.263-2.076-.94-.89-1.632-1.978-2.126-3.165a11.183 11.183 0 010-8.009 10.55 10.55 0 012.076-3.214c.89-.939 1.978-1.631 3.214-2.125 2.57-.99 5.438-1.039 8.01-.05 1.136.445 2.125 1.088 3.015 1.879a9.328 9.328 0 012.57 4.004c.545 1.681.792 3.461.742 5.241h-13.497a5.097 5.097 0 001.187 2.62c.692.643 1.582.99 2.521.94 1.088.099 2.126-.445 2.62-1.434h6.774c-.247.89-.643 1.73-1.236 2.472a7.997 7.997 0 01-2.373 2.077c-.84.543-1.78.988-2.769 1.236-1.038.247-2.126.395-3.214.346zm-.148-15.376a2.84 2.84 0 00-2.225.89 5.16 5.16 0 00-1.137 2.472h6.576c-.1-.89-.445-1.78-1.038-2.472-.594-.544-1.335-.89-2.176-.89zM203.694 13.547h7.268l2.175 7.267c.099.495.247.99.396 1.533l.395 1.483c.1.495.247 1.038.396 1.582h.05c.098-.494.246-1.038.395-1.582l.395-1.483c.149-.544.297-1.038.445-1.533l2.176-7.267h7.07l-6.527 18.935h-8.207l-6.427-18.935zM234.743 33.076c-1.484 0-2.917-.248-4.302-.742a10.208 10.208 0 01-3.263-2.077c-.89-.89-1.631-1.977-2.076-3.164-.99-2.57-.99-5.438 0-7.96.988-2.422 2.917-4.35 5.34-5.29a12.133 12.133 0 018.552 0 9.288 9.288 0 015.29 5.29c.99 2.571.99 5.39 0 8.01a8.396 8.396 0 01-2.076 3.164 8.76 8.76 0 01-3.263 2.076c-1.285.445-2.72.693-4.202.693zm-.05-4.697c1.038.05 1.978-.544 2.472-1.483.593-1.187.89-2.522.791-3.857.05-1.335-.198-2.67-.79-3.856a2.619 2.619 0 00-2.473-1.483c-1.038-.05-1.978.543-2.422 1.483-.594 1.186-.841 2.521-.792 3.856-.049 1.335.198 2.67.792 3.857.444.939 1.384 1.532 2.422 1.483zM255.26 33.125a16.78 16.78 0 01-3.856-.445c-1.088-.247-2.077-.692-3.016-1.285-.84-.544-1.483-1.286-1.978-2.126-.494-.89-.692-1.88-.692-2.917h6.724c0 .692.297 1.335.791 1.829.593.445 1.335.692 2.077.643.593 0 1.186-.1 1.73-.396.445-.247.742-.741.692-1.236a1.35 1.35 0 00-.395-.94 2.616 2.616 0 00-1.038-.543c-.495-.148-.99-.247-1.484-.346l-1.78-.297c-.79-.099-1.582-.296-2.422-.494a7.353 7.353 0 01-2.225-.94 4.715 4.715 0 01-1.631-1.78c-.445-.89-.693-1.878-.643-2.916 0-.89.198-1.78.692-2.571a6.361 6.361 0 011.879-1.928c.84-.544 1.78-.94 2.768-1.138a14.808 14.808 0 013.313-.395c2.867 0 5.092.494 6.575 1.533 1.484.988 2.374 2.57 2.423 4.35h-6.625c0-.593-.346-1.087-.84-1.384-.495-.198-.99-.346-1.533-.297-.495 0-.94.1-1.384.297-.396.198-.643.593-.594 1.038 0 .247.1.495.297.643.247.198.544.346.84.445.396.148.84.198 1.236.297.495.098.99.148 1.533.247.89.099 1.78.296 2.67.494.89.198 1.73.544 2.521.989a5.686 5.686 0 011.879 1.879c.544.989.791 2.076.742 3.164a5.052 5.052 0 01-.742 2.917 5.973 5.973 0 01-1.978 2.027c-.89.544-1.928.94-2.966 1.186-1.137.297-2.373.396-3.56.396z"></path></g></svg></a>
        <nav className="hidden gap-7 text-sm font-semibold text-muted-foreground md:flex">
          <a href="#basico" className="hover:text-ink">Mensualidad</a>
          <a href="#simulador" className="hover:text-ink">Simulador</a>
          <a href="#presupuesto" className="hover:text-ink">Presupuesto</a>
          <a href="#preguntas" className="hover:text-ink">Preguntas</a>
          <a href="#autos" className="hover:text-ink">Autos</a>
        </nav>
        <a href="#autos" className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-ink-foreground">
          Explorar autos
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const tags = [
    { t: "Precio del auto", c: "left-0 top-6" },
    { t: "Pago inicial", c: "right-4 top-0 [animation-delay:1s]" },
    { t: "Número de meses", c: "-left-4 bottom-10 [animation-delay:2s]" },
    { t: "Monto pendiente", c: "right-0 bottom-20 [animation-delay:.5s]" },
    { t: "Otros costos", c: "left-1/3 -bottom-4 [animation-delay:1.5s]" },
  ];
  return (
    <section className="relative overflow-hidden bg-surface">
      <img
        src={heroCar}
        alt="Auto seminuevo plateado parcialmente visible"
        width={1600}
        height={1008}
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-60 md:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>Guía de pagos Seminuevos.com</Eyebrow>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] text-ink md:text-7xl">
            ¿Cuánto quieres pagar al mes?
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Entender tus pagos puede ayudarte a tomar una mejor decisión antes de elegir un auto.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#basico" className={btnPrimary}>
              Entender mis pagos <ArrowDown className="h-4 w-4" />
            </a>
            <a href="#autos" className={btnGhost}>
              Explorar autos
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center lg:col-span-5">
          <div className="relative px-6 py-14">
            {tags.map((x) => (
              <span
                key={x.t}
                className={`tag-float absolute z-10 hidden whitespace-nowrap rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-ink shadow-card sm:inline-block ${x.c}`}
              >
                {x.t}
              </span>
            ))}
            <div className="rounded-[2rem] bg-background p-8 shadow-card md:p-10">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                Ejemplo de mensualidad
              </span>
              <p className="mt-5 text-6xl font-extrabold tracking-tighter text-primary md:text-7xl">
                $X,XXX
              </p>
              <p className="text-2xl font-bold text-ink">/ mes</p>
              <p className="mt-6 text-xs text-muted-foreground">Ejemplo únicamente informativo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Basics() {
  const steps = ["Precio del auto", "Pago inicial", "Monto pendiente", "Número de meses", "Mensualidad"];
  return (
    <section id="basico" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="01 · Mensualidad"
            title="Empecemos por lo básico"
            text="Una mensualidad es el pago periódico que realizas durante un periodo determinado."
          />
          <p className="mt-4 max-w-xl text-muted-foreground">
            El monto puede cambiar dependiendo del precio del vehículo, cuánto pagues inicialmente, el
            número de meses y las condiciones aplicables.
          </p>
        </div>
        <ol className="flex flex-col items-stretch gap-2">
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={s} className="flex flex-col items-center">
                <div
                  className={`flex w-full items-center justify-between rounded-2xl px-6 py-4 font-bold ${
                    last ? "bg-primary text-primary-foreground shadow-red" : "bg-surface text-ink"
                  }`}
                >
                  <span className="text-sm uppercase tracking-wider">{s}</span>
                  <span className="text-xs opacity-60">0{i + 1}</span>
                </div>
                {!last && <ArrowDown className="my-1 h-4 w-4 text-muted-foreground" />}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Factors() {
  const cards = [
    { i: Tag, t: "Precio del auto", d: "Un vehículo con un precio mayor puede implicar pagos más altos." },
    { i: Wallet, t: "Pago inicial", d: "Pagar una cantidad mayor al inicio puede reducir el monto pendiente." },
    {
      i: CalendarDays,
      t: "Número de meses",
      d: "Dividir los pagos en más meses puede reducir el pago mensual.",
      n: "Pero pagar durante más tiempo puede aumentar el costo total.",
    },
    { i: Layers, t: "Costos adicionales", d: "Pueden existir conceptos adicionales que modifiquen el pago." },
    { i: Settings, t: "Condiciones del plan", d: "Las condiciones pueden cambiar según el dealer, agencia o institución." },
  ];
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="02 · Qué la modifica" title="No todas las mensualidades se calculan igual" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {cards.map(({ i: Icon, t, d, n }) => (
            <div key={t} className="flex flex-col rounded-3xl bg-background p-7 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-extrabold text-ink">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              {n && <p className="mt-3 rounded-xl bg-accent p-3 text-xs font-semibold text-accent-foreground">{n}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pills<T extends string | number>({
  options,
  value,
  onChange,
  label,
}: {
  options: { v: T; l: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={String(o.v)}
          role="radio"
          aria-checked={value === o.v}
          onClick={() => onChange(o.v)}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
            value === o.v ? "bg-ink text-ink-foreground" : "bg-surface text-ink hover:bg-border"
          }`}
        >
          {o.l}
        </button>
      ))}
    </div>
  );
}

function Simulator() {
  const [price, setPrice] = useState(350000);
  const [down, setDown] = useState<"bajo" | "medio" | "alto">("medio");
  const [months, setMonths] = useState(48);
  const monthly = useMemo(() => illustrativeMonthly(price, down, months), [price, down, months]);
  return (
    <section id="simulador" className="mx-auto max-w-7xl px-5 py-24">
      <SectionTitle
        eyebrow="03 · Juega con tu mensualidad"
        title="Mira cómo pueden cambiar tus pagos"
        text="Mueve los controles y observa cómo cambia el escenario."
      />
      <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-border lg:grid-cols-2">
        <div className="space-y-10 p-8 md:p-12">
          <div>
            <div className="flex items-baseline justify-between">
              <label htmlFor="price" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Precio del auto
              </label>
              <span className="text-xl font-extrabold text-ink">{mxn(price)}</span>
            </div>
            <input
              id="price"
              type="range"
              min={150000}
              max={900000}
              step={10000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-4 w-full accent-primary"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Pago inicial</p>
            <Pills
              label="Pago inicial"
              value={down}
              onChange={setDown}
              options={[
                { v: "bajo", l: "Bajo" },
                { v: "medio", l: "Medio" },
                { v: "alto", l: "Alto" },
              ]}
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Número de meses</p>
            <Pills
              label="Número de meses"
              value={months}
              onChange={setMonths}
              options={[24, 36, 48, 60].map((m) => ({ v: m, l: `${m}` }))}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-ink p-8 text-ink-foreground md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest opacity-70">Mensualidad estimada</p>
          <p className="mt-3 text-6xl font-extrabold tracking-tighter md:text-7xl" aria-live="polite">
            {mxn(monthly)}
            <span className="text-2xl font-bold opacity-70"> / mes</span>
          </p>
          <p className="mt-8 rounded-2xl bg-ink-foreground/10 p-4 text-sm">
            Ejemplo educativo. Los pagos reales dependen de las condiciones ofrecidas por el vendedor o
            institución correspondiente.
          </p>
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  const s = [
    { k: "A", t: "Pago inicial mayor", m: "Potencialmente menor", time: "Medio", bar: "w-1/2" },
    { k: "B", t: "Más meses", m: "Potencialmente menor", time: "Mayor", bar: "w-full", n: "Más meses pueden aumentar el costo total." },
    { k: "C", t: "Menos meses", m: "Potencialmente mayor", time: "Menor", bar: "w-1/4" },
  ];
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="04 · Mismo auto" title="El mismo auto puede tener pagos muy diferentes" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {s.map((x) => (
            <article key={x.k} className="overflow-hidden rounded-3xl bg-background shadow-card">
              <img src={carSedan} alt="Mismo auto en distinto escenario de pagos" loading="lazy" width={1024} height={768} className="aspect-[16/10] w-full object-cover" />
              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Escenario {x.k}</span>
                <h3 className="mt-2 text-2xl font-extrabold text-ink">{x.t}</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border pb-3">
                    <dt className="text-muted-foreground">Pago mensual</dt>
                    <dd className="font-bold text-ink">{x.m}</dd>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Tiempo</dt>
                      <dd className="font-bold text-ink">{x.time}</dd>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-surface">
                      <div className={`h-2 rounded-full bg-secondary ${x.bar}`} />
                    </div>
                  </div>
                </dl>
                {x.n && <p className="mt-5 text-xs font-semibold text-primary">{x.n}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const col = (t: string, items: string[], dark?: boolean) => (
    <div className={`rounded-3xl p-8 md:p-10 ${dark ? "bg-ink text-ink-foreground" : "bg-surface text-ink"}`}>
      <h3 className="text-2xl font-extrabold">{t}</h3>
      <p className="mt-2 text-sm opacity-70">Puede implicar:</p>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-3 font-semibold">
            <Check className="h-5 w-5 text-secondary" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionTitle eyebrow="05 · No mires solo la mensualidad" title="Un pago mensual bajo no siempre significa pagar menos" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {col("Mensualidad menor", ["Más meses", "Menor pago cada mes", "Más tiempo pagando"])}
        {col("Mensualidad mayor", ["Menos meses", "Mayor pago mensual", "Terminar de pagar antes"], true)}
      </div>
      <p className="mt-10 rounded-3xl border-2 border-primary p-8 text-center text-2xl font-extrabold text-ink md:text-3xl">
        Compara el pago mensual y también el total que terminarás pagando.
      </p>
    </section>
  );
}

function Budget() {
  const [monthly, setMonthly] = useState<string | null>(null);
  const [initial, setInitial] = useState<string | null>(null);
  const opt = (list: string[], v: string | null, set: (s: string) => void, label: string) => (
    <div role="radiogroup" aria-label={label} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((o) => (
        <button
          key={o}
          role="radio"
          aria-checked={v === o}
          onClick={() => set(o)}
          className={`rounded-2xl border-2 px-5 py-5 text-left font-bold transition ${
            v === o ? "border-primary bg-primary/5 text-primary" : "border-border bg-background text-ink hover:border-ink/40"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
  return (
    <section id="presupuesto" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle
          eyebrow="06 · Cuánto puedo pagar"
          title="Empieza por tu presupuesto"
          text="Antes de elegir un auto, piensa cuánto puedes pagar cómodamente cada mes."
        />
        <div className="mt-10">
          {opt(["Menos de $5,000", "$5,000 – $8,000", "$8,000 – $12,000", "$12,000 – $18,000", "Más de $18,000"], monthly, setMonthly, "Pago mensual cómodo")}
        </div>
        {monthly && (
          <div className="mt-12">
            <h3 className="text-xl font-extrabold text-ink">¿Cuánto podrías pagar inicialmente?</h3>
            <div className="mt-5">
              {opt(["Aún no lo sé", "Hasta $50,000", "$50,000 – $100,000", "Más de $100,000"], initial, setInitial, "Pago inicial")}
            </div>
          </div>
        )}
        {monthly && initial && (
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-background p-8 shadow-card md:flex-row md:items-center">
            <div>
              <p className="text-sm text-muted-foreground">Tu referencia</p>
              <p className="text-lg font-extrabold text-ink">
                {monthly} al mes · {initial} inicial
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Usa estas respuestas como referencia para organizar tu presupuesto.
              </p>
            </div>
            <a href="#autos" className={btnPrimary}>
              Explorar autos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function OtherCosts() {
  const items = [
    { i: Wallet, t: "Mensualidad" },
    { i: Shield, t: "Seguro" },
    { i: Fuel, t: "Combustible" },
    { i: Wrench, t: "Mantenimiento" },
    { i: Car, t: "Servicios" },
    { i: FileText, t: "Trámites" },
    { i: Landmark, t: "Impuestos aplicables" },
    { i: ParkingCircle, t: "Estacionamiento" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionTitle eyebrow="07 · Otros pagos" title="La mensualidad no es el único gasto" />
      <div className="relative mt-12 grid items-center gap-8 lg:grid-cols-3">
        <div className="grid grid-cols-2 gap-4 lg:col-span-1">
          {items.slice(0, 4).map(({ i: Icon, t }) => (
            <div key={t} className="rounded-2xl bg-surface p-5">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm font-bold text-ink">{t}</p>
            </div>
          ))}
        </div>
        <img src={carSuv} alt="Auto con gastos alrededor" loading="lazy" width={1024} height={768} className="mx-auto w-full max-w-md rounded-3xl" />
        <div className="grid grid-cols-2 gap-4">
          {items.slice(4).map(({ i: Icon, t }) => (
            <div key={t} className="rounded-2xl bg-surface p-5">
              <Icon className="h-5 w-5 text-secondary" />
              <p className="mt-3 text-sm font-bold text-ink">{t}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-lg font-semibold text-ink">
        Considera estos gastos dentro de tu presupuesto mensual.
      </p>
      <p className="text-center text-sm text-muted-foreground">
        No todos los gastos aplican igual para cada persona.
      </p>
    </section>
  );
}

function CostCalculator() {
  const fields = ["Mensualidad", "Combustible", "Seguro", "Mantenimiento estimado", "Otros"];
  const [vals, setVals] = useState<Record<string, string>>({});
  const total = fields.reduce((a, f) => a + (Number(vals[f]) || 0), 0);
  return (
    <section className="bg-ink py-24 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">08 · Presupuesto mensual</span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">¿Cuánto te costará tener el auto cada mes?</h2>
          <p className="mt-4 opacity-70">Esta herramienta sirve únicamente para organizar tu presupuesto.</p>
          <div className="mt-10 rounded-3xl bg-ink-foreground/10 p-8">
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Total mensual estimado</p>
            <p className="mt-2 text-6xl font-extrabold tracking-tighter" aria-live="polite">{mxn(total)}</p>
          </div>
        </div>
        <div className="space-y-4">
          {fields.map((f) => (
            <label key={f} className="flex items-center justify-between gap-4 rounded-2xl bg-background px-5 py-4 text-ink">
              <span className="font-bold">{f}</span>
              <span className="flex items-center gap-1">
                <span className="text-muted-foreground">$</span>
                <input
                  type="number"
                  min={0}
                  inputMode="numeric"
                  placeholder="0"
                  value={vals[f] ?? ""}
                  onChange={(e) => setVals({ ...vals, [f]: e.target.value })}
                  className="w-32 bg-transparent text-right text-lg font-bold outline-none"
                  aria-label={f}
                />
              </span>
            </label>
          ))}
          <button onClick={() => setVals({})} className="inline-flex items-center gap-2 text-sm font-semibold opacity-70 hover:opacity-100">
            <RotateCcw className="h-4 w-4" /> Limpiar
          </button>
        </div>
      </div>
    </section>
  );
}

function Questions() {
  const q = [
    "¿Cuánto pagaré cada mes?",
    "¿Durante cuántos meses?",
    "¿Cuánto debo pagar inicialmente?",
    "¿Existen otros pagos adicionales?",
    "¿Cuánto terminaré pagando en total?",
    "¿Puedo adelantar pagos?",
    "¿Qué sucede si me atraso?",
  ];
  return (
    <section id="preguntas" className="mx-auto max-w-7xl px-5 py-24">
      <SectionTitle eyebrow="09 · Pregunta al dealer" title="Pregunta esto antes de decidir" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {q.map((t, i) => (
          <div key={t} className="rounded-3xl border border-border p-7 transition hover:border-primary hover:shadow-card">
            <span className="text-4xl font-extrabold text-primary">0{i + 1}</span>
            <p className="mt-4 text-lg font-bold text-ink">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Myths() {
  const cards = [
    { s: "Mientras menor sea la mensualidad, mejor.", r: "MITO", d: "También debes considerar cuánto tiempo pagarás y el costo total." },
    { s: "Pagar más al inicio puede reducir el monto pendiente.", r: "REALIDAD", d: "Un pago inicial mayor deja menos monto por pagar después." },
    { s: "El mismo auto siempre tendrá la misma mensualidad.", r: "MITO", d: "Los pagos pueden variar según las condiciones aplicables." },
    { s: "Debo considerar otros gastos además del pago mensual.", r: "REALIDAD", d: "Seguro, combustible, mantenimiento y otros gastos también forman parte de tu presupuesto." },
  ];
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="10 · Mito o realidad" title="Mensualidades: mito o realidad" text="Toca cada tarjeta para descubrir la respuesta." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => {
            const o = open[i];
            const myth = c.r === "MITO";
            return (
              <button
                key={i}
                onClick={() => setOpen({ ...open, [i]: !o })}
                aria-expanded={!!o}
                className={`min-h-52 rounded-3xl p-8 text-left transition ${
                  o ? (myth ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground") : "bg-background text-ink shadow-card"
                }`}
              >
                {o ? (
                  <>
                    <span className="text-3xl font-extrabold">{c.r}</span>
                    <p className="mt-4 text-lg font-semibold">{c.d}</p>
                  </>
                ) : (
                  <>
                    <p className="text-2xl font-extrabold">“{c.s}”</p>
                    <p className="mt-6 text-sm font-bold text-primary">¿Mito o realidad? →</p>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Checklist() {
  const items = [
    "Sé cuánto puedo pagar al mes",
    "Sé cuánto puedo pagar inicialmente",
    "Revisé durante cuántos meses pagaré",
    "Pregunté si existen pagos adicionales",
    "Calculé mis gastos mensuales del auto",
    "Revisé cuánto pagaré en total",
    "Pregunté si puedo adelantar pagos",
    "Comparé más de una opción",
  ];
  const [done, setDone] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    const n = new Set(done);
    n.has(i) ? n.delete(i) : n.add(i);
    setDone(n);
  };
  return (
    <section className="mx-auto max-w-4xl px-5 py-24">
      <SectionTitle eyebrow="11 · Checklist" title="Antes de elegir una mensualidad" />
      <div className="mt-10">
        <div className="flex items-center justify-between text-sm font-bold text-ink">
          <span className="flex items-center gap-2"><ClipboardList className="h-4 w-4 text-primary" /> Progreso</span>
          <span>{done.size} de {items.length} revisados</span>
        </div>
        <div className="mt-3 h-3 rounded-full bg-surface">
          <div className="h-3 rounded-full bg-primary transition-all" style={{ width: `${(done.size / items.length) * 100}%` }} />
        </div>
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((t, i) => {
          const on = done.has(i);
          return (
            <li key={t}>
              <button
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(i)}
                className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left font-semibold transition ${
                  on ? "border-secondary bg-accent text-accent-foreground" : "border-border text-ink"
                }`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 ${on ? "border-secondary bg-secondary text-secondary-foreground" : "border-border"}`}>
                  {on && <Check className="h-4 w-4" />}
                </span>
                {t}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const cars = [
  { img: carSuv, brand: "Toyota", model: "Highlander XLE", year: 2022, price: 689000, km: "38,500 km", loc: "Monterrey, NL", dealer: "Agencia Norte Motors" },
  { img: carSedan, brand: "Toyota", model: "Corolla LE", year: 2021, price: 309000, km: "45,200 km", loc: "CDMX", dealer: "Autos del Valle" },
  { img: carPickup, brand: "Chevrolet", model: "Silverado RST", year: 2020, price: 615000, km: "62,000 km", loc: "Guadalajara, Jal", dealer: "Dealer Occidente" },
  { img: carSedan, brand: "Toyota", model: "Corolla SE", year: 2023, price: 368000, km: "18,900 km", loc: "Puebla, Pue", dealer: "Seminuevos Angelópolis" },
  { img: carSuv, brand: "Toyota", model: "Highlander LE", year: 2021, price: 599000, km: "51,300 km", loc: "Querétaro, Qro", dealer: "Agencia Bajío" },
];

function CarMeta({ c }: { c: (typeof cars)[number] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
      <span className="flex items-center gap-1"><Gauge className="h-3.5 w-3.5" />{c.km}</span>
      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{c.loc}</span>
      <span>{c.dealer}</span>
    </div>
  );
}

function Explore() {
  const main = cars[0]!;
  const rest = cars.slice(1);
  return (
    <section id="autos" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="12 · Explorar autos"
          title="Ahora encuentra un auto que vaya con tu presupuesto"
          text="Explora vehículos publicados por agencias y dealers en Seminuevos.com."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {["Precio", "Marca", "Año", "Tipo de auto", "Ubicación"].map((f) => (
            <button key={f} className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-ink hover:border-ink">
              {f} <ChevronDown className="h-4 w-4" />
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl bg-background shadow-card">
            <img src={main.img} alt={`${main.brand} ${main.model}`} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
            <div className="p-8">
              <p className="text-sm font-bold text-muted-foreground">{main.brand} · {main.year}</p>
              <h3 className="text-3xl font-extrabold text-ink">{main.model}</h3>
              <p className="mt-2 text-2xl font-extrabold text-primary">{mxn(main.price)}</p>
              <CarMeta c={main} />
              <a href="#" className={`${btnPrimary} mt-6`}>Ver auto <ArrowRight className="h-4 w-4" /></a>
            </div>
          </article>
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((c) => (
              <article key={c.model + c.year} className="flex flex-col overflow-hidden rounded-3xl bg-background shadow-card">
                <img src={c.img} alt={`${c.brand} ${c.model}`} loading="lazy" width={1024} height={768} className="aspect-[16/10] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold text-muted-foreground">{c.brand} · {c.year}</p>
                  <h3 className="font-extrabold text-ink">{c.model}</h3>
                  <p className="font-extrabold text-primary">{mxn(c.price)}</p>
                  <CarMeta c={c} />
                  <a href="#" className="mt-4 text-sm font-bold text-ink underline-offset-4 hover:underline">Ver auto →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <a href="#" className={btnGhost}>Ver todos los autos <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    ["¿Qué es una mensualidad?", "Es el pago periódico que realizas durante un periodo determinado."],
    ["¿Qué puede hacer que mi mensualidad cambie?", "El precio del vehículo, el pago inicial, el número de meses y las condiciones aplicables pueden modificarla."],
    ["¿Una mensualidad más baja siempre conviene?", "No necesariamente. También debes considerar cuánto tiempo pagarás y cuánto terminarás pagando en total."],
    ["¿Pagar más al inicio puede reducir mi mensualidad?", "Puede reducir el monto pendiente y eso puede influir en los pagos posteriores."],
    ["¿Debo considerar otros gastos además de la mensualidad?", "Sí. Seguro, combustible, mantenimiento y otros gastos relacionados con el auto también pueden formar parte de tu presupuesto."],
    ["¿Seminuevos.com determina las mensualidades?", "No. Seminuevos.com es un portal de anuncios. Las condiciones de pago son establecidas por el dealer, agencia o institución correspondiente."],
  ];
  return (
    <section className="mx-auto max-w-4xl px-5 py-24">
      <SectionTitle eyebrow="FAQ" title="Preguntas frecuentes sobre mensualidades y pagos" />
      <div className="mt-10 divide-y divide-border border-y border-border">
        {faqs.map(([q, a]) => (
          <details key={q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink">
              {q}
              <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 pb-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-primary px-8 py-20 text-center text-primary-foreground shadow-red">
        <h2 className="text-4xl font-extrabold md:text-6xl">Entiende tus pagos.<br />Encuentra tu auto.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg opacity-90">Explora vehículos publicados por agencias y dealers en Seminuevos.com.</p>
        <a href="#autos" className="mt-9 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 font-bold text-primary">
          Explorar autos <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-6 text-sm opacity-80">Consulta directamente con el vendedor las condiciones de pago disponibles.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <p className="text-xl font-extrabold">seminuevos<span className="text-primary">.com</span></p>
          <nav className="flex flex-wrap gap-6 text-sm opacity-80">
            {["Autos", "Camionetas", "Pickups", "Vender mi auto", "Agencias", "Ayuda"].map((l) => (
              <a key={l} href="#" className="hover:opacity-100">{l}</a>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-ink-foreground/15 pt-8 text-xs leading-relaxed opacity-60">
          Seminuevos.com es un portal de anuncios. No determina mensualidades, pagos, condiciones, plazos ni
          montos iniciales. La información presentada en esta página tiene fines educativos.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Basics />
        <Factors />
        <Simulator />
        <Scenarios />
        <Compare />
        <Budget />
        <OtherCosts />
        <CostCalculator />
        <Questions />
        <Myths />
        <Checklist />
        <Explore />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
