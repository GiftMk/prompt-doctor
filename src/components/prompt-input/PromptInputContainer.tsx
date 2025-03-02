"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { Card } from "../ui/card";
import { promptInputHeightAtom, sidebarWidthAtom } from "@/state/atoms";
import { useIsClient } from "@/hooks/useIsClient";
import { useRef } from "react";
import { useDimensions } from "@/hooks/useDimensions";

export const PromptInputContainer = ({ children }: React.PropsWithChildren) => {
  const isClient = useIsClient();
  const sidebarWidth = useAtomValue(sidebarWidthAtom);
  const ref = useRef<HTMLDivElement>(null);
  const setPromptInputHeight = useSetAtom(promptInputHeightAtom);

  useDimensions(ref, ({ height }) => setPromptInputHeight(height));

  return (
    <Card
      ref={ref}
      style={{ width: `calc(100% - ${isClient ? sidebarWidth : 0}px)` }}
      className="p-4 space-y-4 bg-primary-foreground fixed bottom-0 right-0 rounded-l-none rounded-b-none border-l-0"
    >
      {children}
    </Card>
  );
};
