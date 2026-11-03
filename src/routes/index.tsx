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
        <a href="#" className="text-xl font-extrabold tracking-tight text-ink">
          seminuevos<span className="text-primary">.com</span>
        </a>
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
