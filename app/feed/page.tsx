"use client";

import { PanelLeft } from "lucide-react";
import { LogoComponent } from "../components/atoms/logo-component";
import {
  RiAddLargeLine,
  RiBuilding3Line,
  RiCommandLine,
  RiCopperDiamondFill,
  RiGitPullRequestLine,
  RiHeart2Line,
  RiHomeSmileLine,
  RiLightbulbLine,
  RiNotificationLine,
  RiPantoneLine,
  RiSearch2Line,
  RiSettings6Line,
  RiStackedChartLine,
  RiStarSmileLine,
  RiUserSmileLine,
} from "@remixicon/react";
import { DarkButton } from "../components/molecules/dark-button";
import { useState } from "react";
import DashboardPage from "./pages/dashboard-page";
import FeedPage from "./pages/feed-page";

interface navigationItem {
  section: string;
  items: {
    name: string;
    icon: React.ReactNode;
    tab: tabPages;
  }[];
}

const navigationItems: navigationItem[] = [
  {
    section: "Geral",
    items: [
      {
        name: "Dashboard",
        icon: <RiHomeSmileLine className="size-5 text-zinc-500" />,
        tab: "dashboard",
      },
      {
        name: "Feed",
        icon: (
          <RiStackedChartLine
            className="size-5 text-zinc-500"
            strokeWidth={1}
          />
        ),
        tab: "feed",
      },
      {
        name: "Destaques",
        icon: (
          <RiStarSmileLine className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        tab: "destaques",
      },
      {
        name: "Ideias",
        icon: (
          <RiLightbulbLine className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        tab: "ideias",
      },
      {
        name: "Contribuições",
        icon: (
          <RiGitPullRequestLine
            className="size-5 text-zinc-500"
            strokeWidth={1}
          />
        ),
        tab: "contribuicoes",
      },
      {
        name: "Eventos e Atividades",
        icon: (
          <RiBuilding3Line className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        tab: "eventos",
      },
    ],
  },
  {
    section: "Perfil e Configurações",
    items: [
      {
        name: "Perfil",
        icon: <RiUserSmileLine className="size-5 text-zinc-500" />,
        tab: "perfil",
      },
      {
        name: "Favoritos",
        icon: <RiHeart2Line className="size-5 text-zinc-500" strokeWidth={1} />,
        tab: "favoritos",
      },
      {
        name: "Freelancers",
        icon: (
          <RiPantoneLine className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        tab: "freelancers",
      },
      {
        name: "Configurações",
        icon: (
          <RiSettings6Line className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        tab: "configuracoes",
      },
    ],
  },
];

type tabPages =
  | "dashboard"
  | "feed"
  | "destaques"
  | "ideias"
  | "eventos"
  | "perfil"
  | "favoritos"
  | "freelancers"
  | "configuracoes"
  | "contribuicoes";

export default function Dashboard() {
  const [tabPages, setTabPages] = useState("dashboard");

  const renderTab = () => {
    switch (tabPages) {
      case "dashboard":
        return <DashboardPage />;
      case "feed":
        return <FeedPage />;
      case "destaques":
        return <div>Destaques</div>;
      case "ideias":
        return <div>Ideias</div>;
      case "eventos":
        return <div>Eventos e Atividades</div>;
      case "perfil":
        return <div>Perfil</div>;
      case "favoritos":
        return <div>Favoritos</div>;
      case "freelancers":
        return <div>Freelancers</div>;
      case "configuracoes":
        return <div>Configurações</div>;
      default:
        return null;
    }
  };

  return (
    <div className="h-dvh w-full grid grid-cols-[20%_80%]">
      <header className="h-full sticky left-0 top-0 right-0 border-r border-zinc-900/60">
        <div className=" h-16 px-4 border-b border-zinc-900/60  flex items-center justify-between">
          <LogoComponent size={6} />
          <button>
            <PanelLeft className="size-5 text-zinc-500" strokeWidth={1} />
          </button>
        </div>
        <nav className="flex flex-col pt-5 gap-10">
          {navigationItems.map((section) => (
            <div
              key={section.section}
              className="flex first:border-none first:pt-0 pt-7 border-t border-zinc-900/60  flex-col gap-4"
            >
              <h4 className="text-zinc-500 uppercase text-xs font-semibold px-4">
                {section.section}
              </h4>
              <div className="flex -mt-1 gap-2 flex-col">
                {section.items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setTabPages(item.tab)}
                    className="flex cursor-pointer items-center gap-3 px-4 py-2 hover:bg-zinc-900/60 transition-colors rounded"
                  >
                    {item.icon}
                    <span className="text-white">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
          {/* <div className="mt-2 flex items-center justify-between rounded-lg border border-zinc-900/60 p-4 mx-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-amber-700" />
              <div>
                <h6 className="text-white line-clamp-1 text-ellipsis">
                  Mário Salembe
                </h6>
                <p className="text-zinc-500 text-sm">@msalembe</p>
              </div>
            </div>
            <div>
              <button className="  text-zinc-500 hover:text-white">
                <EllipsisVertical className="size-5" strokeWidth={1} />
              </button>
            </div>
          </div> */}
        </nav>
      </header>
      <main className="h-full overflow-y-auto">
        <header className="top-0 bg-zinc-950 backdrop-blur-2xl z-50 w-full px-5 sticky left-0 right-0 flex items-center justify-between border-b border-zinc-900/60 h-16">
          <div>
            <h2 className="text-white text-lg font-semibold">
              {navigationItems
                .flatMap((section) => section.items)
                .find((item) => item.tab === tabPages)?.name || "Dashboard"}
            </h2>
          </div>
          <div>
            <div className="w-full rounded-lg px-3 border border-zinc-900/60 flex items-center gap-3">
              <RiSearch2Line className="size-6 text-zinc-200" strokeWidth={1} />
              <input
                type="text"
                placeholder="O que você procura?"
                className="bg-transparent py-2  outline-none w-full text-white"
              />
              <p className="flex items-center gap-1 font-mono text-zinc-600">
                <RiCommandLine
                  className="size-4 text-zinc-500"
                  strokeWidth={1}
                />
                <span className="font-mono mt-1 text-zinc-500">K</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex font-mono!  items-center gap-2 py-0.5 text-white rounded-full px-2 bg-base-design/20 border border-base-design">
              <RiCopperDiamondFill
                className="size-5 text-base-design"
                strokeWidth={1}
              />
              140 XP
            </button>
            <DarkButton className="size-8 text-black border-none! bg-base-design! rounded-full! px-0! py-0">
              <RiAddLargeLine className="size-4" strokeWidth={1} />
            </DarkButton>
            <DarkButton className="size-9 text-white rounded-full! px-0! py-0">
              <RiNotificationLine className="size-5" strokeWidth={1} />
            </DarkButton>
            <div className="size-8 flex items-center justify-center rounded-full bg-white">
              <p className="text-black mt-1 text-sm font-semibold">MS</p>
            </div>
          </div>
        </header>

        {/* POSTS SECTIONS */}
        {renderTab()}
      </main>
    </div>
  );
}
