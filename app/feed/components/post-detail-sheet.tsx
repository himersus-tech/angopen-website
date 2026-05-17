import {
  RiChat1Line,
  RiCloseLargeFill,
  RiCopperDiamondFill,
  RiGitPullRequestFill,
  RiMore2Fill,
  RiMoreFill,
  RiShareForwardLine,
} from "@remixicon/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { BaseButton } from "@/app/components/molecules/base-button";

interface PostDetailSheetProps {
  post: {
    title: string;
    description: string;
    images: string[];
    tags: string[];
    author: {
      username: string;
      role: string;
    };
    stats: {
      upvotes: number;
      downvotes: number;
      likes: number;
      shares: number;
    };
  };
  onClose: () => void;
  open: boolean;
}

const mockComments = [
  {
    username: "jsilva",
    timeAgo: "há 5min",
    upVotes: 4,
    xp: 120,
    downVotes: 1,
    commentCount: 2,
    comment:
      "Este é um comentário de exemplo para mostrar como os comentários aparecerão neste post. Aqui você pode expressar suas opiniões, fazer perguntas ou compartilhar suas ideias sobre o conteúdo do post. Sinta-se à vontade para interagir e participar da discussão!",
    subComments: [
      {
        username: "mariosalembe",
        timeAgo: "há 2min",
        upVotes: 2,
        xp: 80,
        downVotes: 0,
        commentCount: 0,
        comment:
          "Concordo plenamente! Este post trouxe insights valiosos sobre o assunto. A discussão aqui é realmente enriquecedora.",
      },
      {
        username: "ana_oliveira",
        timeAgo: "há 1min",
        upVotes: 3,
        downVotes: 0,
        xp: 100,
        commentCount: 0,
        comment:
          "Interessante ponto de vista! Acho que há muitos aspectos a considerar, e este post abriu espaço para uma discussão mais profunda. Mal posso esperar para ver mais comentários sobre isso!",
      },
    ],
  },

  {
    username: "pedro_dev",
    timeAgo: "há 12min",
    upVotes: 10,
    downVotes: 2,
    xp: 150,
    commentCount: 3,
    comment:
      "Gostei bastante da forma como o tema foi apresentado. Muitas vezes vemos conteúdos superficiais, mas aqui houve uma preocupação em detalhar melhor os pontos principais.",
    subComments: [
      {
        username: "lucas_code",
        timeAgo: "há 10min",
        upVotes: 4,
        xp: 90,
        downVotes: 0,
        commentCount: 0,
        comment:
          "Também achei! Principalmente a parte relacionada às boas práticas.",
      },
      {
        username: "mariana_s",
        timeAgo: "há 8min",
        upVotes: 2,
        downVotes: 1,
        xp: 70,
        commentCount: 0,
        comment:
          "Seria interessante ver exemplos mais avançados em um próximo post.",
      },
      {
        username: "tiagom",
        timeAgo: "há 5min",
        upVotes: 1,
        xp: 50,
        downVotes: 0,
        commentCount: 0,
        comment:
          "Concordo. A explicação ficou clara até para quem está começando.",
      },
    ],
  },

  {
    username: "carla_design",
    timeAgo: "há 20min",
    upVotes: 7,
    downVotes: 0,
    commentCount: 1,
    xp: 110,
    comment:
      "Achei a interface muito intuitiva. O layout ficou limpo e fácil de navegar, especialmente no mobile.",
    subComments: [
      {
        username: "rafa_ui",
        timeAgo: "há 18min",
        upVotes: 2,
        downVotes: 0,
        xp: 60,
        commentCount: 0,
        comment:
          "Verdade! A experiência do usuário parece ter sido uma prioridade aqui.",
      },
    ],
  },

  {
    username: "eduardo23",
    timeAgo: "há 35min",
    upVotes: 15,
    downVotes: 3,
    xp: 200,
    commentCount: 2,
    comment:
      "Tenho uma dúvida sobre a implementação mencionada no post. Isso funcionaria bem em aplicações de grande escala?",
    subComments: [
      {
        username: "aline.tech",
        timeAgo: "há 30min",
        upVotes: 5,
        xp: 100,
        downVotes: 0,
        commentCount: 0,
        comment:
          "Depende bastante da arquitetura utilizada. Mas em geral, sim.",
      },
      {
        username: "brunodev",
        timeAgo: "há 28min",
        upVotes: 3,
        downVotes: 1,
        xp: 80,
        commentCount: 0,
        comment:
          "Eu já utilizei algo parecido em produção e os resultados foram positivos.",
      },
    ],
  },

  {
    username: "sara_monteiro",
    timeAgo: "há 1h",
    upVotes: 21,
    downVotes: 1,
    xp: 250,
    commentCount: 4,
    comment:
      "Excelente conteúdo! Dá para perceber o cuidado na organização das informações e na clareza da explicação.",
    subComments: [
      {
        username: "joaopaulo",
        timeAgo: "há 58min",
        upVotes: 6,
        downVotes: 0,
        commentCount: 0,
        xp: 120,
        comment:
          "Concordo totalmente. Um dos melhores posts que li recentemente.",
      },
      {
        username: "dev_ninja",
        timeAgo: "há 55min",
        upVotes: 4,
        downVotes: 0,
        commentCount: 0,
        xp: 90,
        comment:
          "Seria ótimo ter um tutorial em vídeo complementando este conteúdo.",
      },
      {
        username: "fernanda.web",
        timeAgo: "há 50min",
        upVotes: 2,
        downVotes: 0,
        xp: 70,
        commentCount: 0,
        comment: "Já compartilhei com minha equipe. Muito útil mesmo!",
      },
      {
        username: "andre_l",
        timeAgo: "há 48min",
        upVotes: 1,
        downVotes: 0,
        xp: 60,
        commentCount: 0,
        comment: "Parabéns pelo trabalho e pela qualidade do material.",
      },
    ],
  },

  {
    username: "miguel_front",
    timeAgo: "há 2h",
    upVotes: 5,
    xp: 90,
    downVotes: 2,
    commentCount: 0,
    comment:
      "Acho que o artigo poderia abordar também algumas limitações dessa abordagem. Mesmo assim, ficou muito bom!",
    subComments: [],
  },
];

