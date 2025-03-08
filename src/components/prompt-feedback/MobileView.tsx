import type { Feedback } from '@/lib/schemas'
import type { DeepPartial } from 'ai'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '../ui/carousel'
import { FeedbackContainer } from './FeedbackContainer'
import { FeedbackSection } from './FeedbackSection'

type MobileViewProps = {
	feedback: DeepPartial<Feedback>
}

export const MobileView = ({ feedback }: MobileViewProps) => {
	return (
		<FeedbackContainer>
			<Carousel className='h-fit w-full max-w-2xl'>
				<CarouselContent>
					<CarouselItem className='flex justify-center'>
						<FeedbackSection
							title='Feedback'
							feedback={feedback?.response}
							disableCopy
						/>
					</CarouselItem>
					<CarouselItem className='flex justify-center'>
						<FeedbackSection
							title='Recommended Prompt'
							feedback={feedback?.prompt}
						/>
					</CarouselItem>
				</CarouselContent>
				<div className='mt-8 flex w-full justify-center gap-8'>
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</FeedbackContainer>
	)
}
