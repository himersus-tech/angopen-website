import { DarkButton } from "@/app/components/molecules/dark-button";
import { ActivityHistory } from "../components/activity-history";
import { BaseButton } from "@/app/components/molecules/base-button";
import { posts } from "../types";
import FeedPost from "../components/feed-post";
import { RiCopperDiamondFill } from "@remixicon/react";
import { useState } from "react";

interface contribution {
  lastCommit: string;
  type: "pull_request" | "issue" | "commit";
  date: Date;
  repository: string;
  link: string;
  xp: number;
}

const getXPColor = (xp: number) => {
  if (xp < 50) return { text: "text-orange-300", from: "from-orange-100/10" };
  if (xp >= 50 && xp < 100)
    return { text: "text-green-400", from: "from-green-100/10" };
  if (xp >= 100) return { text: "text-amber-400", from: "from-amber-100/10" };
  return { text: "text-green-300", from: "from-green-100/10" };
};

const ContributionItem = ({ contribution }: { contribution: contribution }) => {
  const [, setIsHovered] = useState(false);
  const colors = getXPColor(contribution.xp);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-4 relative flex flex-col border border-zinc-900 items-start gap-3 rounded-xl bg-linear-to-r to-transparent ${colors.from}`}
    >
      <div className="flex items-center gap-3">
        <div>
          <RiCopperDiamondFill className={colors.text} />
        </div>
        <div>
          <h4 className="text-white text-sm line-clamp-1 font-semibold">
            {contribution.lastCommit}
          </h4>
          <p className="text-zinc-500 text-sm">
            {contribution.type === "pull_request"
              ? "Pull Request"
              : contribution.type === "issue"
                ? "Issue"
                : "Commit"}{" "}
            · <span className={colors.text}>{contribution.xp} XP</span>
          </p>
        </div>
      </div>

      <div className="flex w-full border-t pt-2 border-white/10 items-center justify-between">
        <p className="text-sm text-white font-medium truncate">
          {contribution.repository}
        </p>
        <p className="text-xs line-clamp-1 text-zinc-400 mb-1">
          {contribution.date.toLocaleDateString("pt-PT")}
        </p>
      </div>
    </div>
  );
};

const contributions: contribution[] = [
  {
    lastCommit: "Fix bug in user authentication flow",
    type: "pull_request",
    date: new Date("2026-04-15T14:30:00Z"),
    repository: "dravo",
    link: "https://github.com/mariosalembe/dravo/pull/42",
    xp: 50,
  },
  {
    lastCommit: "Add new feature for real-time notifications",
    type: "pull_request",
    date: new Date("2026-04-10T10:15:00Z"),
    repository: "dravo",
    link: "https://github.com/mariosalembe/dravo/pull/42",
    xp: 80,
  },
  {
    lastCommit: "Improve documentation for API endpoints",
    type: "issue",
    date: new Date("2026-04-05T08:00:00Z"),
    repository: "dravo",
    link: "https://github.com/mariosalembe/dravo/issues/42",
    xp: 20,
  },
  {
    lastCommit: "Fix bug in user authentication flow",
    type: "pull_request",
    date: new Date("2026-04-15T14:30:00Z"),
    repository: "dravo",
    link: "https://github.com/mariosalembe/dravo/pull/42",
    xp: 50,
  },
  {
    lastCommit: "Add new feature for real-time notifications",
    type: "pull_request",
    date: new Date("2026-04-10T10:15:00Z"),
    repository: "dravo",
    link: "https://github.com/mariosalembe/dravo/pull/42",
    xp: 180,
  },
  {
    lastCommit: "Fix bug in user authentication flow",
    type: "pull_request",
    date: new Date("2026-04-15T14:30:00Z"),
    repository: "dravo",
    link: "https://github.com/mariosalembe/dravo/pull/42",
    xp: 50,
  },
  {
    lastCommit: "Add new feature for real-time notifications",
    type: "pull_request",
    date: new Date("2026-04-10T10:15:00Z"),
    repository: "dravo",
    link: "https://github.com/mariosalembe/dravo/pull/42",
    xp: 80,
  },
   {
    lastCommit: "Add new feature for real-time notifications",
    type: "pull_request",
    date: new Date("2026-04-10T10:15:00Z"),
    repository: "dravo",
    link: "https://github.com/mariosalembe/dravo/pull/42",
    xp: 80,
  },
];

export default function DashboardPage() {
  return (
    <div className="w-[90%] pb-20 mx-auto pt-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="size-14 rounded-full bg-white"></div>
          <div>
            <h1 className="text-white text-2xl font-semibold">Mário Salembe</h1>
            <p className="text-zinc-500">Senior Frontend Developer | Master</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <DarkButton className="text-white">Editar Perfil</DarkButton>
          <BaseButton>Perfil Público</BaseButton>
        </div>
      </header>
      <section className="w-full pt-5 mt-5 border-t border-zinc-900">
        <ActivityHistory />
      </section>

      <section className="mt-16">
        <header className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">
            Feeds & Atividades
          </h3>
          <DarkButton>Ver Tudo</DarkButton>
        </header>
        <div className="grid mt-8 grid-cols-1 ret:grid-cols-2 pot:grid-cols-3 gap-5">
          {posts.slice(0, 3).map((post, index) => (
            <FeedPost
              key={index}
              post={{
                ...post,
                index,
              }}
            />
          ))}
        </div>
      </section>
      <section className="mt-20">
        <header className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">
            Histórico de Contributo
          </h3>
          <DarkButton>Ver Tudo</DarkButton>
        </header>
        <div className="grid mt-8 grid-cols-4 gap-3">
          {contributions.map((contribution, index) => (
            <ContributionItem key={index} contribution={contribution} />
          ))}
        </div>
      </section>
    </div>
  );
}
