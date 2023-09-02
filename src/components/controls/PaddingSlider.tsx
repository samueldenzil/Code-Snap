import { Slider } from "@/components/ui/slider";
import { usePreferenceStore } from "@/lib/store";

export default function PaddingSlider() {
  const { padding } = usePreferenceStore();

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Padding
      </label>
      <Slider
        defaultValue={[padding]}
        max={128}
        step={8}
        onValueChange={([padding]) => usePreferenceStore.setState({ padding })}
        className="w-44 my-5"
      />
    </div>
  );
}
