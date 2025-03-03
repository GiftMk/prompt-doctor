import { Markdown } from '@/components/Markdown'
import { CopyButton } from '../CopyButton'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

type FeedbackSectionProps = {
	feedback?: string
	title: string
	disableCopy?: boolean
	loading: boolean
}

export const FeedbackSection = ({
	feedback,
	title,
	disableCopy,
	loading,
}: FeedbackSectionProps) => {
	const hideCopy = feedback?.length === 0 || disableCopy

	return (
		<div className='flex w-full flex-col overflow-auto px-8 pb-4'>
			<span className='sticky top-0 flex items-center gap-2 bg-background'>
				<p className='font-medium text-foreground/70 text-xs'>{title}</p>
				<CopyButton text={feedback} className={cn({ invisible: hideCopy })} />
			</span>
			<AnimatePresence>
				{!loading && (
					<motion.div
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 10 }}
					>
						<Markdown>{feedback}</Markdown>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
