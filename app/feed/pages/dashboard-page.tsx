import { DarkButton } from "@/app/components/molecules/dark-button";
import { ActivityHistory } from "../components/activity-history";
import { BaseButton } from "@/app/components/molecules/base-button";
import { posts } from "../types";
import FeedPost from "../components/feed-post";
import { RiGitCommitLine } from "@remixicon/react";

interface contribution {
  lastCommit: string;
  type: "pull_request" | "issue" | "commit";
  date: Date;
  repository: string;
  link: string;
  xp: number;
}

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
          <h3 className="text-3xl font-semibold text-white">
            Feeds & Atividades
          </h3>
          <DarkButton>Ver Tudo</DarkButton>
        </header>
        <div className="grid mt-8 grid-cols-2 gap-5">
          {posts.slice(0, 2).map((post, index) => (
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
          <h3 className="text-3xl font-semibold text-white">
            Histórico de Contributo
          </h3>
          <BaseButton>Ver Tudo</BaseButton>
        </header>
        <div className="grid mt-8 grid-cols-1  bg-zinc-900/30 border border-zinc-900 rounded-2xl">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="flex py-4 px-5 not-last:border-b border-zinc-900 items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <p className="flex text-white text-sm items-center gap-3 line-clamp-1">
                  <RiGitCommitLine className="text-zinc-500" />
                </p>
                <div>
                  <p className="text-white">{contribution.lastCommit}</p>
                  <p className="text-zinc-500 text-xs">
                    {contribution.repository}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-brand pot:font-semibold text-sm">
                  +{contribution.xp} XP
                </p>
                {contribution.type === "pull_request" ? (
                  <p className="bg-brand/10 text-xs text-brand rounded-full px-3 py-1">
                    Pull Request
                  </p>
                ) : contribution.type === "issue" ? (
                  <p className="bg-red-500/10 text-xs text-red-500 rounded-full px-3 py-1">
                    Issue
                  </p>
                ) : (
                  <p className="bg-green-500/20 text-green-500 rounded-full px-3 py-1">
                    Commit
                  </p>
                )}
                <DarkButton
                  onClick={() => window.open(contribution.link, "_blank")}
                  className="text-white text-xs"
                >
                  Repositório
                </DarkButton>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
