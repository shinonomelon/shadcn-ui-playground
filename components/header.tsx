"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full py-2 px-4">
      <div>
        <h1 className="text-2xl font-bold text-center text-black dark:text-white">
          Welcome to shadcn/ui playground
        </h1>
      </div>
      <div>
        <nav className="flex items-center space-x-4">
          <ModeToggle />
          <Link
            href="/auth/signup"
            className={cn(
              buttonVariants({ variant: "outline" })
              // "text-white bg-black dark:bg-white dark:text-black"
            )}
          >
            Sign Up
          </Link>
          <Link
            href="/auth/login"
            className={cn(
              buttonVariants({ variant: "secondary" })
              // "text-white bg-black dark:bg-white dark:text-black"
            )}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
