"use client";

import { DarkButton } from "@/app/components/molecules/dark-button";
import { useMemo } from "react";

type ActivityDay = {
  date: Date;
  count: number;
  xp: number;
};

function generateActivityData(): ActivityDay[] {
  const days: ActivityDay[] = [];
  const today = new Date();
  // go back 52 weeks (364 days)
  const start = new Date(today);
  start.setDate(start.getDate() - 363);

  for (let i = 0; i < 364; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);

    // simulate realistic activity — sparse with occasional bursts
    const rand = Math.random();
    let count = 0;
    if (rand > 0.65) count = Math.floor(Math.random() * 3) + 1;
    if (rand > 0.88) count = Math.floor(Math.random() * 5) + 3;
    if (rand > 0.97) count = Math.floor(Math.random() * 4) + 7;

    days.push({ date, count, xp: count * 10 });
  }
  return days;
}

function getIntensity(count: number): string {
  if (count === 0) return "empty";
  if (count <= 2) return "low";
  if (count <= 5) return "mid";
  if (count <= 9) return "high";
  return "max";
}

const MONTHS = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
//const DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function ActivityHistory() {
  const data = useMemo(() => generateActivityData(), []);

  // group into weeks (columns of 7)
  const weeks: ActivityDay[][] = [];
  // align start to Sunday
  const firstDay = data[0].date.getDay(); // 0=Sun
  const paddingDays: null[] = Array(firstDay).fill(null);

  const allCells: (ActivityDay | null)[] = [
    ...(paddingDays as unknown as (ActivityDay | null)[]),
    ...data,
  ];
  for (let i = 0; i < allCells.length; i += 7) {
    weeks.push(allCells.slice(i, i + 7) as ActivityDay[]);
  }

  // month labels — find first week of each month
  const monthLabels: { index: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const firstReal = week.find((d) => d !== null);
    if (firstReal) {
      const m = firstReal.date.getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ index: wi, label: MONTHS[m] });
        lastMonth = m;
      }
    }
  });

  //const totalXP = data.reduce((acc, d) => acc + d.xp, 0);
  //const totalDays = data.filter((d) => d.count > 0).length;

  return (
    <section className="w-full rounded-xl mt-5 ">
      <header className=" py-2 flex items-center justify-between">
        <h2 className="text-zinc-600 text-lg">Histórico de Actividades</h2>
        <div className="flex items-center gap-4">
          <DarkButton className="text-white">Obter XP</DarkButton>
        </div>
      </header>

      <div className="mt-4 overflow-x-auto pb-2">
        <div className="inline-flex flex-col gap-0 min-w-max">
          {/* Month labels */}
          <div className="flex mb-1 ml-8">
            {weeks.map((_, wi) => {
              const label = monthLabels.find((m) => m.index === wi);
              return (
                <div
                  key={wi}
                  className="w-3.25 mr-0.5 text-[12px] text-zinc-600 font-mono"
                >
                  {label ? label.label : ""}
                </div>
              );
            })}
          </div>

          {/* Grid: day-of-week rows */}
          <div className="flex gap-0">
            {/* Day labels */}
            {/* Weeks */}
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.5 mr-0.5">
                {Array.from({ length: 7 }).map((_, di) => {
                  const cell = week[di] ?? null;
                  if (!cell) {
                    return (
                      <div
                        key={di}
                        className="size-3.5 rounded-xs bg-transparent"
                      />
                    );
                  }
                  const intensity = getIntensity(cell.count);
                  return (
                    <div
                      key={di}
                      title={`${cell.date.toLocaleDateString("pt-PT")} · ${cell.count} actividades · ${cell.xp} XP`}
                      className={[
                        "size-5 rounded-xs cursor-pointer transition-all duration-100 hover:ring-1 hover:ring-white/30",
                        intensity === "empty" &&
                          "bg-zinc-900 border border-zinc-800",
                        intensity === "low" &&
                          "bg-base-design/60 border border-base-design/40",
                        intensity === "mid" &&
                          "bg-base-design/70 border border-base-design/40",
                        intensity === "high" &&
                          "bg-base-design/80 border border-base-design/40",
                        intensity === "max" &&
                          "bg-base-design border border-base-design/60",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Legend */}
          {/* <div className="flex items-center gap-2 mt-3 ml-8">
            <span className="text-[10px] text-zinc-600 font-mono">Menos</span>
            {[
              "bg-zinc-900 border border-zinc-800",
              "bg-emerald-900/60",
              "bg-emerald-700/70",
              "bg-emerald-500/80",
              "bg-emerald-400",
            ].map((cls, i) => (
              <div
                key={i}
                className={`w-[11px] h-[11px] rounded-[2px] ${cls}`}
              />
            ))}
            <span className="text-[10px] text-zinc-600 font-mono">Mais</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
