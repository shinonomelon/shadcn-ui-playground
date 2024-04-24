"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <Button
      className=" outline"
      variant={isFollowing ? "default" : "outline"}
      onClick={() => setIsFollowing((prev) => !prev)}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}
