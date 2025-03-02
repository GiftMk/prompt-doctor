'use client'

import { HeartPulseIcon } from 'lucide-react'
import { Heading } from './Heading'
import { useAtomValue } from 'jotai'
import { loadingAtom } from '@/state/atoms'
import { cn } from '@/lib/utils'

export const Logo = () => {
	const loading = useAtomValue(loadingAtom)

	return (
		<div className='flex items-center gap-1 text-foreground'>
			<Heading level={3} className='font-bold uppercase italic'>
				Prompt
			</Heading>
			<HeartPulseIcon
				className={cn('fill-pink-100/50 text-pink-400', {
					'animate-heartbeat': loading,
				})}
			/>
			<Heading level={3} className='font-bold uppercase italic'>
				Doctor
			</Heading>
		</div>
	)
}
