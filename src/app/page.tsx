"use client";

import { AuthInput } from "@/components/AuthInput";
import { PromptFeedback } from "@/components/prompt-feedback";
import { isAuthenticatedAtom } from "@/state/atoms";
import { useAtomValue } from "jotai";

const Home = () => {
	const isAuthenticated = useAtomValue(isAuthenticatedAtom);

	if (isAuthenticated) {
		return <PromptFeedback />;
	}

	return <AuthInput />;
};

export default Home;
