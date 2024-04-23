import { API_URL, IMAGE_URL } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API_URL}/posts?_limit=10`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Post[] = await res.json();
  return data;
}

export async function PostList() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        Blog List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-12">
        {posts.map((post) => (
          <section
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950"
          >
            <Image
              alt="Blog Post 1"
              className="w-full h-48 object-cover"
              height={400}
              src="/post-image.webp"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="p-6">
              <Link className="block" href={`/posts/${post.id}`}>
                <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:underline">
                  {post.title}
                </h3>
              </Link>
              <div className="flex items-center mb-4">
                <Link
                  className="text-gray-500 text-sm flex items-center hover:underline"
                  href={`/users/${post.userId}`}
                >
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src="/user-image.webp" />
                    <AvatarFallback>{post.userId}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">user {post.userId}</span>
                </Link>
                <span>, 23 April 2024</span>
              </div>
              <p className="text-gray-500 line-clamp-2">{post.body}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
