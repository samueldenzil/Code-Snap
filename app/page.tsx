"use client";
import { useRef } from "react";
import CodeEditor from "@/components/code-editor";
import useData from "@/hooks/useData";
import { usePreferenceStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import ExportOptions from "@/components/export-options";
import ThemeOptions from "@/components/theme-options";

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

      <Card className="fixed bottom-16 left-1/2 -translate-x-1/2 px-8 py-6 bg-neutral-900/80 backdrop-blur">
        <CardContent className="flex flex-wrap gap-6 p-0 items-center">
          <ThemeOptions />
          <ExportOptions targetRef={editorRef} />
        </CardContent>
      </Card>
    </main>
  );
}
