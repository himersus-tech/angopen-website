import { EllipsisVertical, PanelLeft } from "lucide-react";
import { LogoComponent } from "../components/atoms/logo-component";
import {
  RiAddLargeLine,
  RiBuilding3Line,
  RiCommandLine,
  RiCopperDiamondFill,
  RiGitRepositoryCommitsLine,
  RiHeart2Line,
  RiHomeSmileLine,
  RiLightbulbLine,
  RiNotificationLine,
  RiPantoneLine,
  RiSearch2Line,
  RiSettings6Line,
  RiShareForwardLine,
  RiStackedChartLine,
  RiStarSmileLine,
  RiUserSmileLine,
} from "@remixicon/react";
import { DarkButton } from "../components/molecules/dark-button";
import { posts } from "./types";

const navigationItems = [
  {
    section: "Geral",
    items: [
      {
        name: "Dashboard",
        icon: <RiHomeSmileLine className="size-5 text-zinc-500" />,
        fun: () => {},
      },
      {
        name: "Feed",
        icon: (
          <RiStackedChartLine
            className="size-5 text-zinc-500"
            strokeWidth={1}
          />
        ),
        fun: () => {},
      },
      {
        name: "Destaques",
        icon: (
          <RiStarSmileLine className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        fun: () => {},
      },
      {
        name: "Ideias",
        icon: (
          <RiLightbulbLine className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        fun: () => {},
      },
      {
        name: "Eventos e Atividades",
        icon: (
          <RiBuilding3Line className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        fun: () => {},
      },
    ],
  },
  {
    section: "Perfil e Configurações",
    items: [
      {
        name: "Perfil",
        icon: <RiUserSmileLine className="size-5 text-zinc-500" />,
        fun: () => {},
      },
      {
        name: "Favoritos",
        icon: <RiHeart2Line className="size-5 text-zinc-500" strokeWidth={1} />,
        fun: () => {},
      },
      {
        name: "Freelancers",
        icon: (
          <RiPantoneLine className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        fun: () => {},
      },
      {
        name: "Configurações",
        icon: (
          <RiSettings6Line className="size-5 text-zinc-500" strokeWidth={1} />
        ),
        fun: () => {},
      },
    ],
  },
];

export default function Dashboard() {
  return (
    <div className="h-dvh w-full grid grid-cols-[20%_60%_20%]">
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
                    className="flex cursor-pointer items-center gap-3 px-4 py-2 hover:bg-zinc-900/60 transition-colors rounded"
                  >
                    {item.icon}
                    <span className="text-white">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-2 flex items-center justify-between rounded-lg border border-zinc-900/60 p-4 mx-4">
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
          </div>
        </nav>
      </header>
      <main className="h-full overflow-y-auto">
        <header className="top-0 bg-zinc-950 backdrop-blur-2xl z-50 w-full px-5 sticky left-0 right-0 flex items-center justify-between border-b border-zinc-900/60 h-16">
          <div>
            <h2 className="text-white text-lg font-semibold">Dashboard</h2>
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
            <button className="flex font-mono!  items-center gap-2 py-0.5 text-white rounded-full px-2 bg-[#9BC91D]/20 border border-[#9BC91D]">
              <RiCopperDiamondFill
                className="size-5 text-[#b7e538]"
                strokeWidth={1}
              />
              140
            </button>
            <DarkButton className="size-8 text-black bg-white! rounded-full! px-0! py-0">
              <RiAddLargeLine className="size-4" strokeWidth={1} />
            </DarkButton>
            <DarkButton className="size-9 text-white rounded-full! px-0! py-0">
              <RiNotificationLine className="size-5" strokeWidth={1} />
            </DarkButton>
          </div>
        </header>

        {/* POSTS SECTIONS */}
        <section className="grid grid-cols-1 mt-7 w-[90%] mx-auto gap-16">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border relative  rounded-xl border-zinc-900/60"
            >
              <header className="bg-zinc-900/30 rounded-t-xl border-b border-zinc-900/60 px-5 flex items-center justify-between py-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex items-start gap-4">
                    <div className="size-7 mt-1 rounded-full bg-[#b7e538]" />
                    <div>
                      <p className="text-zinc-100 text-md">
                        {post.author.username}
                      </p>
                      <p className="text-zinc-500 text-sm">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {[...post.contributors].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: item.avatar_color,
                      }}
                      className={`size-7 rounded-full border border-zinc-900/60 -ml-2`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-zinc-400 text-sm">{post.posted_at}</p>
                  <p className="bg-[#9BC91D]/20 cursor-pointer text-[#9BC91D] text-xs font-semibold px-2 py-1 rounded-full">
                    {post.tag}
                  </p>
                  <button className="text-zinc-500 transition-all hover:text-white">
                    <EllipsisVertical className="size-5 " strokeWidth={1} />
                  </button>
                </div>
              </header>
              <div className=" p-7">
                <h3 className="text-white font-semibold">{post.title}</h3>
                <p className="text-zinc-500 mt-2 text-sm">{post.description}</p>
                <div className="flex items-center justify-end">
                  <button
                    className="mt-5 
                bg-[#9BC91D]/20 text-[#9BC91D] px-4 py-2 rounded-full
                border border-[#9BC91D]
                text-sm font-semibold flex items-center gap-2  hover:bg-[#9BC91D]/40 transition-all"
                  >
                    <RiGitRepositoryCommitsLine className="size-5" />
                    <p className="mt-0.5">Contribuir</p>
                  </button>
                </div>
              </div>
              <footer className="absolute -bottom-5 w-full left-5 right-0 flex items-center justify-between">
                <div className="rounded-full flex items-center gap-4 backdrop-blur-2xl bg-zinc-900/40 border border-zinc-800/60 px-3 py-2">
                  <button className="flex text-white font-mono! text-sm gap-1 transition-all hover:text-[#bde64c]">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 pointer-events-none mt-0.5"
                    >
                      <path
                        d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z"
                        fill="currentcolor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    {post.stats.upvotes}
                  </button>
                  <button className="flex text-white font-mono! text-sm gap-1 transition-all hover:text-red-300">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 pointer-events-none rotate-180 mt-0.5"
                    >
                      <path
                        d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z"
                        fill="currentcolor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    {post.stats.downvotes}
                  </button>
                  <button className="flex text-white font-mono! text-sm gap-1 transition-all hover:text-indigo-400">
                    <RiHeart2Line className="size-4 mt-0.5" strokeWidth={1} />
                    {post.stats.likes}
                  </button>
                  <button className="flex text-white font-mono! text-sm gap-1 transition-all hover:text-blue-400">
                    <RiShareForwardLine
                      className="size-4 mt-0.5"
                      strokeWidth={1}
                    />
                    {post.stats.shares}
                  </button>
                </div>
              </footer>
            </div>
          ))}
        </section>
      </main>
      <aside className="h-full sticky right-0 top-0 border-l border-zinc-900/60">
        <div className="flex h-full items-center justify-center">
          <div className="flex px-16 gap-3 text-center flex-col max-w-xl items-center justify-center">
            <RiBuilding3Line
              className="size-12 text-zinc-500"
              strokeWidth={1}
            />
            <p className="text-zinc-400 text-sm ">
              Sem eventos ou atividades recentes
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
