import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { API_URL } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

const fetchPost = async (id: string) => {
  const post = await fetch(`${API_URL}/posts/${id}`).then((res) => res.json());
  return post;
};

export default async function PostPage() {
  const post = await fetchPost("1");
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>

        <Link
          href={`/users/${post.id}`}
          className="flex items-center my-4 hover:underline"
        >
          <Avatar className="w-6 h-6 mr-2">
            <AvatarImage src="/user-image.webp" />
            <AvatarFallback>{post.userId}</AvatarFallback>
          </Avatar>
          <span className="font-medium">user {post.userId}</span>
        </Link>
      </header>
      <div className="mb-8">
        <Image
          alt="Featured Image"
          className="rounded-lg object-cover w-full aspect-[16/9]"
          height={600}
          src="/post-image.webp"
          width={1200}
        />
      </div>
      <div className="prose prose-gray dark:prose-invert">
        <p>{post.body}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus,
          quas praesentium dolores repellendus, inventore, explicabo vel
          temporibus placeat voluptatum odit perferendis. Delectus officiis,
          libero quaerat deserunt necessitatibus a veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          possimus? Harum libero ipsam eaque sunt enim eum omnis consequuntur
          neque amet dolorum sapiente, tempore possimus expedita perspiciatis?
          Quibusdam, molestiae! Explicabo?
        </p>
      </div>
    </article>
  );
}
