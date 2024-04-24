import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { PostList } from "./post-list";
import { Button } from "./ui/button";
import { FollowButton } from "./follow-button";

export function UserProfile() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="">
        <div className="flex flex-col items-center">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/user-image.webp" />
            <AvatarFallback>User 1</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold mt-4 mb-2">John Doe</h2>
          <FollowButton />
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Im a passionate designer and developer who loves to create beautiful
            and functional products.
          </p>
        </div>

        <PostList />
      </div>
    </div>
  );
}
