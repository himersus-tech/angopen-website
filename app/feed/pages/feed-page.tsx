import { posts } from "../types";
import FeedPost from "../components/feed-post";

export default function FeedPage() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 w-[95%] mx-auto gap-4">
      {posts.map((post, index) => (
        <FeedPost
          key={index}
          post={{
            ...post,
            index,
          }}
        />
      ))}
    </section>
  );
}
