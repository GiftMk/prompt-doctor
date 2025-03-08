import type { Feedback } from '@/lib/schemas'
import type { DeepPartial } from 'ai'
import { FeedbackContainer } from './FeedbackContainer'
import { FeedbackSection } from './FeedbackSection'

type DesktopViewProps = {
	feedback: DeepPartial<Feedback>
}

export const DesktopView = ({ feedback }: DesktopViewProps) => {
	return (
		<FeedbackContainer>
			<div className='flex h-full w-full flex-col gap-4 md:flex-row'>
				<FeedbackSection
					title='Feedback'
					feedback={feedback?.response}
					className='w-full'
					disableCopy
				/>
				<FeedbackSection
					title='Recommended Prompt'
					className='w-full'
					feedback={feedback?.prompt}
				/>
			</div>
		</FeedbackContainer>
	)
}
