"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Check, Code, Crown, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10"
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-lime-500",
    bgColor: "bg-lime-500/10"
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10"
  }
]

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gapy-y-4 pb-2">
            <div className="flex items-center gap-x-2 py-1">
              <p className="font-normal">
                Upgrade to <span className={cn("font-bold", montserrat.className)}>NexLear</span>
              </p>
              <Badge className="uppercase text-sm py-1" variant={"premium"}>
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">
                    {tool.label}
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <Badge className="font-light text-xs py-1" variant={"badge"}>
                    Unlimited
                  </Badge>
                  <Check className="text-primary w-5 h-5" />
                </div>
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade
            <Crown className="w-4 h-4 ml-2 fill-amber-500 text-amber-500" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}