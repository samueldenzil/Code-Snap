"use client";
import { useEffect } from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import flourite from "flourite";

import { cn } from "@/lib/utils";
import useData from "@/hooks/useData";
import { usePreferenceStore } from "@/lib/store";

export default function CodeEditor() {
  const { codeSnippets, themes, fonts } = useData();
  const {
    autoDetectLanguage,
    code,
    darkMode,
    language,
    title,
    fontSize,
    fontStyle,
  } = usePreferenceStore();

  useEffect(() => {
    const randomSnippet =
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    usePreferenceStore.setState({ code: randomSnippet.code });
  }, []);

  useEffect(() => {
    if (autoDetectLanguage) {
      const { language } = flourite(code, { noUnknown: true });
      usePreferenceStore.setState({
        language: language.toLowerCase() || "plaintext",
      });
    }
  }, [autoDetectLanguage, code]);

  return (
    <div
      className={cn(
        "min-w-[25rem] border-2 rounded-xl shadow-2xl",
        darkMode
          ? "bg-black/75 border-gray-600/40"
          : "bg-white/75 border-gray-200/20"
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
            value={title}
            spellCheck={false}
            onChange={(e) =>
              usePreferenceStore.setState({ title: e.target.value })
            }
            className="bg-transparent w-full text-center text-gray-400 text-sm font-medium focus:outline-none"
          />
        </div>
      </header>

      <div
        className={cn(
          "px-4 pb-4",
          darkMode
            ? "brightness-110"
            : "text-gray-800 brightness-50 saturate-200 contrast-200"
        )}
      >
        <Editor
          value={code}
          onValueChange={(code) => {
            usePreferenceStore.setState({ code: code });
          }}
          highlight={(code) =>
            hljs.highlight(code, { language: language }).value
          }
          className={cn(fonts[fontStyle].src.className)}
          padding={10}
          style={{
            fontSize: fontSize,
          }}
          textareaClassName="focus:outline-none"
        />
      </div>
    </div>
  );
}
