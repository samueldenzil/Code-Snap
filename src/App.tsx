import { useRef } from "react";
import useData from "@/hooks/useData";
import { usePreferenceStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import CodeEditor from "@/components/CodeEditor";
import { Card, CardContent } from "@/components/ui/card";
import ExportOptions from "@/components/controls/ExportOptions";
import ThemeOptions from "./components/controls/ThemeOptions";
import LanguageOptions from "./components/controls/LanguageOptions";
import FontOptions from "./components/controls/FontOptions";
import FontSizeInput from "./components/controls/FontSizeInput";
import PaddingSlider from "./components/controls/PaddingSlider";
import BackgroundSwitch from "./components/controls/BackgroundSwitch";
import DarkModeSwitch from "./components/controls/DarkModeSwitch";

function App() {
  const { themes, fonts } = useData();
  const { theme, padding, showBackground, fontStyle } = usePreferenceStore();

  const editorRef = useRef(null);

  return (
    <main className="dark min-h-screen flex flex-col justify-center bg-neutral-950 text-gray-100">
      <link
        rel="stylesheet"
        href={themes[theme].theme}
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href={fonts[fontStyle].src}
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

      <Card className="fixed bottom-16 left-1/2 -translate-x-1/2 px-8 py-6 bg-neutral-900/90 backdrop-blur">
        <CardContent className="flex flex-wrap lg:flex-nowrap gap-6 p-0 items-start">
          <ThemeOptions />
          <LanguageOptions />
          <FontOptions />
          <FontSizeInput />
          <PaddingSlider />
          <BackgroundSwitch />
          <DarkModeSwitch />
          <div className="w-px h-16 my-auto bg-gray-100" />
          <div className="place-self-center">
            <ExportOptions targetRef={editorRef} />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
