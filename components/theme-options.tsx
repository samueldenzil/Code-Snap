import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useData from "@/hooks/useData";
import { usePreferenceStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { ThemeTypes } from "@/types/types";

export default function ThemeOptions() {
  const { theme } = usePreferenceStore();
  const { themes } = useData();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium">Theme</label>
      <Select
        value={theme}
        onValueChange={(theme: ThemeTypes) =>
          usePreferenceStore.setState({ theme: theme })
        }
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select Theme" />
        </SelectTrigger>
        <SelectContent className="dark">
          {Object.entries(themes).map(([name, theme]) => (
            <SelectItem value={name}>
              <div className="flex gap-2 items-center">
                <div className={cn("h-4 w-4 rounded-full", theme.className)} />
                <span className="capitalize">{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
