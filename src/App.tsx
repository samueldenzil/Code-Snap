import { useRef, useState } from "react";
import { Resizable } from "re-resizable";
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
import WidthMeasurement from "./components/WidthMeasurement";
import { Button } from "./components/ui/button";
import { ResetIcon } from "@radix-ui/react-icons";

function App() {
  const { themes, fonts } = useData();
  const { theme, padding, showBackground, fontStyle } = usePreferenceStore();
  const [width, setWidth] = useState("auto");
  const [showWidth, setShowWidth] = useState(false);

  const editorRef = useRef(null);
  // console.log(editorRef.current?.offsetWidth);
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
        <Resizable
          enable={{ left: true, right: true }}
          minWidth={padding * 2 + 400}
          size={{ width, height: "auto" }}
          onResize={(e, dir, ref) => setWidth(String(ref.offsetWidth))}
          onResizeStart={() => setShowWidth(true)}
          onResizeStop={() => setShowWidth(false)}
        >
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
          <WidthMeasurement showWidth={showWidth} width={width} />
          <div
            className={cn(
              "-mt-4 mx-auto w-fit transition",
              showWidth || width === "auto"
                ? "invisible opacity-0"
                : "visible opacity-100"
            )}
          >
            <Button size="sm" onClick={() => setWidth("auto")} variant="ghost">
              <ResetIcon className="mr-2" />
              Reset width
            </Button>
          </div>
        </Resizable>
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
