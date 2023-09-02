import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useData from "@/hooks/useData";
import { usePreferenceStore } from "@/lib/store";
import { FontTypes } from "@/types/types";

export default function FontOptions() {
  const { fontStyle } = usePreferenceStore();
  const { fonts } = useData();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Font
      </label>
      <Select
        value={fontStyle}
        onValueChange={(fontStyle: FontTypes) =>
          usePreferenceStore.setState({ fontStyle })
        }
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select Font" />
        </SelectTrigger>
        <SelectContent className="dark max-h-64">
          {Object.entries(fonts).map(([id, font]) => (
            <SelectItem key={id} value={id}>
              {font.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
