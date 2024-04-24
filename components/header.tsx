"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full py-2 px-4">
      <div>
        <h1 className="text-2xl font-bold text-center text-black dark:text-white hover:underline">
          <Link href="/">Welcome to shadcn/ui playground</Link>
        </h1>
      </div>
      <div>
        <nav className="flex items-center space-x-4">
          <Link href="/search">
            <SearchIcon className="h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
          </Link>
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
