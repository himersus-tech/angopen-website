import { posts } from "../types";
import FeedPost from "../components/feed-post";

export default function FeedPage() {
  return (
    <section className="grid grid-cols-2 mt-7 w-[90%] mx-auto gap-6">
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
