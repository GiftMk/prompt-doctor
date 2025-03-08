'use client'

import { FeedbackContainer } from './FeedbackContainer'
import { useAtomValue } from 'jotai'
import { feedbackAtom } from '@/state/atoms'
import { useIsMobile } from '@/hooks/useIsMobile'
import { MobileView } from './MobileView'
import { DesktopView } from './DesktopView'

export const PromptFeedback = () => {
	const feedback = useAtomValue(feedbackAtom)
	const isMobile = useIsMobile()

	if (!feedback) {
		return (
			<FeedbackContainer>
				<p>Submit a prompt to get started</p>
			</FeedbackContainer>
		)
	}

	if (isMobile) {
		return <MobileView feedback={feedback} />
	}

	return <DesktopView feedback={feedback} />
}
