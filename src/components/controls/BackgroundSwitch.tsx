import { Switch } from "@/components/ui/switch";
import { usePreferenceStore } from "@/lib/store";

export default function BackgroundSwitch() {
  const { showBackground } = usePreferenceStore();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Background
      </label>
      <Switch
        checked={showBackground}
        onCheckedChange={(checked) =>
          usePreferenceStore.setState({ showBackground: checked })
        }
        className="my-1.5"
      />
    </div>
  );
}
