"use client";

import { PromptFeedback } from "@/components/prompt-feedback";
import { useIsClient } from "@/hooks/useIsClient";
import { promptInputHeightAtom } from "@/state/atoms";
import { useAtomValue } from "jotai";

const Home = () => {
  const isClient = useIsClient();
  const promptInputHeight = useAtomValue(promptInputHeightAtom);

  return (
    <div
      style={{
        height: `calc(100% - var(--nav-height) - ${
          isClient ? promptInputHeight : 0
        }px)`,
      }}
      className="mt-nav px-8 w-full"
    >
      <PromptFeedback />
    </div>
  );
};

export default Home;
