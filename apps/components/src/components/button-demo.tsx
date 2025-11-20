"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ButtonDemo() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setClickCount((c) => c + 1)}>
            Default
          </Button>
          <Button variant="secondary" onClick={() => setClickCount((c) => c + 1)}>
            Secondary
          </Button>
          <Button variant="destructive" onClick={() => setClickCount((c) => c + 1)}>
            Destructive
          </Button>
          <Button variant="outline" onClick={() => setClickCount((c) => c + 1)}>
            Outline
            </Button>
          <Button variant="ghost" onClick={() => setClickCount((c) => c + 1)}>
            Ghost
          </Button>
          <Button variant="link" onClick={() => setClickCount((c) => c + 1)}>
            Link
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm" onClick={() => setClickCount((c) => c + 1)}>
            Small
          </Button>
          <Button size="default" onClick={() => setClickCount((c) => c + 1)}>
            Default
          </Button>
          <Button size="lg" onClick={() => setClickCount((c) => c + 1)}>
            Large
          </Button>
          <Button size="icon" onClick={() => setClickCount((c) => c + 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Click Counter</h2>
        <p className="text-muted-foreground dark:text-white">
          Total clicks: <span className="font-bold">{clickCount}</span>
        </p>
        <Button onClick={() => setClickCount(0)} >
          Reset Counter
        </Button>
      </div>
    </div>
  );
}

