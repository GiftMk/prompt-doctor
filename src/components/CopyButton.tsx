"use client";

import {
  ClipboardCheckIcon,
  ClipboardIcon,
  ClipboardXIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  text?: string;
} & React.ComponentProps<"button">;

type CopyStatus = "success" | "failure";

const TIMEOUT = 750;

export const CopyButton = ({ text, className, ...props }: CopyButtonProps) => {
  const [status, setStatus] = useState<CopyStatus>();

  const onClick = async () => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setStatus("success");
    } catch {
      setStatus("failure");
    }
  };

  useEffect(() => {
    if (!status) return;

    const handler = setTimeout(() => setStatus(undefined), TIMEOUT);
    return () => clearTimeout(handler);
  }, [status]);

  return (
    <Button
      className={cn("disabled:opacity-100", className)}
      disabled={!!status || !text}
      variant={"ghost"}
      onClick={onClick}
      size={"icon"}
      {...props}
    >
      {!status && <ClipboardIcon />}
      {status === "success" && <ClipboardCheckIcon />}
      {status === "failure" && <ClipboardXIcon />}
    </Button>
  );
};
