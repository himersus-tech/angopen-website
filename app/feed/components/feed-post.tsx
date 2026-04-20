import { RiChat1Line, RiShareForwardLine } from "@remixicon/react";
import { EllipsisVertical } from "lucide-react";

interface FeedPostProps {
  post: {
    index: number;
    author: {
      username: string;
      role: string;
    };
    title: string;
    description: string;
    tag: string;
    tags: string[];
    images: string[];
    stats: {
      upvotes: number;
      downvotes: number;
      likes: number;
      shares: number;
    };
  };
}

export default function FeedPost({ post }: FeedPostProps) {
  return (
    <div
      key={post.index}
      className="border flex flex-col justify-between overflow-hidden relative  rounded-xl border-zinc-900/60"
    >
      <div>
        <header className="bg-zinc-900/30 rounded-t-xl border-b border-zinc-900/60 px-5 flex items-center justify-between py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex items-start gap-4">
              <div className="size-8 mt-1 rounded-full bg-white" />
              <div>
                <p className="text-zinc-100 text-md">{post.author.username}</p>
                <p className="text-zinc-500 text-sm">{post.author.role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* <p className="text-zinc-400 text-sm">{post.posted_at}</p> */}
            {/* <div className="flex items-center ps-2 justify-center">
                      {[...post.contributors].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            backgroundColor: item.avatar_color,
                          }}
                          className={`size-6 rounded-full border border-zinc-900/60 -ml-2`}
                        />
                      ))}
                    </div> */}
            <p className="bg-base-design/10 cursor-pointer text-base-design text-xs font-semibold px-2 py-1 rounded-full">
              {post.tag}
            </p>
            <button className="text-zinc-500 transition-all hover:text-white">
              <EllipsisVertical className="size-5 " strokeWidth={1} />
            </button>
          </div>
        </header>
        <div className=" p-7">
          <div className="flex items-center mb-5 gap-2">
            {post.tags.map((tag, i) => (
              <p
                key={i}
                className="px-2 border pt-1.5 border-zinc-900 py-1 rounded-full text-xs text-white bg-zinc-900/50"
              >
                {tag}
              </p>
            ))}
          </div>
          <h3 className="text-white text-lg font-semibold">{post.title}</h3>
          <p className="text-zinc-500 line-clamp-1 mt-2 text-sm">
            {post.description}
          </p>
          <div
            style={{
              backgroundImage: `url(${post.images[0]})`,
            }}
            className="h-60 mt-3 rounded-2xl bg-cover bg-top"
          ></div>
        </div>
      </div>
      <footer className="w-full px-5 flex items-center justify-between">
        <div className="w-full grid grid-cols-4 items-center py-5 gap-8 backdrop-blur-2xl border-t border-zinc-900">
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
            <RiChat1Line className="size-4 mt-0.5" strokeWidth={1} />
            {post.stats.likes}
          </button>
          <button className="flex text-white font-mono! text-sm gap-1 transition-all hover:text-blue-400">
            <RiShareForwardLine className="size-4 mt-0.5" strokeWidth={1} />
            {post.stats.shares}
          </button>
        </div>
      </footer>
    </div>
  );
}
