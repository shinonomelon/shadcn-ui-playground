"use client";

import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full py-2 px-4">
      <div>
        <h1 className="text-2xl font-bold text-center text-black dark:text-white">
          Welcome to shadcn/ui playground
        </h1>
      </div>
      <div>
        <nav>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
