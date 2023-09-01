"use client";
import { useRef } from "react";
import CodeEditor from "@/components/code-editor";
import useData from "@/hooks/useData";
import { usePreferenceStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function Home() {
  const { themes } = useData();
  const { theme, padding, showBackground } = usePreferenceStore();

  const editorRef = useRef(null);

  return (
    <main className="dark min-h-screen flex flex-col justify-center bg-neutral-950 text-gray-100">
      <link
        rel="stylesheet"
        href={themes[theme].theme}
        crossOrigin="anonymous"
      />
      <div className="mx-auto">
        <div
          className={cn(
            "overflow-hidden mb-2 transition-all ease-out",
            showBackground ? themes[theme].className : "ring ring-gray-900"
          )}
          style={{ padding: padding }}
          ref={editorRef}
        >
          <CodeEditor />
        </div>
      </div>
    </main>
  );
}
