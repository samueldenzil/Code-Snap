import { Input } from "@/components/ui/input";
import { usePreferenceStore } from "@/lib/store";

export default function FontSizeInput() {
  const { fontSize } = usePreferenceStore();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Font Size
      </label>
      <Input
        type="number"
        value={fontSize}
        className="!dark w-16 bg-transparent"
        min={6}
        onChange={(e) =>
          usePreferenceStore.setState({ fontSize: Number(e.target.value) })
        }
      />
    </div>
  );
}
