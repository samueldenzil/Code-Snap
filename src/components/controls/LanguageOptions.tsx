import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import useData from "@/hooks/useData";
import { usePreferenceStore } from "@/lib/store";
import { MagicWandIcon } from "@radix-ui/react-icons";

export default function LanguageOptions() {
  const { autoDetectLanguage, language } = usePreferenceStore();
  const { languages } = useData();

  const handleChange = (language: string) => {
    if (language === "auto-detect") {
      usePreferenceStore.setState({
        autoDetectLanguage: true,
        language: "plaintext",
      });
    } else {
      usePreferenceStore.setState({
        autoDetectLanguage: false,
        language,
      });
    }
  };

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Language
      </label>
      <Select value={language} onValueChange={handleChange}>
        <SelectTrigger className="w-40">
          {autoDetectLanguage && <MagicWandIcon className="mr-2" />}
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent className="dark">
          <ScrollArea className="h-72">
            <div className="py-1">
              <SelectItem value="auto-detect">Auto Detect</SelectItem>
              {Object.entries(languages).map(([lang, name]) => (
                <SelectItem key={lang} value={lang}>
                  {name}
                </SelectItem>
              ))}
            </div>
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
}
