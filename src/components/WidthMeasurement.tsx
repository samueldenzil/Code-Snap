import { cn } from "@/lib/utils";

interface WidthMeasurementProps {
  showWidth: boolean;
  width: string;
}

export default function WidthMeasurement({
  showWidth,
  width,
}: WidthMeasurementProps) {
  return (
    <div
      className={cn(
        "relative transition",
        showWidth ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t-2 border-neutral-800" />
      </div>
      <div className="absolute inset-y-0 left-0">
        <div className="h-full border-l-2 border-neutral-800"></div>
      </div>
      <div className="absolute inset-y-0 right-0">
        <div className="h-full border-r-2 border-neutral-800"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="text-gray-500 bg-gray-950 px-2">{width} px</span>
      </div>
    </div>
  );
}
