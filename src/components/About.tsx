"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

type LineType = "prompt" | "command" | "blank" | "code" | "string" | "output" | "success";
interface TLine { text: string; type: LineType; }

const introLines: TLine[] = [
  { text: "~/hamed/career $ ", type: "prompt" },
  { text: "cat goals.js", type: "command" },
  { text: "", type: "blank" },
  { text: "const dream = {", type: "code" },
  { text: '  role: "Software Engineer",', type: "code" },
  { text: '  location: "New York City",', type: "string" },
  { text: '  status: "loading..."', type: "code" },
  { text: "};", type: "code" },
  { text: "", type: "blank" },
  { text: "~/hamed/career $ ", type: "prompt" },
  { text: "git add .", type: "command" },
  { text: "~/hamed/career $ ", type: "prompt" },
  { text: 'git commit -m "move to NYC"', type: "command" },
];

const loopLines: TLine[] = [
  { text: "~/hamed/career $ ", type: "prompt" },
  { text: "git push --force origin main", type: "command" },
  { text: "", type: "blank" },
  { text: "Enumerating objects: 100%", type: "output" },
  { text: "remote: Everything up to date.", type: "output" },
  { text: "Successfully pushed to: nyc/dream-job \u2713", type: "success" },
];

const INTRO_LINE_DELAY = 200;
const LOOP_LINE_DELAY = 250;
const PAUSE_BEFORE_LOOP = 10000;

const colorMap: Record<LineType, string> = {
  prompt: "text-[#ff5c73]",
  command: "text-white font-semibold",
  code: "text-slate-300",
  string: "text-yellow-300",
  output: "text-slate-400",
  success: "text-emerald-400 font-semibold",
  blank: "",
};

function TerminalBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [introVisible, setIntroVisible] = useState(0);
  const [loopVisible, setLoopVisible] = useState(0);
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let cancelled = false;

    async function sleep(ms: number) {
      return new Promise((r) => setTimeout(r, ms));
    }

    async function run() {
      for (let i = 0; i < introLines.length; i++) {
        if (cancelled) return;
        await sleep(INTRO_LINE_DELAY);
        setIntroVisible(i + 1);
      }

      while (!cancelled) {
        setLoopVisible(0);
        setLoopKey((k) => k + 1);

        for (let i = 0; i < loopLines.length; i++) {
          if (cancelled) return;
          await sleep(LOOP_LINE_DELAY);
          setLoopVisible(i + 1);
        }

        await sleep(PAUSE_BEFORE_LOOP);
      }
    }

    run();
    return () => { cancelled = true; };
  }, [isInView]);

  const renderLine = (line: TLine, i: number) => {
    if (line.type === "blank") return <div key={i} className="h-3" />;

    if (line.type === "prompt") {
      const allLines = i < introLines.length
        ? introLines
        : loopLines;
      const idx = i < introLines.length ? i : i - introLines.length;
      const next = allLines[idx + 1];
      const totalVisible = i < introLines.length ? introVisible : loopVisible;
      const showCmd = next && next.type === "command" && totalVisible > idx + 1;
      return (
        <div key={`${loopKey}-${i}`} className="flex">
          <span className={colorMap.prompt}>{line.text}</span>
          {showCmd && <span className={colorMap.command}>{next.text}</span>}
        </div>
      );
    }

    if (line.type === "command") return null;

    return (
      <div key={`${loopKey}-${i}`} className={colorMap[line.type]}>
        {line.text}
      </div>
    );
  };

  return (
    <div ref={ref} className="overflow-hidden rounded-[24px] bg-[#111111] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-white/40">~/hamed/career</span>
      </div>
      <div className="h-[340px] overflow-hidden whitespace-pre-wrap p-5 font-mono text-[13px] leading-relaxed sm:h-[360px] sm:text-[15px]">
        {introLines.slice(0, introVisible).map((line, i) => renderLine(line, i))}
        {introVisible >= introLines.length &&
          loopLines.slice(0, loopVisible).map((line, i) => renderLine(line, i + introLines.length))}
        {isInView && (
          <span className="inline-block h-4 w-2 animate-pulse bg-[#ff5c73]" />
        )}
      </div>
    </div>
  );
}

const contactInfo = [
  { label: "Email", value: "hamed.dawoudzai@mail.utoronto.ca" },
  { label: "Phone", value: "647-510-6214" },
  { label: "Location", value: "Toronto, Ontario" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <SectionHeading eyebrow="01 — About" title="A little" highlight="about me" />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_380px] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-xl leading-relaxed text-foreground lg:text-2xl lg:leading-snug">
            I&apos;m a fourth-year Computer Science student at the University of
            Toronto, passionate about backend engineering and full-stack
            development: building software that scales and solves real problems.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Right now I&apos;m a Software Engineer Intern at{" "}
            <span className="font-semibold text-accent">Pinterest</span>, and in
            January 2027 I&apos;m joining Squarepoint Capital. Before that I was at
            RBC on the U.S. Cash Management team, building Java Spring Boot
            microservices for high-volume corporate payment processing, and I
            interned at Traveltical and Appy.yo.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            My long-term goal is to move to the United States and work as a
            software engineer where I can make a real impact, building products
            that people actually use every day.
          </p>

          <div className="pt-2">
            <TerminalBlock />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="group relative h-80 overflow-hidden rounded-[32px] bg-surface sm:h-96 lg:h-[440px]">
            <Image
              src="/images/city_view.png"
              alt="Toronto skyline"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16">
              <p className="text-sm font-semibold text-white/80">Based in</p>
              <p className="text-2xl font-extrabold tracking-tight text-white">Toronto, Ontario</p>
            </div>
          </div>

          <div className="divide-y divide-card-border rounded-[28px] bg-surface px-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{item.label}</p>
                <p className="break-all text-right text-sm font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
