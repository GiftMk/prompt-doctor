"use client";

import { feedbackAtom, loadingAtom } from "@/state/atoms";
import { useAtomValue } from "jotai";
import { FeedbackSection } from "./FeedbackSection";
import { FeedbackContainer } from "./FeedbackContainer";

export const PromptFeedback = () => {
  const feedback = useAtomValue(feedbackAtom);
  const loading = useAtomValue(loadingAtom);

  return (
			<FeedbackContainer>
				<div className="flex flex-col md:flex-row w-full h-full gap-4">
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
			</FeedbackContainer>
		);
};
