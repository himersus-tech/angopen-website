import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-dvh">
      <div className="max-w-80 flex flex-col items-center justify-center gap-10">
        <span>
          <svg
            className="text-zinc-100 size-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM19 6V8H15V6H19Z"></path>
          </svg>
        </span>
        <div className="text-center space-y-3">
          <h1 className="text-white font-semibold text-3xl ret:text-4xl">Hey, Amigo!</h1>
          <p className="text-zinc-400 text-center">
            Estamos esperando por você para terminar de construir esta página.
          </p>
          <Link
            className="flex mt-7 text-center w-full items-center justify-center"
            href={process.env.NEXT_PUBLIC_WHATSAPP_GROUP ?? "/"}
          >
            <button className="text-white cursor-pointer py-2.5 px-5 border border-zinc-800 transition-all hover:bg-zinc-900 rounded-lg">
              Contribuir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
