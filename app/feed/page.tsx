"use client";

import React, { useState } from "react";
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
import DashboardPage from "./pages/dashboard-page";
import FeedPage from "./pages/feed-page";
import { AnimatePresence, motion } from "framer-motion";

interface NavigationItem {
  section: string;
  items: {
    name: string;
    icon: React.ReactNode;
    tab: TabPage;
  }[];
}

const navigationItems: NavigationItem[] = [
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

type TabPage =
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

const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 10 }}
            exit={{ opacity: 0, x: 5 }}
            className="absolute left-full ml-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-white text-xs rounded-md whitespace-nowrap z-100 pointer-events-none"
          >
            {text}
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-zinc-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabPage>("dashboard");

  const renderTab = () => {
    switch (activeTab) {
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
    <div className="h-dvh w-full grid grid-cols-[72px_1fr]">
      <header className="h-full sticky left-0 top-0 right-0 border-r border-zinc-900/60 flex flex-col items-center">
        <div className="h-16 w-full flex items-center justify-center border-b border-zinc-900/60">
          <LogoComponent size={6} />
        </div>
        <nav className="flex flex-col pt-5 gap-6 w-full items-center">
          {navigationItems.map((section) => (
            <div
              key={section.section}
              className="flex first:border-none first:pt-0 pt-4 border-t border-zinc-900/60 flex-col gap-3 w-full items-center"
            >
              <div className="flex gap-2 flex-col items-center">
                {section.items.map((item) => (
                  <Tooltip key={item.name} text={item.name}>
                    <button
                      onClick={() => setActiveTab(item.tab)}
                      className={`relative flex cursor-pointer items-center justify-center size-11 transition-all rounded-xl ${
                        activeTab === item.tab
                          ? "text-black"
                          : "hover:bg-zinc-900/60 text-zinc-500 hover:text-white"
                      }`}
                    >
                      {activeTab === item.tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-base-design rounded-xl z-0"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <div className="relative z-10 flex items-center justify-center">
                        {item.icon &&
                          React.cloneElement(
                            item.icon as React.ReactElement<{
                              className?: string;
                            }>,
                            {
                              className: `size-5 ${
                                activeTab === item.tab
                                  ? "text-black"
                                  : "text-zinc-500"
                              }`,
                            },
                          )}
                      </div>
                    </button>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </header>
      <main className="h-full overflow-y-auto">
        <header className="top-0 bg-zinc-950 backdrop-blur-2xl z-50 w-full px-5 sticky left-0 right-0 flex items-center justify-between border-b border-zinc-900/60 h-16">
          <div>
            <h2 className="text-white text-lg font-semibold">
              {navigationItems
                .flatMap((section) => section.items)
                .find((item) => item.tab === activeTab)?.name || "Dashboard"}
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
              <p className="text-black text-sm font-semibold">Ma</p>
            </div>
          </div>
        </header>

        {/* POSTS SECTIONS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
