"use client";

import { feedbackAtom, loadingAtom } from "@/state/atoms";
import { useAtomValue } from "jotai";
import { FeedbackSection } from "./FeedbackSection";

export const PromptFeedback = () => {
  const feedback = useAtomValue(feedbackAtom);
  const loading = useAtomValue(loadingAtom);

  return (
    <div className="flex w-full h-full gap-4">
      <FeedbackSection
        loading={loading}
        title="feedback"
        feedback={feedback?.response}
        disableCopy
      />
      <FeedbackSection
        loading={loading}
        title="Recommended Prompt"
        feedback={feedback?.prompt}
      />
    </div>
  );
};
