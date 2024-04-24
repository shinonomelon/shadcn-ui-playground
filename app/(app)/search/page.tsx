import { Search } from "@/components/search";
import { API_URL } from "@/lib/constant";
import { Post } from "@/lib/types";
import Link from "next/link";
import { Suspense } from "react";

const fetchPostsByQuery = async (query: string) => {
  const posts: Post[] = await fetch(`${API_URL}/posts`).then((res) =>
    res.json()
  );
  return posts.filter((post) => post.title.includes(query));
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const posts: Post[] = await fetchPostsByQuery(query);

  return (
    <div className="max-w-3xl mx-auto pt-8">
      <Search placeholder="Search" />
      <Suspense key={query} fallback={<div>loading ...</div>}>
        <div className="mt-4">
          {query &&
            posts.map((post) => (
              <div key={post.id} className="py-4 border-b-2">
                <h2 className=" text-xl font-bold hover:underline">
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </h2>
                <p>{post.body}</p>
              </div>
            ))}
        </div>
      </Suspense>
    </div>
  );
}
