import { Switch } from "@/components/ui/switch";
import { usePreferenceStore } from "@/lib/store";

export default function DarkModeSwitch() {
  const { darkMode } = usePreferenceStore();

  return (
    <div className="w-max">
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Dark Mode
      </label>
      <Switch
        checked={darkMode}
        onCheckedChange={(checked) =>
          usePreferenceStore.setState({ darkMode: checked })
        }
        className="my-1.5"
      />
    </div>
  );
}
