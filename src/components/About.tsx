"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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
  prompt: "text-blue-400",
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
    <div ref={ref} className="overflow-hidden rounded-xl border border-card-border bg-[#0c1222] shadow-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs font-mono text-white/40">terminal</span>
      </div>
      <div className="h-[340px] overflow-hidden p-5 font-mono text-[13px] leading-relaxed sm:h-[360px] sm:text-[15px]">
        {introLines.slice(0, introVisible).map((line, i) => renderLine(line, i))}
        {introVisible >= introLines.length &&
          loopLines.slice(0, loopVisible).map((line, i) => renderLine(line, i + introLines.length))}
        {isInView && (
          <span className="inline-block h-4 w-2 animate-pulse bg-blue-400" />
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          About Me
        </h2>
        <span className="mt-5 block h-1 w-16 rounded-full bg-accent" />
      </motion.div>

      <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <p className="text-lg leading-relaxed text-muted lg:text-xl">
            I&apos;m a fourth-year Computer Science student at the University of
            Toronto. I&apos;m passionate about backend engineering and full-stack
            development, building software that scales and solves real problems.
          </p>
          <p className="text-lg leading-relaxed text-muted lg:text-xl">
            Currently, I&apos;m working as a Software Developer Intern at RBC on
            the U.S. Cash Management team, building Java Spring Boot
            microservices for high-volume corporate payment processing. Previously,
            I interned at Traveltical and Appy.yo. I&apos;m always looking to
            gain more experience as a software engineer and take on new challenges.
          </p>
          <p className="text-lg leading-relaxed text-muted lg:text-xl">
            My long-term goal is to move to the United States and work as a
            software engineer where I can make a real impact, building products
            that people actually use every day.
          </p>

          <TerminalBlock />

          <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:gap-12">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">
                  {item.label}
                </p>
                <p className="mt-2 whitespace-nowrap text-base text-muted">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative h-80 w-full overflow-hidden rounded-xl border-2 border-card-border shadow-lg sm:h-96 lg:h-[480px] lg:w-96">
            <Image
              src="/images/city_view.png"
              alt="Toronto skyline"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