const CommentItem = ({
  comment,
  username,
  timeAgo,
  upVotes,
  downVotes,
  subComments,
  xp,
  isSubComment,
}: {
  comment: string;
  username: string;
  xp: number;
  timeAgo: string;
  upVotes: number;
  downVotes: number;
  commentCount: number;
  subComments?: {
    username: string;
    timeAgo: string;
    upVotes: number;
    downVotes: number;
    commentCount: number;
    comment: string;
    xp: number;
  }[];
  isSubComment?: boolean;
}) => {
  return (
    <div className="w-full">
      <div className="flex -ms-4.5 items-start gap-4">
        <div>
          <div className="size-9 rounded-full bg-white" />
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-white">
                  {username} • <span className="text-white/60">{timeAgo}</span>
                </p>
                <span className="px-2 text-sm flex items-center justify-center gap-1 py-0.5 rounded-full bg-base-design/20 text-base-design">
                  <RiCopperDiamondFill className="size-4" /> {xp}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-white/50 transition-all hover:bg-zinc-900/50 rounded-full p-1">
                  <RiMoreFill className="size-5" />
                </button>
              </div>
            </div>
            <p className="pt-1 text-white/60">{comment}</p>
            <footer className="flex mt-4 items-center justify-between">
              <div className="flex items-center gap-6">
                <button className="flex items-center text-white font-mono! text-sm gap-1.5 transition-all hover:text-[#bde64c]">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="size-4"
                  >
                    <path
                      d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z"
                      fill="currentcolor"
                    />
                  </svg>
                  {upVotes}
                </button>
                <button className="flex items-center text-white font-mono! text-sm gap-1.5 transition-all hover:text-[#bde64c]">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="size-4 rotate-180"
                  >
                    <path
                      d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z"
                      fill="currentcolor"
                    />
                  </svg>
                  {downVotes}
                </button>
                <button className="flex items-center text-white font-mono! text-sm gap-1.5 transition-all hover:text-[#bde64c]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-4.5"
                    color="currentColor"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21.9609 9C21.9865 9.72648 22 10.2292 22 11C22 11.7708 21.9865 12.5232 21.9609 13.2497C21.8772 15.6232 21.8353 16.8099 20.8699 17.7826C19.9046 18.7552 18.6843 18.8074 16.2437 18.9118C15.5098 18.9432 14.7498 18.9667 13.9693 18.9815C13.2282 18.9955 12.8576 19.0026 12.532 19.1266C12.2064 19.2506 11.9325 19.4855 11.3845 19.9553L9.20503 21.8242C9.07273 21.9376 8.90419 22 8.72991 22C8.32679 22 8 21.6732 8 21.2701V18.9219C7.91842 18.9186 7.83715 18.9153 7.75619 18.9118C5.31569 18.8074 4.09545 18.7552 3.13007 17.7825C2.16469 16.8099 2.12282 15.6232 2.03909 13.2497C2.01346 12.5232 2 11.7708 2 11C2 10.2292 2.01346 9.47679 2.03909 8.7503C2.12282 6.37683 2.16469 5.19009 3.13007 4.21745C4.09545 3.24481 5.3157 3.1926 7.7562 3.08819C9.09517 3.0309 10.5209 3 12 3C12.5067 3 13.0072 3.00363 13.5 3.0107" />
                    <path d="M22 5H16M19 2V8" />
                    <path d="M12.1257 11H12.0007M8.125 11H8M12.2507 11C12.2507 11.1381 12.1388 11.25 12.0007 11.25C11.8627 11.25 11.7507 11.1381 11.7507 11C11.7507 10.8619 11.8627 10.75 12.0007 10.75C12.1388 10.75 12.2507 10.8619 12.2507 11ZM8.25 11C8.25 11.1381 8.13807 11.25 8 11.25C7.86193 11.25 7.75 11.1381 7.75 11C7.75 10.8619 7.86193 10.75 8 10.75C8.13807 10.75 8.25 10.8619 8.25 11Z" />
                  </svg>
                </button>
              </div>
            </footer>
            <div className="flex w-full flex-col mt-8 ps-8">
              {subComments &&
                subComments.map((subComment, i) => (
                  <CommentItem
                    key={i}
                    xp={subComment.xp}
                    comment={subComment.comment}
                    username={subComment.username}
                    timeAgo={subComment.timeAgo}
                    upVotes={subComment.upVotes}
                    downVotes={subComment.downVotes}
                    commentCount={subComment.commentCount}
                    isSubComment={true}
                  />
                ))}
              {!isSubComment && (
                <div className="ps-8 -mt-3">
                  <button className="text-sm text-zinc-200">
                    Ver mais respostas(20)
                  </button>
                </div>
              )}
            </div>
          </div>
          {!isSubComment && (
            <div className="rounded-full w-fit mt-4 p-2 pe-5 border border-zinc-800 bg-zinc-900 flex items-center gap-2">
              <div className="size-9 rounded-full bg-white" />
              <div>
                <p className="text-white">O que pensas?</p>
                <p className="text-xs text-zinc-500">Escreva um Comentário</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export function PostDetailSheet({ post, open, onClose }: PostDetailSheetProps) {
  return (
    <Sheet open={open} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        showCloseButton={false}
        className="h-[90vh]! bg-zinc-950 border-zinc-900"
        side="bottom"
      >
        <SheetHeader className="py-2! px-6! m-0! border-b border-zinc-900/60 pb-5!">
          <div className="flex mt-3 items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="size-10 transition-all hover:bg-zinc-900 flex items-center justify-center text-white rounded-full bg-zinc-900/50">
                <ChevronLeft />
              </button>
              <button className="size-10 transition-all hover:bg-zinc-900 flex items-center justify-center text-white rounded-full bg-zinc-900/50">
                <ChevronRight />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="size-10 transition-all hover:bg-white/60 flex items-center justify-center text-black rounded-full bg-white">
                <RiShareForwardLine className="size-5.5" />
              </button>
              <button className="size-10 transition-all hover:bg-zinc-900 flex items-center justify-center text-white rounded-full bg-zinc-900/50">
                <RiMore2Fill className="size-5.5" />
              </button>
              <button
                onClick={() => onClose()}
                className="size-10 transition-all hover:bg-zinc-900 flex items-center justify-center text-white rounded-full bg-zinc-900/50"
              >
                <RiCloseLargeFill className="size-4.5" />
              </button>
            </div>
          </div>
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <div className="grid px-8 overflow-y-auto flex-1 p-5 grid-cols-[60%_40%]">
          <header className="border-r border-zinc-900/60 pe-10">
            <div className="flex mb-8 justify-between items-center gap-3">
              <div className="flex items-start gap-3">
                <div className="size-10 mt-1 rounded-full bg-white" />
                <div>
                  <p className="text-zinc-100 w-full flex items-center gap-2 text-md">
                    {post.author.username} <span>•</span>
                    <span className="px-2 text-sm flex items-center justify-center gap-1 py-0.5 rounded-full bg-base-design/20 text-base-design">
                      <RiCopperDiamondFill className="size-4" /> 1.4m
                    </span>
                  </p>
                  <p className="text-zinc-500 flex items-center gap-2 text-sm">
                    {post.author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BaseButton>Seguir</BaseButton>
                <button className="text-zinc-500 transition-all hover:text-white">
                  <RiMore2Fill className="size-5" />
                </button>
              </div>
            </div>
            <div className="max-w-4xl">
              <h2 className="text-white text-2xl">{post.title}</h2>
              <p className="text-zinc-300 mt-2">{post.description}</p>
              <div className="flex items-center mt-5 mb-5 gap-2">
                {post.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="px-2 border pt-1.5 border-zinc-900 py-1 rounded-full text-xs text-white bg-zinc-900/50"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.images[0]}
                alt="Post Image"
                width={800}
                height={400}
                className="mt-5 h-87.5 rounded-lg object-cover"
              />
            </div>

            <div className="mt-6 flex items-center gap-5">
              <p className="text-zinc-500">{post.stats.upvotes} Curtidas</p>
              <p className="text-zinc-500">{post.stats.likes} Comentários</p>
            </div>

            <div className="w-full mt-3 border-t border-zinc-900  flex items-center justify-between">
              <div className="w-full grid grid-cols-5 items-center py-5 gap-8 border-t border-zinc-900/50">
                <button className="flex items-center justify-center text-white font-mono! text-sm gap-1 transition-all hover:text-[#bde64c]">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="size-4"
                  >
                    <path
                      d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z"
                      fill="currentcolor"
                    />
                  </svg>
                  {post.stats.upvotes}
                </button>
                <button className="flex justify-center items-center text-white font-mono! text-sm gap-1 transition-all hover:text-red-400">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="size-4 rotate-180"
                  >
                    <path
                      d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z"
                      fill="currentcolor"
                    />
                  </svg>
                  {post.stats.downvotes}
                </button>
                <button className="flex justify-center items-center text-white font-mono! text-sm gap-1 transition-all hover:text-indigo-400">
                  <RiChat1Line className="size-4" strokeWidth={1} />
                  {post.stats.likes}
                </button>
                <button className="flex justify-center items-center text-white font-mono! text-sm gap-1 transition-all hover:text-blue-400">
                  <RiShareForwardLine className="size-4" strokeWidth={1} />
                  {post.stats.shares}
                </button>
                <button className="flex justify-center items-center text-white font-mono! text-sm gap-1 transition-all hover:text-blue-400">
                  <RiGitPullRequestFill className="size-4" strokeWidth={1} />
                  {post.stats.shares}
                </button>
              </div>
            </div>
            <div>
              <header className="flex mt-4 items-center justify-between">
                <div className="rounded-full p-2 pe-5 border border-zinc-800 bg-zinc-900 flex items-center gap-2">
                  <div className="size-9 rounded-full bg-white" />
                  <div>
                    <p className="text-white">O que pensas?</p>
                    <p className="text-xs text-zinc-500">
                      Escreva um Comentário
                    </p>
                  </div>
                </div>
                <div className="flex px-4 rounded-lg py-2 border border-zinc-900 items-center gap-2 ">
                  <p className="text-zinc-500">Ordem | </p>
                  <button className="text-white flex items-center gap-1">
                    Recentes
                    <ChevronDown className="size-4 opacity-40 pt-0.5" />
                  </button>
                </div>
              </header>
              {/* comments */}
              <section className="mt-10">
                <div className="grid border-l ms-4 border-zinc-900 grid-cols-1 gap-5">
                  {mockComments.map((comment, i) => (
                    <CommentItem
                      key={i}
                      comment={comment.comment}
                      xp={comment.xp}
                      username={comment.username}
                      timeAgo={comment.timeAgo}
                      upVotes={comment.upVotes}
                      downVotes={comment.downVotes}
                      commentCount={comment.commentCount}
                      subComments={comment.subComments}
                    />
                  ))}
                </div>
              </section>
            </div>
          </header>
          <footer></footer>
        </div>
      </SheetContent>
    </Sheet>
  );
}
