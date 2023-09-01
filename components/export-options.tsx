import { MutableRefObject, RefObject } from "react";
import { toBlob, toPng, toSvg } from "html-to-image";
import { toast } from "react-hot-toast";
import { usePreferenceStore } from "@/lib/store";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  ImageIcon,
  Link2Icon,
  Share2Icon,
} from "@radix-ui/react-icons";

interface ExportControlProps {
  targetRef: MutableRefObject<any>;
}

export default function ExportControl({ targetRef }: ExportControlProps) {
  const { title } = usePreferenceStore();
  const copyImage = async () => {
    const imgBlob = await toBlob(targetRef.current, { pixelRatio: 2 });
    const img = new ClipboardItem({ "image/png": imgBlob as Blob });
    navigator.clipboard.write([img]);
  };

  const copyLink = () => {
    // const state = usePreferenceStore.getState();
    // const queryParams = new URLSearchParams({
    //   ...state,
    //   code: btoa(state.code),
    // }).toString();
    // navigator.clipboard.writeText(`${location.href}?${queryParams}`);
  };

  const saveImage = async (name: string, format: string) => {
    let imgUrl, fileName;

    switch (format) {
      case "PNG":
        imgUrl = await toPng(targetRef.current, { pixelRatio: 2 });
        fileName = `${name}.png`;
        break;
      case "SVG":
        imgUrl = await toSvg(targetRef.current, { pixelRatio: 2 });
        fileName = `${name}.svg`;
        break;
      default:
        break;
    }

    const a = document.createElement("a");
    a.href = imgUrl as string;
    a.download = fileName as string;
    a.click();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="dark">
          <Share2Icon className="mr-2" />
          Export
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="dark">
        <DropdownMenuItem
          onClick={() =>
            toast.promise(copyImage(), {
              loading: "Copying...",
              success: "Image copied to Clipboard!",
              error: "Something went wrong!",
            })
          }
          className="gap-2"
        >
          <ImageIcon />
          Copy Image
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            copyLink();
            toast.success("Link copied to Clipboard!");
          }}
          className="gap-2"
        >
          <Link2Icon />
          Copy Link
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            toast.promise(saveImage(title, "PNG"), {
              loading: "Exporig image as PNG...",
              success: "Exported Successfully!",
              error: "Something went wrong!",
            })
          }
          className="gap-2"
        >
          <DownloadIcon />
          Save as PNG
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            toast.promise(saveImage(title, "SVG"), {
              loading: "Exporting image as SVG...",
              success: "Exported Successfully!",
              error: "Something went wrong!",
            })
          }
          className="gap-2"
        >
          <DownloadIcon />
          Save as SVG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
