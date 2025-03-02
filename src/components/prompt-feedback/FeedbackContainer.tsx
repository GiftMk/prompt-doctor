import { useIsClient } from "@/hooks/useIsClient";
import { promptInputHeightAtom } from "@/state/atoms";
import { useAtomValue } from "jotai";

export const FeedbackContainer = ({ children }: React.PropsWithChildren) => {
	const isClient = useIsClient();
	const promptInputHeight = useAtomValue(promptInputHeightAtom);

	return (
		<div
			style={{
				height: `calc(100% - var(--nav-height) - ${
					isClient ? promptInputHeight : 0
				}px)`,
			}}
			className="mt-nav w-full"
		>
			{children}
		</div>
	);
};