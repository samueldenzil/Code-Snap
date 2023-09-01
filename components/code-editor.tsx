"use client";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";

import useData from "@/hooks/useData";
import { cn } from "@/lib/utils";

export default function CodeEditor() {
  const { codeSnippits } = useData();

  return (
    <div
      className={cn(
        "min-w-[25rem] border-2 rounded-xl shadow-2xl",
        "bg-black/75 border-gray-600/40"
      )}
    >
      <header className="grid grid-cols-6 gap-3 items-center px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="col-span-4">
          <input
            type="text"
            value="Untitled"
            spellCheck={false}
            className="bg-transparent w-full text-center text-gray-400 text-sm font-medium focus:outline-none"
          />
        </div>
      </header>

      <div className={cn("px-4 pb-4")}>
        <Editor
          value={codeSnippits[0].code}
          onValueChange={(code) => {}}
          highlight={(code) =>
            hljs.highlight(code, { language: codeSnippits[0].language }).value
          }
          padding={10}
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 12,
          }}
          textareaClassName="focus:outline-none"
        />
      </div>
    </div>
  );
}
