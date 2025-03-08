"use client";

import { Markdown } from "@/components/Markdown";
import { CopyButton } from "../CopyButton";
import { cn } from "@/lib/utils";

type FeedbackSectionProps = {
  feedback?: string;
  title: string;
  disableCopy?: boolean;
  className?: string;
};

export const FeedbackSection = ({
  feedback,
  title,
  disableCopy,
  className,
}: FeedbackSectionProps) => {
  const hideCopy = feedback?.length === 0 || disableCopy;

  return (
    <div
      className={cn("flex w-fit flex-col overflow-auto px-8 pb-4", className)}
    >
      <span className="sticky top-0 flex items-center gap-2 bg-background">
        <p className="font-medium text-foreground/70 text-xs">{title}</p>
        <CopyButton text={feedback} className={cn({ invisible: hideCopy })} />
      </span>
      <Markdown>{feedback}</Markdown>
    </div>
  );
};
